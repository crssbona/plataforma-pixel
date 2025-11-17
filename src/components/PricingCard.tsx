import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, features, highlighted = false }: PricingCardProps) => {
  return (
    <Card 
      className={`relative transition-all duration-500 hover-lift hover-glow group ${
        highlighted 
          ? "border-primary border-2 shadow-2xl shadow-primary/20 scale-105" 
          : "hover:border-primary/50 hover:shadow-xl"
      }`}
    >
      {highlighted && (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-shimmer bg-[length:200%_100%]">
              <Zap size={16} className="animate-pulse" />
              Mais Popular
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
        </>
      )}
      
      <CardHeader className="text-center pb-8 relative z-10">
        <CardTitle className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-4xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
          R${price}
          <span className="text-lg text-muted-foreground font-normal">/mês</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mt-0.5 flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                  <Check className="text-primary" size={14} />
                </div>
              </div>
              <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative z-10">
        <Button 
          className={`w-full group/btn relative overflow-hidden ${
            highlighted 
              ? "gradient-primary shadow-md hover:shadow-xl" 
              : "hover:bg-primary hover:text-primary-foreground"
          }`}
          variant={highlighted ? "default" : "outline"}
          size="lg"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Saiba mais
            <Check className="group-hover/btn:rotate-12 transition-transform duration-300" size={16} />
          </span>
          {!highlighted && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
