import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Безопасность на железнодорожных переездах",
    description: "Основные правила безопасного пересечения железнодорожных путей",
    date: "15 ноября 2025",
    content: "Узнайте о ключевых мерах безопасности при пересечении железнодорожных переездов..."
  },
  {
    id: 2,
    title: "Как работает система оповещений TrainAlert",
    description: "Подробное описание функционала приложения",
    date: "10 ноября 2025",
    content: "TrainAlert использует современные технологии для своевременного информирования пользователей..."
  },
  {
    id: 3,
    title: "Статистика безопасности на переездах",
    description: "Анализ данных и улучшение безопасности",
    date: "5 ноября 2025",
    content: "Последние данные показывают положительную динамику в снижении инцидентов..."
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Статьи
          </h1>
          <p className="text-foreground/80 text-center mb-12 text-lg">
            Полезная информация о безопасности на железнодорожных переездах
          </p>
          
          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{article.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
