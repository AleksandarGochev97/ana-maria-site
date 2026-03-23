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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-transparent to-background/85" />
      </div>

      <div className="container relative z-10 flex min-h-[78vh] items-center py-20 md:min-h-[86vh] md:py-28">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur-sm md:p-10">
          <p className="text-xs tracking-[0.25em] text-white/75">SOFIA • BULGARIA</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-white md:text-6xl">
            Ана-Мария Крайчева
          </h1>
          <p className="mt-4 text-sm text-white/85 md:text-base">
            Флейтистка • Оперна певица • Пианистка
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#performances"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
            >
              Виж изпълнения
            </a>
            <a
              href="#teaching"
              className="w-full rounded-full border border-border/70 bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card sm:w-auto"
            >
              Уроци и подготовка
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
              <p className="font-display text-lg">20+ години</p>
              <p className="mt-1 text-sm text-foreground/70">сценичен и педагогически опит</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
              <p className="font-display text-lg">3 висши</p>
              <p className="mt-1 text-sm text-foreground/70">образования, свързани с музиката</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
              <p className="font-display text-lg">Присъствено</p>
              <p className="mt-1 text-sm text-foreground/70">уроци за всички възрасти</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
