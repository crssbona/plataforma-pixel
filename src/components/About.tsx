const About = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Sobre a Moers
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A <span className="text-primary font-semibold">Moers</span> nasceu com o propósito de tornar a presença digital acessível, profissional e eficiente para empresas e empreendedores. Nosso objetivo é oferecer{" "}
                  <span className="font-semibold text-foreground">sites modernos, rápidos e personalizados</span>{" "}
                  por meio de um modelo de assinatura acessível, permitindo que nossos clientes tenham sempre um site atualizado e otimizado sem preocupações.
                </p>

                <p>
                  Sabemos que um site bem estruturado é essencial para destacar qualquer negócio no mundo digital. Por isso, trabalhamos com{" "}
                  <span className="font-semibold text-foreground">design intuitivo, otimização para SEO e suporte contínuo</span>, garantindo que sua marca tenha uma presença online forte e confiável.
                </p>

                <p>
                  Com a Moers, você não precisa se preocupar com a parte técnica – nós cuidamos disso para você. Oferecemos{" "}
                  <span className="font-semibold text-foreground">suporte completo, atualizações constantes e planos flexíveis</span>{" "}
                  para atender às necessidades do seu negócio.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center animate-scale-in">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary to-accent rounded-3xl shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                    moers
                  </div>
                  <div className="text-xl md:text-2xl text-white/90 font-light">
                    Criação de websites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
