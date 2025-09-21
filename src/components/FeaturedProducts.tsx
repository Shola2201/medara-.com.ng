import ProductCard from "./ProductCard";
import surgicalImage from "@/assets/nigeria-surgical-equipment.jpg";
import hospitalBedsImage from "@/assets/nigeria-hospital-beds.jpg";
import testKitsImage from "@/assets/nigeria-test-kits.jpg";
import wheelchairsImage from "@/assets/nigeria-wheelchairs.jpg";
import sterilizationImage from "@/assets/nigeria-sterilization.jpg";
import monitorsImage from "@/assets/nigeria-monitors.jpg";

const featuredProducts = [
  {
    image: surgicalImage,
    title: "Basic Surgical Instrument Set",
    supplier: "Lagos Medical Supplies",
    price: "₦285,000",
    rating: 4.6,
    reviews: 24,
    category: "Surgical Equipment",
    featured: true
  },
  {
    image: hospitalBedsImage,
    title: "Semi-Electric Hospital Bed",
    supplier: "Abuja Healthcare Ltd",
    price: "₦650,000",
    rating: 4.5,
    reviews: 18,
    category: "Patient Care",
    featured: true
  },
  {
    image: testKitsImage,
    title: "Blood Pressure Monitor Digital",
    supplier: "MedEquip Nigeria",
    price: "₦45,000",
    rating: 4.7,
    reviews: 56,
    category: "Diagnostic Equipment",
    featured: true
  },
  {
    image: wheelchairsImage,
    title: "Standard Wheelchair - Manual",
    supplier: "Mobility Solutions NG",
    price: "₦120,000",
    rating: 4.4,
    reviews: 32,
    category: "Patient Care"
  },
  {
    image: sterilizationImage,
    title: "Tabletop Autoclave 18L",
    supplier: "Sterilize Pro Nigeria",
    price: "₦480,000",
    rating: 4.8,
    reviews: 15,
    category: "Sterilization"
  },
  {
    image: monitorsImage,
    title: "Pulse Oximeter with Display",
    supplier: "HealthMon Lagos",
    price: "₦35,000",
    rating: 4.6,
    reviews: 28,
    category: "Monitoring Equipment"
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