import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-primary">MEDARA</h3>
            </div>
            <p className="text-muted-foreground">
              Nigeria's premier B2B marketplace for healthcare equipment. 
              Connecting hospitals, clinics, and medical professionals with trusted suppliers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Ilorin, Kwara State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@medara.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Suppliers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* For Suppliers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">For Suppliers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Register as Supplier</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Seller Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Add Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Seller Support</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2024 MEDARA. All rights reserved. | Healthcare Equipment Marketplace
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;