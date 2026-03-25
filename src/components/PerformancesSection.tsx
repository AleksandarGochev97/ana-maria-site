import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { useT } from "@/i18n/useT";

const videos = [
  {
    title: "Ана-Мария Крайчева — Видео",
    id: "dX06UCts2dU",
  },
  {
    title: "Ана-Мария Крайчева — Видео 2",
    id: "JTfDUl0GS84",
  },
  {
    title: "Ана-Мария Крайчева — Видео 3",
    id: "7-MXugyB_88",
  },
];

const PerformancesSection = () => {
  const t = useT();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="performances" className="border-y border-border/60 bg-secondary/30">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">{t("performances.title")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            {t("performances.body")}
          </p>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {videos.map((v) => (
                <div
                  key={v.id}
                  className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_60%] md:flex-[0_0_38%]"
                >
                  <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
                    <div className="aspect-video w-full">
                      {activeVideoId === v.id ? (
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                          title={v.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <button
                          type="button"
                          aria-label={`${t("performances.play")} ${v.title}`}
                          onClick={() => setActiveVideoId(v.id)}
                          className="group relative h-full w-full"
                        >
                          <img
                            src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                            alt={v.title}
                            loading="lazy"
                            draggable={false}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/25" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/40 text-xl text-white backdrop-blur transition group-hover:bg-black/55">
                              ▶
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-foreground">{v.title}</p>
                      <p className="mt-1 text-xs text-foreground/65">YouTube</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label={t("performances.prev")}
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 hidden -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card/80 px-3 py-3 text-sm shadow-sm backdrop-blur transition hover:bg-card md:inline-flex"
          >
            ←
          </button>
          <button
            type="button"
            aria-label={t("performances.next")}
            onClick={scrollNext}
            className="absolute right-0 top-1/2 hidden translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card/80 px-3 py-3 text-sm shadow-sm backdrop-blur transition hover:bg-card md:inline-flex"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PerformancesSection;
