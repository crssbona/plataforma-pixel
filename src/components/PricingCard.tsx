import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, features, highlighted = false }: PricingCardProps) => {
  return (
    <Card 
      className={`relative transition-all duration-300 hover:shadow-xl ${
        highlighted 
          ? "border-primary border-2 shadow-lg scale-105" 
          : "hover:border-primary/50"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Mais Popular
        </div>
      )}
      
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-4xl font-bold text-foreground">
          R${price}
          <span className="text-lg text-muted-foreground font-normal">/mês</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className={`w-full ${highlighted ? "gradient-primary shadow-md" : ""}`}
          variant={highlighted ? "default" : "outline"}
          size="lg"
        >
          Saiba mais
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
