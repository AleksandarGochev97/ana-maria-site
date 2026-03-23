import { useEffect, useState } from "react";

const navItems = [
  { label: "За Ана-Мария", href: "#about" },
  { label: "Образование", href: "#education" },
  { label: "Изпълнения", href: "#performances" },
  { label: "Преподаване", href: "#teaching" },
  { label: "Галерия", href: "#gallery" },
  { label: "Контакт", href: "#contact" },
];

const languages = ["BG", "IT", "EN"] as const;

type Lang = (typeof languages)[number];

const Navbar = () => {
  const [lang, setLang] = useState<Lang>("BG");
  const [imageOk, setImageOk] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("site_lang") as Lang | null;
    if (stored && languages.includes(stored)) setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("site_lang", lang);
  }, [lang]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/50 bg-secondary/40">
            {imageOk ? (
              <img
                alt="Ана-Мария Крайчева"
                src="/ani.jpg"
                className="h-full w-full object-cover"
                onError={() => setImageOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-sm text-foreground/80">
                AK
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/30" />
          </div>

          <div className="leading-tight">
            <div className="font-display text-sm tracking-wide md:text-base">
              Ana-Maria <span className="text-primary">Kraycheva</span>
            </div>
            <div className="hidden text-xs text-foreground/60 md:block">
              Flutist • Opera Singer • Pianist
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-border/70 bg-card/60 p-1 md:flex">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={
                  "rounded-full px-3 py-1 text-xs transition " +
                  (lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground")
                }
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Свържи се
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
