import { ArrowRight, Shield, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Nigeria's Premier
              <br />
              <span className="text-accent-light">Healthcare Equipment</span>
              <br />
              Marketplace
            </h1>
            
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Connect with trusted suppliers and buyers of medical equipment across Nigeria. 
              MEDARA makes B2B healthcare procurement simple, secure, and efficient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Equipment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Become a Supplier
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="w-5 h-5" />
                <span className="text-sm">Trusted by 500+ Hospitals</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Nationwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Modern medical equipment in professional healthcare setting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-xl shadow-elegant">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Suppliers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;