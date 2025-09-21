import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  supplier: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
  featured?: boolean;
}

const ProductCard = ({ 
  image, 
  title, 
  supplier, 
  price, 
  rating, 
  reviews, 
  category,
  featured = false 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        <Button
          size="sm"
          variant="outline"
          className="absolute top-3 right-3 w-8 h-8 p-0 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">by {supplier}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <div className="text-sm text-muted-foreground">Per unit</div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <Button className="w-full" size="sm">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Request Quote
        </Button>
        <Button variant="outline" className="w-full" size="sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;