import ProductCard from "./ProductCard";
import diagnosticImage from "@/assets/equipment-diagnostic.jpg";
import surgicalImage from "@/assets/equipment-surgical.jpg";
import patientCareImage from "@/assets/equipment-patient-care.jpg";

const featuredProducts = [
  {
    image: diagnosticImage,
    title: "Digital X-Ray Machine - DR-5000",
    supplier: "MedTech Solutions",
    price: "₦15,500,000",
    rating: 4.8,
    reviews: 32,
    category: "Diagnostic Equipment",
    featured: true
  },
  {
    image: surgicalImage,
    title: "Surgical Operating Table - Elite Pro",
    supplier: "SurgiCare Industries",
    price: "₦8,750,000",
    rating: 4.9,
    reviews: 28,
    category: "Surgical Equipment",
    featured: true
  },
  {
    image: patientCareImage,
    title: "Patient Monitor - CardioMax 3000",
    supplier: "HealthTech Nigeria",
    price: "₦4,200,000",
    rating: 4.7,
    reviews: 45,
    category: "Patient Care",
    featured: true
  },
  {
    image: diagnosticImage,
    title: "Ultrasound Scanner - UltraView HD",
    supplier: "Diagnostic Pro",
    price: "₦12,300,000",
    rating: 4.6,
    reviews: 18,
    category: "Diagnostic Equipment"
  },
  {
    image: surgicalImage,
    title: "Anesthesia Machine - SafeFlow 200",
    supplier: "AnesthCare Ltd",
    price: "₦18,900,000",
    rating: 4.8,
    reviews: 22,
    category: "Surgical Equipment"
  },
  {
    image: patientCareImage,
    title: "ICU Ventilator - LifeSupport Pro",
    supplier: "CriticalCare Systems",
    price: "₦25,600,000",
    rating: 4.9,
    reviews: 15,
    category: "Patient Care"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Medical Equipment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and trusted medical equipment from verified suppliers across Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              View All Products
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors font-medium">
              Browse Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;