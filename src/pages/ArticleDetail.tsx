import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import articleWelcome from "@/assets/article-welcome.webp";

const articles = {
  "welcome": {
    id: "welcome",
    title: "Добро пожаловать в Train Alert",
    date: "15 ноября 2025",
    image: articleWelcome,
    content: `Мы — команда «Просто, но со вкусом», и мы создаём сервис, который делает железнодорожные переезды безопасными.
TrainAlert предупреждает водителей о приближении к переезду, показывает актуальное состояние, собирает отзывы и помогает избежать рисков там, где каждая секунда важна.

Мы работаем как для водителей, так и для РЖД — создавая единую экосистему безопасности на дорогах.

Совсем скоро представим нашу команду и расскажем о функционале, планах и первых результатах.
Оставайтесь с нами — дальше будет интересно!

TrainAlert — безопасность начинается заранее.`
  }
};

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
        <Header />
        <main className="container mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Статья не найдена</h1>
            <Button onClick={() => navigate("/articles")}>Вернуться к статьям</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/articles")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к статьям
          </Button>
          
          <article className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-6">
                {article.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-foreground/80 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
