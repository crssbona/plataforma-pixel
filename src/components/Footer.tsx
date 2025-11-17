import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-nav text-nav-foreground py-12 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">moers</h3>
            <p className="text-nav-foreground/80 text-sm">
              Criação de websites modernos por assinatura
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-nav-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-nav-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-nav-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-nav-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Planos</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-nav-foreground/80">Básico</li>
              <li className="text-nav-foreground/80">Essencial</li>
              <li className="text-nav-foreground/80">Profissional</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-nav-foreground/80">
              <li>contato@moers.com.br</li>
              <li>(00) 0000-0000</li>
              <li>Atendimento Online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nav-foreground/20 pt-8 text-center">
          <p className="text-sm text-nav-foreground/60">
            © {new Date().getFullYear()} Moers. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
