import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TreePine, Zap, Truck, CableCar, Check, ArrowRight, Leaf, Mountain, Users, Clock } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const systems = [
  {
    id: "treetop",
    icon: TreePine,
    title: "Treetop Adventures",
    tag: "Nature Integrated",
    tagColor: "#559e2a",
    headline: "Where Adventure Meets Sustainability",
    description: "Our flagship system integrates seamlessly with existing forests using patented Tree-Hugger mounting technology. Zero tree damage, maximum thrill.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-2.jpg",
    features: [
      "Patented Tree-Hugger mounting system",
      "Zero damage to trees or ecosystem",
      "Natural forest atmosphere",
      "Lower installation costs",
      "Eco-tourism certification ready",
      "Suitable for various tree species"
    ],
    specs: {
      capacity: "60 guests simultaneously",
      elements: "15-40 challenge elements",
      height: "Up to 15m above ground",
      setup: "4-8 weeks installation"
    }
  },
  {
    id: "adrenaline",
    icon: Zap,
    title: "Adrenaline Parks",
    tag: "High Intensity",
    tagColor: "#e67e22",
    headline: "Maximum Throughput, Maximum Impact",
    description: "Pole-based structures using artificial columns instead of trees, perfect for locations without natural forest. Designed for high-traffic locations where you need reliable, weather-resistant infrastructure. When planning a park, we consider expectations of a wide range of users - families, groups and individuals - with tracks of different difficulty levels, each including 8 to 15 different elements.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-14.jpg",
    features: [
      "Terrain-independent installation",
      "All-weather durability",
      "Higher capacity design",
      "Urban location compatible",
      "Modular expansion options",
      "Premium visual impact"
    ],
    specs: {
      capacity: "40-100 guests simultaneously",
      elements: "20-50 challenge elements",
      height: "Up to 20m above ground",
      setup: "6-12 weeks installation"
    }
  },
  {
    id: "mobile",
    icon: Truck,
    title: "Mobile Parks",
    tag: "Rapid Deployment",
    tagColor: "#3498db",
    headline: "Pop-Up Profits, Anywhere",
    description: "Complete adventure park systems on wheels. Perfect for events, testing new markets, or seasonal operations. Set up in hours, not months.",
    image: "https://www.vevrca.si/wp-content/uploads/2023/10/adrenalinski-park-01.jpg",
    features: [
      "Trailer-based mobility",
      "2-4 hour setup time",
      "Event-ready certification",
      "Lower initial investment",
      "Seasonal flexibility",
      "Multi-location operation"
    ],
    specs: {
      capacity: "15-30 guests simultaneously",
      elements: "9-18 challenge elements",
      height: "Up to 4 m above ground",
      setup: "6-16 hours deployment"
    }
  },
  {
    id: "zipline",
    icon: CableCar,
    title: "Zip Line Course",
    tag: "High Speed",
    tagColor: "#9b59b6",
    headline: "Soar Through the Air",
    description: "Experience the ultimate thrill with our professional zip line systems. Perfect as a standalone attraction or complement to your adventure park. Featuring single or dual lines with spans up to 500 meters, engineered for high throughput and breathtaking scenic integration.",
    image: "https://www.vevrca.si/wp-content/uploads/2023/10/zipline-3.jpg",
    features: [
      "Single or dual line configurations",
      "Up to 500m span capability",
      "High-capacity throughput design",
      "Scenic landscape integration",
      "Advanced braking systems",
      "Full operator training included"
    ],
    specs: {
      capacity: "Variable throughput",
      elements: "1-4 zip lines",
      height: "Terrain dependent",
      setup: "4-8 weeks installation"
    }
  }
];

export default function Systems() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-11.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Our Systems</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Adventure Park Solutions
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Three distinct systems, each engineered for different environments and investment levels. 
              All backed by 10-year warranties and proven ROI models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Systems Detail */}
      {systems.map((system, index) => (
        <section
          key={system.id}
          id={system.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${system.tagColor}20` }}
                  >
                    <system.icon className="w-6 h-6" style={{ color: system.tagColor }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: system.tagColor }}
                  >
                    {system.tag}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {system.title}
                </h2>
                <p className="text-xl text-[#559e2a] font-medium mb-4">
                  {system.headline}
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  {system.description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {system.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#559e2a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 p-6 bg-gray-100 rounded-2xl mb-8">
                  {Object.entries(system.specs).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {key.replace('_', ' ')}
                      </div>
                      <div className="text-gray-900 font-medium text-sm">{value}</div>
                    </div>
                  ))}
                </div>

                <Link to={createPageUrl("Contact")}>
                  <TerraButton className="group">
                    Get a Quote for {system.title.split(' ')[0]}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </TerraButton>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={system.image}
                    alt={system.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                </div>
                
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  style={{ borderLeft: `4px solid ${system.tagColor}` }}
                >
                  <system.icon className="w-8 h-8" style={{ color: system.tagColor }} />
                  <div>
                    <div className="font-bold text-gray-900">{system.specs.capacity.split(' ')[0]}</div>
                    <div className="text-gray-500 text-sm">Simultaneous Guests</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison CTA */}
      <section className="py-24 bg-gradient-to-br from-[#3a7019] via-[#468821] to-[#559e2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which System is Right for You?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Our team will analyze your location, budget, and goals to recommend the perfect solution. 
              Get a free feasibility study today.
            </p>
            <Link to={createPageUrl("Contact")}>
              <TerraButton variant="white" size="lg" className="group">
                Schedule a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TerraButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}