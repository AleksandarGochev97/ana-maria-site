const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-10">
        <div className="grid gap-6">
          <div className="text-center">
            <p className="font-display text-lg">Ана-Мария Крайчева</p>
            <p className="mt-2 text-sm text-foreground/70">Флейтистка • Оперна певица • Пианистка</p>
          </div>

          <div className="text-center text-xs text-foreground/70">
            <p className="mb-3 text-[10px] font-medium tracking-[0.32em] text-warm-gray">КОНТАКТ</p>
            <div className="grid gap-2">
              <a
                href="https://instagram.com/anamariakraycheva"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
              <a href="#" className="hover:text-foreground">
                Facebook
              </a>
              <a href="#" className="hover:text-foreground">
                TikTok
              </a>
              <a href="#" className="hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-foreground/60">
          © {new Date().getFullYear()} Ana-Maria Kraycheva. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
