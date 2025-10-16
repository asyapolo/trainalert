import { Button } from "@/components/ui/button";
import trainHero from "@/assets/train-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={trainHero} 
              alt="РЖД Train" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              TrainAlert
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
              Ваш надежный помощник<br />
              на железнодорожных переездах.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Скачать
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
