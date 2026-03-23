const ContactSection = () => {
  return (
    <section id="contact" className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Контакт</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            За участия, концерти и уроци (само присъствено) – изпрати съобщение.
          </p>

          <div className="mt-6 rounded-2xl border border-border/70 bg-card/60 p-6">
            <p className="text-xs tracking-[0.25em] text-foreground/70">INSTAGRAM</p>
            <a
              href="https://instagram.com/anamariakraycheva"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-medium text-primary hover:underline"
            >
              @anamariakraycheva
            </a>
            <p className="mt-3 text-sm text-foreground/70">Град: София</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/70 bg-card/60 p-6">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-foreground/80">Име</label>
              <input
                className="mt-2 w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary"
                placeholder="Вашето име"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/80">Имейл</label>
              <input
                className="mt-2 w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/80">Съобщение</label>
              <textarea
                className="mt-2 min-h-32 w-full resize-none rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary"
                placeholder="Опишете повод и предпочитани часове..."
              />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Изпрати (тест)
            </button>

            <p className="text-xs text-foreground/60">
              Формата е тестова и не изпраща реални имейли. При готовност ще я вържем към EmailJS / Formspree.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
