import { useT } from "@/i18n/useT";

const TeachingSection = () => {
  const t = useT();

  return (
    <section id="teaching" className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">{t("teaching.title")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            {t("teaching.body.before")}<span className="font-medium text-foreground">{t("teaching.body.inPerson")}</span>.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <p className="text-xs tracking-[0.25em] text-foreground/60">{t("teaching.disciplines")}</p>
              <p className="mt-3 font-medium text-foreground">{t("teaching.disciplines.body")}</p>
              <p className="mt-2 text-sm text-foreground/70">
                {t("teaching.disciplines.sub")}
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <p className="text-xs tracking-[0.25em] text-foreground/60">{t("teaching.forWho")}</p>
              <p className="mt-3 font-medium text-foreground">{t("teaching.forWho.body")}</p>
              <p className="mt-2 text-sm text-foreground/70">
                {t("teaching.forWho.sub")}
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <p className="text-xs tracking-[0.25em] text-foreground/60">{t("teaching.prep")}</p>
              <p className="mt-3 font-medium text-foreground">{t("teaching.prep.body")}</p>
              <p className="mt-2 text-sm text-foreground/70">
                {t("teaching.prep.sub")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
            >
              {t("teaching.cta.book")}
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-border/70 bg-card/60 px-6 py-3 text-center text-sm font-medium text-foreground transition hover:bg-card sm:w-auto"
            >
              {t("teaching.cta.ask")}
            </a>
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
            <p className="text-xs tracking-[0.25em] text-foreground/70">{t("teaching.practical")}</p>
            <p className="mt-3 font-display text-xl">{t("teaching.practical.title")}</p>
            <p className="mt-1 text-sm text-foreground/70">
              {t("teaching.practical.body")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
