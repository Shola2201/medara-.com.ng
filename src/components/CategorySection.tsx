import { ArrowRight, Activity, Scissors, Bed, FlaskConical, Camera, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Diagnostic Equipment",
    icon: Activity,
    count: "250+ Products",
    description: "MRI, CT Scanners, X-Ray machines",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    name: "Surgical Instruments",
    icon: Scissors,
    count: "400+ Products",
    description: "Surgical tools, Operating tables",
    color: "bg-green-50 text-green-600 border-green-200"
  },
  {
    name: "Patient Care",
    icon: Bed,
    count: "300+ Products",
    description: "Hospital beds, Wheelchairs, Monitors",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    name: "Laboratory Equipment",
    icon: FlaskConical,
    count: "200+ Products",
    description: "Lab instruments, Analyzers",
    color: "bg-orange-50 text-orange-600 border-orange-200"
  },
  {
    name: "Imaging Equipment",
    icon: Camera,
    count: "150+ Products",
    description: "Ultrasound, Endoscopy equipment",
    color: "bg-teal-50 text-teal-600 border-teal-200"
  },
  {
    name: "Monitoring Devices",
    icon: Stethoscope,
    count: "180+ Products",
    description: "Patient monitors, Vital signs",
    color: "bg-pink-50 text-pink-600 border-pink-200"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the medical equipment you need from our comprehensive range of categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-accent font-medium mb-2">
                        {category.count}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow p-0 h-auto font-medium">
                        Explore
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline">
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;