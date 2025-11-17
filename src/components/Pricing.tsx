import { useEffect, useRef, useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
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

  const plans = [
    {
      title: "Básico",
      price: "99,90",
      features: [
        "Site simples com até 3 páginas",
        "Design básico",
        "Hospedagem",
        "Domínio grátis no 1º ano",
        "Certificado SSL gratuito",
        "Formulário de contato simples",
        "Responsividade",
        "Suporte limitado apenas para problemas técnicos e pequenas alterações",
      ],
    },
    {
      title: "Essencial",
      price: "179,90",
      features: [
        "Site com até 5 páginas",
        "Design com base na identidade do cliente",
        "Hospedagem",
        "Domínio grátis no 1º ano",
        "Certificado SSL gratuito",
        "Responsividade",
        "Otimização básica de SEO",
        "Formulário de contato integrado",
        "2 revisões gratuitas por mês (não cumulativo)",
        "Suporte incluso enquanto a assinatura estiver ativa",
      ],
      highlighted: true,
    },
    {
      title: "Profissional",
      price: "279,90",
      features: [
        "Site com até 10 páginas",
        "Design com base na identidade do cliente",
        "Hospedagem",
        "Domínio incluso",
        "Certificado SSL gratuito",
        "Formulário de contato integrado",
        "Responsividade",
        "SEO avançado",
        "5 revisões gratuitas por mês (não cumulativo)",
        "Google meu negócio configurado",
        "Integração com redes sociais e WhatsApp",
        "Suporte contínuo e domínio enquanto a assinatura estiver ativa",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="planos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos Flexíveis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis para atender seu negócio em qualquer fase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in stagger-3' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground mb-4">Empresas que confiam na Moers</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-40">
            <div className="text-2xl font-bold">Brand</div>
            <div className="text-2xl font-bold">Company</div>
            <div className="text-2xl font-bold">Business</div>
            <div className="text-2xl font-bold">Corp</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
