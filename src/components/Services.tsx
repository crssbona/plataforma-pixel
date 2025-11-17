import { useEffect, useRef, useState } from "react";
import { Globe, Palette, Search, Headphones, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Sites Modernos",
      description: "Desenvolvimento de websites profissionais, rápidos e otimizados para conversão.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Designs únicos baseados na identidade visual da sua empresa.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Search,
      title: "SEO Otimizado",
      description: "Otimização completa para mecanismos de busca e melhor ranqueamento.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Responsividade",
      description: "Sites que funcionam perfeitamente em qualquer dispositivo.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Headphones,
      title: "Suporte Contínuo",
      description: "Assistência técnica e atualizações constantes incluídas na assinatura.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sites rápidos e eficientes para melhor experiência do usuário.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">O Que Oferecemos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para ter uma presença digital profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 hover-lift relative overflow-hidden ${
                  isVisible ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
