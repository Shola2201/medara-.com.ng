import { Search, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-elegant">
      {/* Top bar with contact info */}
      <div className="bg-secondary py-2">
        <div className="container mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Ilorin, Kwara State, Nigeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+234 123 456 7890</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>info@medara.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">MEDARA</h1>
              <p className="text-xs text-muted-foreground">Healthcare Equipment Marketplace</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search medical equipment..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline">Login</Button>
            <Button variant="default">Register</Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 pt-4 border-t">
          <ul className="flex gap-6">
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Diagnostic Equipment</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Surgical Tools</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Patient Care</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Laboratory</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;