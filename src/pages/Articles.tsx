import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import articleWelcome from "@/assets/article-welcome.webp";

const articles = [
  {
    id: "welcome",
    slug: "welcome",
    title: "Добро пожаловать в Train Alert",
    description: "Знакомство с нашей командой и миссией проекта",
    date: "15 ноября 2025",
    image: articleWelcome,
    excerpt: "Мы — команда «Просто, но со вкусом», и мы создаём сервис, который делает железнодорожные переезды безопасными..."
  },
  {
    id: "system",
    slug: "system",
    title: "Как работает система оповещений TrainAlert",
    description: "Подробное описание функционала приложения",
    date: "10 ноября 2025",
    excerpt: "TrainAlert использует современные технологии для своевременного информирования пользователей..."
  },
  {
    id: "statistics",
    slug: "statistics",
    title: "Статистика безопасности на переездах",
    description: "Анализ данных и улучшение безопасности",
    date: "5 ноября 2025",
    excerpt: "Последние данные показывают положительную динамику в снижении инцидентов..."
  }
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Статьи
          </h1>
          
          <div className="space-y-6">
            {articles.map((article) => (
              <Card 
                key={article.id} 
                className="hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => navigate(`/articles/${article.slug}`)}
              >
                {article.image && (
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{article.excerpt}</p>
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
