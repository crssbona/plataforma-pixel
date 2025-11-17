import PricingCard from "./PricingCard";

const Pricing = () => {
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
    <section id="planos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis para atender seu negócio em qualquer fase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
