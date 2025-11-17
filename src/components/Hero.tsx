import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{
          animationDelay: "2s",
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="text-primary" size={16} />
            <span className="text-sm font-medium text-primary">Plataforma Premium de Websites</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground animate-slide-in-up">
            Sites Modernos por
            <span className="text-primary block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient">
              Assinatura
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-up stagger-1">
            Presença digital profissional e acessível para sua empresa. Sites rápidos, personalizados e sempre atualizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up stagger-2">
            <Link to="/planos">
              <Button 
                size="lg" 
                className="group text-lg px-8 py-6 gradient-primary shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105"
              >
                Ver Planos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            
            <Link to="/contato">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in stagger-3">
            <div className="text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Sites Criados</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
