import { useEffect, useRef, useState } from "react";

const About = () => {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Sobre a Moers
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="hover:text-foreground transition-colors duration-300">
                  A <span className="text-primary font-semibold">Moers</span> nasceu com o propósito de tornar a presença digital acessível, profissional e eficiente para empresas e empreendedores. Nosso objetivo é oferecer{" "}
                  <span className="font-semibold text-foreground">sites modernos, rápidos e personalizados</span>{" "}
                  por meio de um modelo de assinatura acessível, permitindo que nossos clientes tenham sempre um site atualizado e otimizado sem preocupações.
                </p>

                <p className="hover:text-foreground transition-colors duration-300">
                  Sabemos que um site bem estruturado é essencial para destacar qualquer negócio no mundo digital. Por isso, trabalhamos com{" "}
                  <span className="font-semibold text-foreground">design intuitivo, otimização para SEO e suporte contínuo</span>, garantindo que sua marca tenha uma presença online forte e confiável.
                </p>

                <p className="hover:text-foreground transition-colors duration-300">
                  Com a Moers, você não precisa se preocupar com a parte técnica – nós cuidamos disso para você. Oferecemos{" "}
                  <span className="font-semibold text-foreground">suporte completo, atualizações constantes e planos flexíveis</span>{" "}
                  para atender às necessidades do seu negócio.
                </p>
              </div>
            </div>

            <div className={`flex items-center justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative w-full max-w-md aspect-square group">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
                
                {/* Main Card */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-8">
                    <div className="text-6xl md:text-7xl font-bold text-white mb-4 animate-pulse-slow">
                      moers
                    </div>
                    <div className="text-xl md:text-2xl text-white/90 font-light">
                      Criação de websites
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
