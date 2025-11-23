import { Train } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Train className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TrainAlert</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              О приложении
            </a>
            <a href="/articles" className="text-foreground/80 hover:text-foreground transition-colors">
              Статьи
            </a>
            <a href="#reviews" className="text-foreground/80 hover:text-foreground transition-colors">
              Отзывы
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
