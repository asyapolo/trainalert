import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const AppShowcase = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground">
              TrainAlert
            </h2>
            <p className="text-xl text-muted-foreground">
              Попробуйте прямо сейчас и забудьте<br />
              о проблемах на дороге!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Скачать
            </Button>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src={phoneMockup} 
              alt="TrainAlert App" 
              className="w-80 h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
