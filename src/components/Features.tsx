import { Bell, Map, Music, HelpCircle, WifiOff, MessageSquare, Star, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bell,
    title: "Умные предупреждения",
    description: "Получайте уведомления о приближении к железнодорожному переезду заранее, чтобы успеть сбросить скорость.",
  },
  {
    icon: Map,
    title: "Большая карта",
    description: "Работает в фоновом режиме вместе с любым навигатором (Яндекс.Карты, Google Maps).",
  },
  {
    icon: Music,
    title: "Выбор голоса",
    description: "Настройте звуковое оповещение — от строгого до дружелюбного, чтобы оно не отвлекало от дороги.",
  },
  {
    icon: HelpCircle,
    title: "Прямая линия помощи",
    description: "Раздел с экстренным контактом инструкции в случае аварии или ситуации в телефонов экстренных служб.",
  },
  {
    icon: WifiOff,
    title: "Оффлайн режим",
    description: "Доступ ко всем переездам и оповещениям даже без подключения к интернету.",
  },
  {
    icon: MessageSquare,
    title: "Обратная связь",
    description: "Пользователи могут отправить обратную связь по состоянию переезда в РЖД через форму в приложении.",
  },
  {
    icon: Star,
    title: "Рейтинг",
    description: "Оценка переездов от пользователей",
  },
  {
    icon: Users,
    title: "Режимы работы приложения",
    description: "Раздельные режимы как для водителей, так и для пешеходов",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            О приложении
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>TrainAlert</strong> — это инновационное мобильное приложение,<br />
            созданное в рамках акселератора с целью предотвратить аварии<br />
            на переездах, предоставляя водителям точную и своевременную<br />
            информацию.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
