const TeachingSection = () => {
  return (
    <section id="teaching" className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Преподаване</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            Уроци по музика, изградени върху класическа школа и артистична свобода.
            Занятията са <span className="font-medium text-foreground">само присъствено</span> в гр. София.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <p className="font-medium text-foreground">Дисциплини</p>
              <p className="mt-2 text-sm text-foreground/70">
                Флейта • Пиано • Солфеж • Оперно пеене
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <p className="font-medium text-foreground">За кого са подходящи</p>
              <p className="mt-2 text-sm text-foreground/70">
                За всички възрасти – деца, ученици, студенти и възрастни, както начинаещи,
                така и напреднали.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <p className="font-medium text-foreground">Подготовка</p>
              <p className="mt-2 text-sm text-foreground/70">
                Подготовка за конкурси, изпити, прослушвания и сценична практика (според целите на ученика).
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-gold/20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/60">
            <img
              alt="Teaching placeholder"
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=80"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="text-xs tracking-[0.25em] text-foreground/70">ЛОКАЦИЯ</p>
            <p className="mt-3 font-display text-xl">София</p>
            <p className="mt-1 text-sm text-foreground/70">
              За график и свободни часове – използвай формата за контакт.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
