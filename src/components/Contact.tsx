import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu projeto? Fale conosco!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e responderemos o mais breve possível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seu projeto..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-scale-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de Contato</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos aqui para ajudar você a ter a melhor presença digital. Entre em contato através dos canais abaixo.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <p className="text-muted-foreground">contato@moers.com.br</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone</p>
                    <p className="text-muted-foreground">(00) 0000-0000</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Atendimento</p>
                    <p className="text-muted-foreground">100% Online</p>
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
