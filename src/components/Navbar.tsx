import { useState } from "react";

const navItems = [
  { label: "НАЧАЛО", href: "#" },
  { label: "ЗА МЕН", href: "#about" },
  { label: "ИЗПЪЛНЕНИЯ", href: "#performances" },
  { label: "ОБУЧЕНИЕ", href: "#teaching" },
  { label: "ГАЛЕРИЯ", href: "#gallery" },
  { label: "КОНТАКТИ", href: "#contact" },
];

const Navbar = () => {
  const [imageOk, setImageOk] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-wine/70 backdrop-blur supports-[backdrop-filter]:bg-wine/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 bg-white/5">
            {imageOk ? (
              <img
                alt="Ана-Мария Крайчева"
                src="/ani.jpg"
                className="h-full w-full object-cover"
                onError={() => setImageOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-sm text-ivory/80">
                AK
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/25" />
          </div>

          <div className="leading-tight">
            <div className="font-display text-sm tracking-wide text-ivory md:text-base">
              ♪ Ана-Мария Крайчева
            </div>
            <div className="hidden text-xs text-ivory/65 md:block">
              Оперна певица • Флейтистка • Пианистка
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium tracking-[0.22em] text-ivory/80 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={mobileOpen ? "Затвори меню" : "Отвори меню"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ivory/15 bg-white/5 text-ivory transition hover:bg-white/10 md:hidden"
          >
            <span className="text-lg leading-none">☰</span>
          </button>

          <a
            href="#contact"
            className="hidden rounded-md border border-ivory/25 bg-white/5 px-4 py-2 text-xs font-medium text-ivory transition hover:bg-white/10 md:inline-flex"
          >
            Запитване за участие
          </a>

          <a
            href="#contact"
            className="rounded-md bg-gold px-4 py-2 text-xs font-medium text-wine transition hover:bg-gold/90"
          >
            Запази час
          </a>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-wine/95 backdrop-blur">
            <div className="container py-4">
              <nav className="grid gap-3 text-xs font-medium tracking-[0.22em] text-ivory/85">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-3 transition hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-md border border-ivory/25 bg-white/5 px-4 py-3 text-center text-xs font-medium text-ivory transition hover:bg-white/10"
                >
                  Запитване за участие
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-md bg-gold px-4 py-3 text-center text-xs font-medium text-wine transition hover:bg-gold/90"
                >
                  Запази час
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
