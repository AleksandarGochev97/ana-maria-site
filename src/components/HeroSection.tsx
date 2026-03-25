const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/ani.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "50% 30%",
            opacity: 1,
            filter: "contrast(1.12) saturate(1.08) brightness(0.92)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "240px 240px",
          }}
        />
        <div className="absolute inset-0 bg-wine/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-wine/35 via-wine/65 to-ivory" />
      </div>

      <div className="container relative z-10 flex min-h-[78vh] items-center justify-center py-20 text-center md:min-h-[86vh] md:py-28">
        <div className="mx-auto max-w-4xl">
          <h1
            className="mt-7 font-display text-4xl leading-[1.02] text-ivory md:text-6xl"
            style={{ textShadow: "0 18px 70px rgba(0,0,0,0.55)" }}
          >
            Ана-Мария Крайчева
          </h1>

          <p className="mt-3 text-[11px] font-medium tracking-[0.34em] text-gold/90 md:text-xs">
            ОПЕРНА ПЕВИЦА •{" "}
            <span className="relative inline-block px-1">
              ФЛЕЙТИСТ
              <span className="absolute left-1/2 top-full mt-2 h-px w-10 -translate-x-1/2 bg-gold/70" />
            </span>{" "}
            • ПИАНИСТ
          </p>

          <div className="mt-8 space-y-2">
            <p
              className="font-display text-4xl leading-[1.02] text-ivory md:text-7xl"
              style={{ textShadow: "0 18px 70px rgba(0,0,0,0.55)" }}
            >
              Глас от Операта.
            </p>
            <p
              className="font-display text-4xl italic leading-[1.02] text-gold md:text-7xl"
              style={{ textShadow: "0 18px 70px rgba(0,0,0,0.55)" }}
            >
              Душа във флейтата.
            </p>
            <p
              className="font-display text-4xl leading-[1.02] text-ivory md:text-7xl"
              style={{ textShadow: "0 18px 70px rgba(0,0,0,0.55)" }}
            >
              Цял живот в изкуството.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#performances"
              className="w-full rounded-md bg-gold px-8 py-3 text-sm font-semibold text-wine transition hover:bg-gold/90 sm:w-auto"
            >
              ИЗПЪЛНЕНИЯ
            </a>
            <a
              href="#contact"
              className="w-full rounded-md border border-ivory/25 bg-white/5 px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-white/10 sm:w-auto"
            >
              РЕЗЕРВИРАЙ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
