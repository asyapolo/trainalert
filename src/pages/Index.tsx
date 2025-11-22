import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partnership from "@/components/Partnership";
import AppShowcase from "@/components/AppShowcase";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
      <Header />
      <Hero />
      <Features />
      <Partnership />
      <AppShowcase />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
