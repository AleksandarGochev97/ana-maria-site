import { useEffect, useMemo, useState } from "react";

type BookingType = "lesson" | "performance";
type BookingStatus = "pending" | "confirmed" | "rejected";

type BookingRow = {
  id: string;
  created_at: string;
  booking_type: BookingType;
  date: string;
  time: string;
  status: BookingStatus;
  name: string;
  email: string;
  message: string | null;
  instrument: string | null;
  level: string | null;
  availability_other: string | null;
  location: string | null;
  format: string | null;
};

const FALLBACK_SUPABASE_URL = "https://xuxrslpqugrbjqwvezbc.supabase.co";
const FALLBACK_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1eHJzbHBxdWdyYmpxd3ZlemJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNzA1MTcsImV4cCI6MjA4OTg0NjUxN30.OX2wGIrk_OA7oaIqhBzvWWjkIoKcWg1MAlTC8omjQng";

const AdminRequests = () => {
  const supabaseUrl =
    (import.meta.env.VITE_SUPABASE_URL as string | undefined) || FALLBACK_SUPABASE_URL;
  const supabaseAnonKey =
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
    FALLBACK_SUPABASE_ANON_KEY;

  const canUseSupabase = Boolean(supabaseUrl && supabaseAnonKey);

  const [rows, setRows] = useState<BookingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const headers = useMemo(() => {
    if (!supabaseAnonKey) return undefined;
    return {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
    };
  }, [supabaseAnonKey]);

  const fetchPending = async () => {
    if (!canUseSupabase || !supabaseUrl || !headers) return;

    setLoading(true);
    setError(null);

    try {
      const url = new URL(`${supabaseUrl}/rest/v1/bookings`);
      url.searchParams.set(
        "select",
        "id,created_at,booking_type,date,time,status,name,email,message,instrument,level,availability_other,location,format"
      );
      url.searchParams.set("status", "eq.pending");
      url.searchParams.set("order", "created_at.desc");
      url.searchParams.set("limit", "200");

      const res = await fetch(url.toString(), { headers });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      setRows((await res.json()) as BookingRow[]);
    } catch (err) {
      setRows([]);
      setError(err instanceof Error ? err.message : "Грешка при зареждане.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: BookingStatus) => {
    if (!canUseSupabase || !supabaseUrl || !headers) return;

    setError(null);

    try {
      const url = new URL(`${supabaseUrl}/rest/v1/bookings`);
      url.searchParams.set("id", `eq.${id}`);

      const res = await fetch(url.toString(), {
        method: "PATCH",
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      await fetchPending();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Грешка при запис.");
    }
  };

  useEffect(() => {
    void fetchPending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canUseSupabase]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container py-10">
        <div className="max-w-4xl">
          <p className="text-xs font-medium tracking-[0.32em] text-warm-gray">ADMIN</p>
          <h1 className="mt-3 font-display text-3xl md:text-4xl">Заявки (pending)</h1>
          <div className="mt-3 h-px w-20 bg-gold/70" />

          <div className="mt-6 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm">
            {!canUseSupabase ? (
              <p className="text-sm text-foreground/70">
                Липсва Supabase конфигурация. Добави `VITE_SUPABASE_URL` и `VITE_SUPABASE_ANON_KEY` в `.env.local` и
                рестартирай сървъра.
              </p>
            ) : loading ? (
              <p className="text-sm text-foreground/70">Зареждане...</p>
            ) : rows.length === 0 ? (
              <p className="text-sm text-foreground/70">Няма pending заявки.</p>
            ) : (
              <div className="grid gap-4">
                {rows.map((r) => (
                  <div key={r.id} className="rounded-xl border border-border/70 bg-background/60 p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <p className="text-xs font-medium tracking-[0.22em] text-warm-gray">
                          {r.booking_type === "lesson" ? "УРОК" : "УЧАСТИЕ"} • {r.date} • {r.time}
                        </p>
                        <p className="mt-2 font-medium">{r.name}</p>
                        <p className="mt-1 text-sm text-foreground/70 break-all">{r.email}</p>

                        {r.booking_type === "lesson" ? (
                          <p className="mt-3 text-sm text-foreground/75">
                            {r.instrument || "—"} • {r.level || "—"}
                            {r.availability_other ? ` • ${r.availability_other}` : ""}
                          </p>
                        ) : (
                          <p className="mt-3 text-sm text-foreground/75">
                            {r.location || "—"}
                            {r.format ? ` • ${r.format}` : ""}
                          </p>
                        )}

                        {r.message ? (
                          <p className="mt-3 text-sm text-foreground/80">{r.message}</p>
                        ) : null}
                      </div>

                      <div className="grid gap-2 md:w-56">
                        <button
                          type="button"
                          onClick={() => updateStatus(r.id, "confirmed")}
                          className="w-full rounded-md bg-gold px-4 py-2 text-xs font-semibold text-wine transition hover:bg-gold/90"
                        >
                          Потвърди
                        </button>
                        <button
                          type="button"
                          onClick={() => updateStatus(r.id, "rejected")}
                          className="w-full rounded-md border border-border/70 bg-background/60 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-background"
                        >
                          Откажи
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {error ? <p className="mt-4 text-xs text-destructive">{error}</p> : null}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={fetchPending}
                className="rounded-md border border-border/70 bg-background/60 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-background"
              >
                Обнови
              </button>
              <a
                href="/"
                className="rounded-md border border-border/70 bg-background/60 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-background"
              >
                Към сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminRequests;
