import { useState } from "react";

import { useLanguage, useT } from "@/i18n/useT";
import type { Language } from "@/i18n/translations";

const navKeys = [
  { key: "nav.home", href: "#" },
  { key: "nav.about", href: "#about" },
  { key: "nav.performances", href: "#performances" },
  { key: "nav.teaching", href: "#teaching" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.contact", href: "#contact" },
];

const flags: { lang: Language; label: string; icon: string }[] = [
  { lang: "en", label: "English", icon: "🇬🇧" },
  { lang: "it", label: "Italiano", icon: "🇮🇹" },
];

const Navbar = () => {
  const [imageOk, setImageOk] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useT();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-wine/70 backdrop-blur supports-[backdrop-filter]:bg-wine/60">
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
              {t("nav.subtitle")}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium tracking-[0.22em] text-ivory/80 md:flex">
          {navKeys.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ivory"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {flags.map((f) => (
              <button
                key={f.lang}
                type="button"
                aria-label={f.label}
                onClick={() => setLanguage(language === f.lang ? "bg" : f.lang)}
                className={
                  "rounded-md px-1.5 py-1 text-base leading-none transition " +
                  (language === f.lang
                    ? "bg-white/20 ring-1 ring-gold/50"
                    : "opacity-60 hover:opacity-100")
                }
              >
                {f.icon}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? t("nav.mobile.close") : t("nav.mobile.open")}
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
            {t("nav.cta.performance")}
          </a>

          <a
            href="#contact"
            className="rounded-md bg-gold px-4 py-2 text-xs font-medium text-wine transition hover:bg-gold/90"
          >
            {t("nav.cta.lesson")}
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
                {navKeys.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-3 transition hover:bg-white/10"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-md border border-ivory/25 bg-white/5 px-4 py-3 text-center text-xs font-medium text-ivory transition hover:bg-white/10"
                >
                  {t("nav.cta.performance")}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-md bg-gold px-4 py-3 text-center text-xs font-medium text-wine transition hover:bg-gold/90"
                >
                  {t("nav.cta.lesson")}
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
