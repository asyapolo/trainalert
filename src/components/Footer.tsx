import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success("Спасибо! Мы свяжемся с вами.");
      setEmail("");
    }
  };

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Свяжитесь с нами
            </h3>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-card/50 border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                Отправить
              </Button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>Политика конфиденциальности</p>
              <p>Пользовательское соглашение</p>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-8">
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                О приложении
              </a>
              <a href="#reviews" className="text-foreground/80 hover:text-foreground transition-colors">
                Отзывы
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>@TrainAlert, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
