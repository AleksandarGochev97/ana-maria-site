const videos = [
  {
    title: "Mozart — Flute Concerto No. 1 in G major, K.313",
    id: "0ExqsbrOPN4",
  },
  {
    title: "Mozart — Flute Concerto No. 1 in G major, K.313 (Alternative)",
    id: "1syDCEn_XOw",
  },
  {
    title: "Mozart — Flute Concerto No. 1 in G major, K.313 (Live)",
    id: "H07rZJfVZo8",
  },
];

const PerformancesSection = () => {
  return (
    <section id="performances" className="border-y border-border/60 bg-secondary/30">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Изпълнения</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            Подбрани видео записи (тестово съдържание). По-късно можем да добавим конкретни изпълнения
            на Ана-Мария, програми, участия и архив.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <div key={v.id} className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">{v.title}</p>
                <p className="mt-1 text-xs text-foreground/65">YouTube embed • placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformancesSection;
