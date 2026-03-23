const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg">Ана-Мария Крайчева</p>
            <p className="mt-2 text-sm text-foreground/70">
              Флейтистка • Оперна певица • Пианистка
            </p>
          </div>

          <div className="text-sm text-foreground/70">
            <a
              href="https://instagram.com/anamariakraycheva"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Instagram
            </a>
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
