import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Reviews = () => {
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.trim()) {
      toast.success("Спасибо за ваш отзыв!");
      setReview("");
    }
  };

  return (
    <section id="reviews" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Отзывы
          </h2>
          <p className="text-lg text-muted-foreground">
            Напишите нам, что вы думаете о приложении,<br />
            чтобы мы могли развиваться и становиться лучше !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Место для вашего мнения"
            className="min-h-32 bg-card/50 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground resize-none"
          />
          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-12"
            >
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reviews;
