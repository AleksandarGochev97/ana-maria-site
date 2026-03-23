const AboutSection = () => {
  return (
    <section id="about" className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">За Ана-Мария</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            Ана-Мария Крайчева е флейтистка, оперна певица и пианистка с над 20 години опит.
            Със съчетание от сценично присъствие, музикална елегантност и педагогически подход,
            тя изгражда репертоар и ученици с внимание към стила, техниката и артистичния разказ.
          </p>

          <div className="mt-6 rounded-2xl border border-border/70 bg-card/60 p-6">
            <p className="text-xs tracking-[0.25em] text-foreground/70">АКЦЕНТИ</p>
            <div className="mt-4 grid gap-4 text-sm text-foreground/80">
              <div>
                <p className="font-medium text-foreground">Образование</p>
                <p className="mt-1 text-foreground/70">
                  3 висши образования в областта на музиката (детайлите могат да се добавят по-късно).
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Езици</p>
                <p className="mt-1 text-foreground/70">Български • Италиански • Английски</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Работа</p>
                <p className="mt-1 text-foreground/70">
                  Изпълнения, камерни проекти и преподаване по флейта, пиано, солфеж и оперно пеене.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-primary/10 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/60">
            <img
              alt="Portrait placeholder"
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=80"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
