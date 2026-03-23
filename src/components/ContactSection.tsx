import { useState } from "react";

type ContactMode = "lessons" | "performances";

const ContactSection = () => {
  const [mode, setMode] = useState<ContactMode>("lessons");

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />
        <div className="absolute left-1/2 top-0 h-56 w-[46rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.32em] text-warm-gray">КОНТАКТ</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Запитване</h2>
            <div className="mt-3 h-px w-16 bg-gold/70" />
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
              Избери повод и изпрати кратко запитване. Отговарям с възможни часове или с уточняващи въпроси.
            </p>

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

            <div className="mt-7 grid gap-4">
              <div className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-sm">
                <p className="text-xs font-medium tracking-[0.32em] text-warm-gray">INSTAGRAM</p>
                <a
                  href="https://instagram.com/anamariakraycheva"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-medium text-primary hover:underline"
                >
                  @anamariakraycheva
                </a>
                <p className="mt-3 text-sm text-foreground/70">Град: София</p>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-wine/5 p-6 shadow-sm">
                <p className="text-xs font-medium tracking-[0.32em] text-warm-gray">БЪРЗО</p>
                <p className="mt-3 font-display text-xl">
                  {mode === "lessons" ? "За свободни часове" : "За участие/концерт"}
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  {mode === "lessons"
                    ? "Посочи инструмент и предпочитани дни/часове."
                    : "Посочи дата, локация и формат (рецитал/събитие/програма)."}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-sm md:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                    ИМЕ
                  </label>
                  <input
                    id="contact-name"
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                    placeholder="Вашето име"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                    ИМЕЙЛ
                  </label>
                  <input
                    id="contact-email"
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                    placeholder="you@example.com"
                    type="email"
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
                        ИНСТРУМЕНТ
                      </label>
                      <select
                        id="contact-instrument"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
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
                      >
                        <option>Начинаещ</option>
                        <option>Средно</option>
                        <option>Напреднал</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-availability"
                      className="text-xs font-medium tracking-[0.22em] text-warm-gray"
                    >
                      ПРЕДПОЧИТАНИ ДНИ/ЧАСОВЕ
                    </label>
                    <input
                      id="contact-availability"
                      className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                      placeholder="Напр. делнични след 17:00 или събота"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-date" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                        ДАТА
                      </label>
                      <input
                        id="contact-date"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        placeholder="Напр. 12.06.2026"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-location"
                        className="text-xs font-medium tracking-[0.22em] text-warm-gray"
                      >
                        ЛОКАЦИЯ/ГРАД
                      </label>
                      <input
                        id="contact-location"
                        className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                        placeholder="Напр. София, клуб/сцена"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-format" className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                      ФОРМАТ
                    </label>
                    <input
                      id="contact-format"
                      className="mt-2 w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background"
                      placeholder="Рецитал / събитие / концерт / заведение"
                    />
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
                />
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-wine transition hover:bg-gold/90"
              >
                {mode === "lessons" ? "Изпрати запитване за урок (тест)" : "Изпрати запитване за участие (тест)"}
              </button>

              <p className="text-xs text-foreground/60">
                Формата е тестова и не изпраща реални имейли. При готовност ще я вържем към EmailJS / Formspree.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
