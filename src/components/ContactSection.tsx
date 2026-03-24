import { useEffect, useMemo, useState } from "react";

type ContactMode = "lessons" | "performances";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
] as const;

const getTodayIso = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

type BookingType = "lesson" | "performance";
type BookingStatus = "pending" | "confirmed" | "rejected";

type BookingRow = {
  id: string;
  booking_type: BookingType;
  date: string;
  time: string;
  status: BookingStatus;
};

const normalizeTime = (t: string) => t.slice(0, 5);

const FALLBACK_SUPABASE_URL = "https://xuxrslpqugrbjqwvezbc.supabase.co";
const FALLBACK_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1eHJzbHBxdWdyYmpxd3ZlemJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNzA1MTcsImV4cCI6MjA4OTg0NjUxN30.OX2wGIrk_OA7oaIqhBzvWWjkIoKcWg1MAlTC8omjQng";

const ContactSection = () => {
  const [mode, setMode] = useState<ContactMode>("lessons");

  const supabaseUrl =
    (import.meta.env.VITE_SUPABASE_URL as string | undefined) || FALLBACK_SUPABASE_URL;
  const supabaseAnonKey =
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
    FALLBACK_SUPABASE_ANON_KEY;

  const [lessonDate, setLessonDate] = useState<string>(getTodayIso());
  const [lessonTimes, setLessonTimes] = useState<string[]>([]);

  const [performanceDate, setPerformanceDate] = useState<string>(getTodayIso());
  const [performanceTime, setPerformanceTime] = useState<string>("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [instrument, setInstrument] = useState("Флейта");
  const [level, setLevel] = useState("Начинаещ");
  const [availabilityOther, setAvailabilityOther] = useState("");

  const [performanceLocation, setPerformanceLocation] = useState("");
  const [performanceFormat, setPerformanceFormat] = useState("");

  const bookingType: BookingType = mode === "lessons" ? "lesson" : "performance";
  const selectedDate = mode === "lessons" ? lessonDate : performanceDate;

  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitOk, setSubmitOk] = useState(false);

  const canUseSupabase = Boolean(supabaseUrl && supabaseAnonKey);

  const envDebug = {
    url: supabaseUrl || "(липсва)",
    key: supabaseAnonKey ? `${supabaseAnonKey.slice(0, 8)}...` : "(липсва)",
  };

  const bookedTimeSet = useMemo(() => new Set(bookedTimes), [bookedTimes]);

  const submitDisabled =
    !name.trim() ||
    !email.trim() ||
    !selectedDate ||
    (mode === "lessons"
      ? lessonTimes.length === 0
      : !performanceTime || !performanceLocation.trim() || !performanceFormat.trim());

  const fetchAvailability = async (date: string, type: BookingType) => {
    if (!canUseSupabase || !supabaseUrl || !supabaseAnonKey) return;

    setLoadingAvailability(true);
    setSubmitError(null);

    try {
      const url = new URL(`${supabaseUrl}/rest/v1/bookings`);
      url.searchParams.set("select", "time,status");
      url.searchParams.set("booking_type", `eq.${type}`);
      url.searchParams.set("date", `eq.${date}`);
      url.searchParams.set("status", "in.(pending,confirmed)");

      const res = await fetch(url.toString(), {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const rows = (await res.json()) as Pick<BookingRow, "time" | "status">[];
      setBookedTimes(rows.map((r) => normalizeTime(r.time)));
    } catch (err) {
      setBookedTimes([]);
      setSubmitError(err instanceof Error ? err.message : "Грешка при зареждане на заетостта.");
    } finally {
      setLoadingAvailability(false);
    }
  };

  useEffect(() => {
    void fetchAvailability(selectedDate, bookingType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, bookingType, canUseSupabase]);

  const createBooking = async (payload: Record<string, unknown> | Record<string, unknown>[]) => {
    if (!canUseSupabase || !supabaseUrl || !supabaseAnonKey) {
      throw new Error("Supabase не е конфигуриран. Добави VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY.");
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      if (text.includes("duplicate key") || text.includes("23505") || text.includes("bookings_unique_slot")) {
        throw new Error("Този слот вече е зает. Избери друга дата или час.");
      }

      throw new Error(text || `HTTP ${res.status}`);
    }

    return (await res.json()) as BookingRow[];
  };

  const onSubmit = async () => {
    setSubmitOk(false);
    setSubmitError(null);

    const date = selectedDate;
    const time = mode === "lessons" ? "" : performanceTime;

    if (!name.trim()) return setSubmitError("Моля, въведи име.");
    if (!email.trim()) return setSubmitError("Моля, въведи имейл.");
    if (!date) return setSubmitError("Моля, избери дата.");
    if (mode === "lessons" && lessonTimes.length === 0) return setSubmitError("Моля, избери час.");
    if (mode === "performances" && !performanceTime) return setSubmitError("Моля, избери час.");
    if (mode === "performances" && !performanceLocation.trim()) return setSubmitError("Моля, въведи локация/град.");
    if (mode === "performances" && !performanceFormat.trim()) return setSubmitError("Моля, въведи формат.");
    if (mode === "lessons" && lessonTimes.some((t) => bookedTimeSet.has(t))) {
      return setSubmitError("Един или повече от избраните часове вече са заети. Избери други.");
    }
    if (mode === "performances" && bookedTimeSet.has(performanceTime)) {
      return setSubmitError("Този час вече е зает. Избери друг.");
    }

    try {
      const base = {
        booking_type: bookingType,
        date,
        status: "pending" satisfies BookingStatus,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        instrument: bookingType === "lesson" ? instrument : null,
        level: bookingType === "lesson" ? level : null,
        availability_other: bookingType === "lesson" ? availabilityOther.trim() : null,
        location: bookingType === "performance" ? performanceLocation.trim() : null,
        format: bookingType === "performance" ? performanceFormat.trim() : null,
      };

      if (mode === "lessons") {
        await createBooking(lessonTimes.map((t) => ({ ...base, time: t })));
      } else {
        await createBooking({ ...base, time: performanceTime });
      }

      setSubmitOk(true);
      setLessonTimes([]);
      setPerformanceTime("");
      setMessage("");

      await fetchAvailability(date, bookingType);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Грешка при запазване.");
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />
        <div className="absolute left-1/2 top-0 h-56 w-[46rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-sm md:p-8">
            <div className="text-center">
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Запитване</h2>
              <div className="mx-auto mt-3 h-px w-16 bg-gold/70" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
                Избери повод и изпрати кратко запитване. Отговарям с възможни часове или с уточняващи въпроси.
              </p>
            </div>

            <div className="mt-7 rounded-[1.5rem] border border-border/70 bg-card/70 p-2 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode("lessons")}
                  className={
                    "rounded-2xl px-4 py-3 text-xs font-semibold tracking-[0.18em] transition " +
                    (mode === "lessons"
                      ? "bg-gold text-wine"
                      : "bg-background/50 text-foreground hover:bg-background/70")
                  }
                >
                  УРОЦИ
                </button>
                <button
                  type="button"
                  onClick={() => setMode("performances")}
                  className={
                    "rounded-2xl px-4 py-3 text-xs font-semibold tracking-[0.18em] transition " +
                    (mode === "performances"
                      ? "bg-gold text-wine"
                      : "bg-background/50 text-foreground hover:bg-background/70")
                  }
                >
                  УЧАСТИЯ
                </button>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                    ИМЕ <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-name"
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                    placeholder="Вашето име"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                    ИМЕЙЛ <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-email"
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                    placeholder="you@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {mode === "lessons" ? (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-instrument"
                        className="text-xs font-medium tracking-[0.22em] text-warm-gray"
                      >
                        ВИД УРОК <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="contact-instrument"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        value={instrument}
                        onChange={(e) => setInstrument(e.target.value)}
                      >
                        <option>Флейта</option>
                        <option>Пиано</option>
                        <option>Оперно пеене</option>
                        <option>Солфеж</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-level" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                        НИВО
                      </label>
                      <select
                        id="contact-level"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                      >
                        <option>Начинаещ</option>
                        <option>Средно</option>
                        <option>Напреднал</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                      ПРЕДПОЧИТАНИ ДНИ/ЧАСОВЕ
                    </label>

                    <div className="mt-3 grid gap-4">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="lesson-date"
                            className="text-xs font-medium tracking-[0.22em] text-warm-gray"
                          >
                            ДАТА <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="lesson-date"
                            type="date"
                            min={getTodayIso()}
                            value={lessonDate}
                            onChange={(e) => {
                              setLessonDate(e.target.value);
                              setLessonTimes([]);
                            }}
                            className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                            СВОБОДНИ ЧАСОВЕ <span className="text-destructive">*</span>
                          </p>
                          <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                            {timeSlots.map((slot) => {
                              const now = new Date();
                              const todayIso = getTodayIso();
                              const [hh, mm] = slot.split(":").map((x) => Number(x));
                              const slotDate = new Date(`${lessonDate}T00:00:00`);
                              slotDate.setHours(hh, mm, 0, 0);

                              const isPastForToday = lessonDate === todayIso && slotDate.getTime() <= now.getTime();
                              const isBooked = bookedTimeSet.has(slot);
                              const unavailable = isPastForToday || isBooked;
                              const active = lessonTimes.includes(slot);

                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  disabled={unavailable}
                                  onClick={() => {
                                    setSubmitError(null);
                                    setSubmitOk(false);

                                    setLessonTimes((prev) => {
                                      if (prev.includes(slot)) return prev.filter((t) => t !== slot);
                                      if (prev.length >= 3) {
                                        setSubmitError("Можеш да избереш до 3 часа наведнъж.");
                                        return prev;
                                      }
                                      return [...prev, slot];
                                    });
                                  }}
                                  className={
                                    "rounded-lg border px-3 py-2 text-xs font-semibold tracking-[0.12em] transition " +
                                    (unavailable
                                      ? "cursor-not-allowed border-border/60 bg-background/30 text-foreground/35"
                                      : active
                                        ? "border-gold/50 bg-gold/15 text-wine"
                                        : "border-border/70 bg-background/50 text-foreground hover:bg-background/70")
                                  }
                                  aria-pressed={active}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                          {loadingAvailability ? (
                            <p className="mt-2 text-xs text-foreground/60">Зареждане на заетост...</p>
                          ) : null}
                          {!canUseSupabase ? (
                            <p className="mt-2 text-xs text-foreground/60">
                              Supabase не е конфигуриран. Провери `.env.local`:
                              <span className="ml-1 font-mono">
                                VITE_SUPABASE_URL={envDebug.url} • VITE_SUPABASE_ANON_KEY={envDebug.key}
                              </span>
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-availability" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                          ДРУГО (ОПЦИОНАЛНО)
                        </label>
                        <input
                          id="contact-availability"
                          className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                          placeholder="Напр. само събота, или след 17:30"
                          value={availabilityOther}
                          onChange={(e) => setAvailabilityOther(e.target.value)}
                        />

                        {(lessonDate || lessonTimes.length > 0) && (
                          <p className="mt-2 text-xs text-foreground/60">
                            Избрано: {lessonDate ? lessonDate : "—"} • {lessonTimes.length ? lessonTimes.join(", ") : "час"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-date" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                        ДАТА <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="contact-date"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        type="date"
                        min={getTodayIso()}
                        value={performanceDate}
                        onChange={(e) => {
                          setPerformanceDate(e.target.value);
                          setPerformanceTime("");
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-location"
                        className="text-xs font-medium tracking-[0.22em] text-warm-gray"
                      >
                        ЛОКАЦИЯ/ГРАД <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="contact-location"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        placeholder="Напр. София, клуб/сцена"
                        value={performanceLocation}
                        onChange={(e) => setPerformanceLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="contact-performance-time" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                          ЧАС (НАЧАЛО) <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="contact-performance-time"
                          type="time"
                          value={performanceTime}
                          onChange={(e) => setPerformanceTime(e.target.value)}
                          className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        />
                        {performanceTime && bookedTimeSet.has(performanceTime) ? (
                          <p className="mt-2 text-xs text-destructive">Този час вече е зает за избраната дата.</p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="contact-format" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                          ФОРМАТ <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="contact-format"
                          className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                          placeholder="Сватба / събитие / концерт / заведение"
                          value={performanceFormat}
                          onChange={(e) => setPerformanceFormat(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="contact-message" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                  СЪОБЩЕНИЕ
                </label>
                <textarea
                  id="contact-message"
                  className="mt-2 min-h-32 w-full resize-none rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                  placeholder={
                    mode === "lessons"
                      ? "Цел, възраст (ако е дете), предишен опит и предпочитани часове..."
                      : "Повод, програма/стил, технически изисквания и бюджет/условия (ако има)..."
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="button"
                onClick={onSubmit}
                disabled={submitDisabled}
                className={
                  "w-full rounded-md px-6 py-3 text-sm font-semibold transition " +
                  (submitDisabled
                    ? "cursor-not-allowed bg-gold/40 text-wine/60"
                    : "bg-gold text-wine hover:bg-gold/90")
                }
              >
                {mode === "lessons" ? "Изпрати запитване за урок" : "Изпрати запитване за участие"}
              </button>

              {submitError ? (
                <p className="text-xs text-destructive">{submitError}</p>
              ) : submitOk ? (
                <p className="text-xs text-foreground/70">Запитването е записано. Очаквай отговор.</p>
              ) : null}

              <p className="text-xs text-foreground/60">
                Формата записва заявка (pending). При готовност ще добавим админ панел и известяване по имейл.
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
