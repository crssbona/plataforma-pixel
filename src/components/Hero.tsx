import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.querySelector("#planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Sites Modernos por
            <span className="text-primary block mt-2">Assinatura</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Presença digital profissional e acessível para sua empresa. Sites rápidos, personalizados e sempre atualizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 gradient-primary shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToPlans}
            >
              Ver Planos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:border-primary hover:bg-primary/5"
              onClick={() => {
                const element = document.querySelector("#contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
