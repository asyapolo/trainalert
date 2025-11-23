import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import articleWelcome from "@/assets/article-welcome.webp";
import articleMvp from "@/assets/article-mvp.png";
import articleProblem from "@/assets/article-problem.png";
import articleSolution from "@/assets/article-solution.png";

const articles = {
  "welcome": {
    id: "welcome",
    title: "Добро пожаловать в Train Alert",
    date: "15 ноября 2025",
    images: [articleWelcome],
    content: `Мы — команда «Просто, но со вкусом», и мы создаём сервис, который делает железнодорожные переезды безопасными.
TrainAlert предупреждает водителей о приближении к переезду, показывает актуальное состояние, собирает отзывы и помогает избежать рисков там, где каждая секунда важна.

Мы работаем как для водителей, так и для РЖД — создавая единую экосистему безопасности на дорогах.

Совсем скоро представим нашу команду и расскажем о функционале, планах и первых результатах.
Оставайтесь с нами — дальше будет интересно!

TrainAlert — безопасность начинается заранее.`
  },
  "why-trainalert": {
    id: "why-trainalert",
    title: "Почему именно TrainAlert?",
    date: "10 ноября 2025",
    images: [articleMvp, articleProblem, articleSolution],
    content: `Мы создаём не просто приложение — мы создаём систему безопасности нового поколения. Там, где другие ограничиваются картой, мы формируем понимание, предупреждаем заранее и даём инструменты, которые реально спасают жизни.

🔹 Мы делаем сложное простым.
TrainAlert заранее сообщает о переезде, его типе и состоянии — водитель не тратит время на догадки.

🔹 Мы опираемся на реальные данные РЖД.
Никаких предположений — только проверенная информация и аналитика, которую мы объединяем в единую платформу.

🔹 Мы слушаем водителей.
«Народный рейтинг» и чат переезда делают TrainAlert живой системой, где каждый может предупредить других и внести свой вклад в безопасность.

🔹 Мы уменьшаем риски и для водителей, и для РЖД.
Повышение осознанности на дороге + инструмент оптимизации инфраструктуры = двойной эффект.

🔹 Мы создаём цифровой щит.
Не пугаем, а помогаем понять.
Не нагружаем, а упрощаем.
Не информируем — защищаем.

TrainAlert — потому что безопасность должна быть умной, а технологии — работать там, где это важнее всего.`
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
            {article.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${article.title} - ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            ))}
            
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
