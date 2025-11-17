import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.", {
      duration: 5000,
    });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} id="contato" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu projeto? Fale conosco!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Card className="shadow-2xl hover-lift border-2 hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e responderemos o mais breve possível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="name" className="group-focus-within:text-primary transition-colors">
                      Nome
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="group-focus-within:text-primary transition-colors">
                      E-mail
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="phone" className="group-focus-within:text-primary transition-colors">
                      Telefone
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="group-focus-within:text-primary transition-colors">
                      Mensagem
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seu projeto..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:scale-[1.02] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={18} />
                    </span>
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de Contato</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos aqui para ajudar você a ter a melhor presença digital. Entre em contato através dos canais abaixo.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="hover:border-primary/50 transition-all duration-500 hover-lift hover-glow group">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      contato@moers.com.br
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-all duration-500 hover-lift hover-glow group stagger-1">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      (00) 0000-0000
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-all duration-500 hover-lift hover-glow group stagger-2">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Atendimento</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      100% Online
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
