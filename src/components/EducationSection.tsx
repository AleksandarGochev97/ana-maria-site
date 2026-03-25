import { useT } from "@/i18n/useT";

const EducationSection = () => {
  const t = useT();

  return (
    <section id="education" className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">{t("education.title")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            {t("education.body")}
          </p>

          <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-6">
            <p className="text-xs tracking-[0.25em] text-foreground/70">{t("education.exp")}</p>
            <p className="mt-3 font-display text-2xl">{t("education.exp.years")}</p>
            <p className="mt-2 text-sm text-foreground/70">
              {t("education.exp.body")}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="font-medium text-foreground">{t("education.item1")}</p>
            <p className="mt-2 text-sm text-foreground/70">{t("education.item1.body")}</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="font-medium text-foreground">{t("education.item2")}</p>
            <p className="mt-2 text-sm text-foreground/70">{t("education.item2.body")}</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-6">
            <p className="font-medium text-foreground">{t("education.item3")}</p>
            <p className="mt-2 text-sm text-foreground/70">{t("education.item3.body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
