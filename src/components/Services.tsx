import { Globe, Palette, Search, Headphones, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Modernos",
      description: "Desenvolvimento de websites profissionais, rápidos e otimizados para conversão.",
    },
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Designs únicos baseados na identidade visual da sua empresa.",
    },
    {
      icon: Search,
      title: "SEO Otimizado",
      description: "Otimização completa para mecanismos de busca e melhor ranqueamento.",
    },
    {
      icon: Smartphone,
      title: "Responsividade",
      description: "Sites que funcionam perfeitamente em qualquer dispositivo.",
    },
    {
      icon: Headphones,
      title: "Suporte Contínuo",
      description: "Assistência técnica e atualizações constantes incluídas na assinatura.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sites rápidos e eficientes para melhor experiência do usuário.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
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
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
