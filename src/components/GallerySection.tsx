import { useT } from "@/i18n/useT";

const images = [
  "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
];

const GallerySection = () => {
  const t = useT();

  return (
    <section id="gallery" className="border-y border-border/60 bg-secondary/30">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">{t("gallery.title")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
            {t("gallery.body")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((src) => (
            <div key={src} className="group overflow-hidden rounded-2xl border border-border/70 bg-card/60">
              <img
                alt="Gallery placeholder"
                src={src}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-56"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
