const EducationSection = () => {
  return (
    <section id="education" className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Образование и опит</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            Дългогодишна сцена и педагогика, подкрепени от академична подготовка.
            Тук секцията е тестова – можем да добавим точните специалности, университети и години.
          </p>

          <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-6">
            <p className="text-xs tracking-[0.25em] text-foreground/70">ОПИТ</p>
            <p className="mt-3 font-display text-2xl">20+ години</p>
            <p className="mt-2 text-sm text-foreground/70">
              Изпълнения, проекти и преподаване с внимание към стил, музикална култура и артистично присъствие.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="font-medium text-foreground">Висше образование 1</p>
            <p className="mt-2 text-sm text-foreground/70">(тестово) Фокус: класическа музика / инструмент / вокал</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="font-medium text-foreground">Висше образование 2</p>
            <p className="mt-2 text-sm text-foreground/70">(тестово) Фокус: педагогика / музикална теория</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="font-medium text-foreground">Висше образование 3</p>
            <p className="mt-2 text-sm text-foreground/70">(тестово) Фокус: специализация / майсторски класове</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
