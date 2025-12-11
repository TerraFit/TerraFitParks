import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TreePine, Zap, Truck, CableCar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const systems = [
  {
    icon: TreePine,
    title: "Treetop Adventures",
    tag: "Nature Integrated",
    description: "Eco-friendly, tree-mounted courses that blend seamlessly with the natural forest environment. Zero tree damage with our patented Tree-Hugger mounting system.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-2.jpg",
    color: "#559e2a"
  },
  {
    icon: Zap,
    title: "Adrenaline Parks",
    tag: "High Intensity",
    description: "Pole-based, terrain-independent installations designed for maximum throughput. Perfect for urban locations and high-traffic destinations.",
    image: "https://www.vevrca.si/wp-content/uploads/2023/10/adrenalinski-park-03.jpg",
    color: "#e67e22"
  },
  {
    icon: Truck,
    title: "Mobile Parks",
    tag: "Rapid Deployment",
    description: "Trailer-based, pop-up adventure systems. Set up in hours, not months. Ideal for events, festivals, and testing new markets.",
    image: "https://www.vevrca.si/wp-content/uploads/2023/10/adrenalinski-park-01.jpg",
    color: "#3498db"
  },
  {
    icon: CableCar,
    title: "Zip Line Course",
    tag: "High Speed",
    description: "Professional zip line systems with spans up to 500 meters. Single or dual lines engineered for high throughput and breathtaking scenic integration.",
    image: "https://www.vevrca.si/wp-content/uploads/2023/10/zipline-3.jpg",
    color: "#9b59b6"
  }
];

export default function SystemsPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#559e2a]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Four Systems, Endless Possibilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the perfect adventure park system for your location, budget, and vision. 
            Each solution is engineered for profitability.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  
                  {/* Tag */}
                  <span 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-medium"
                    style={{ backgroundColor: system.color }}
                  >
                    {system.tag}
                  </span>

                  {/* Icon */}
                  <div 
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{system.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{system.description}</p>
                  
                  <Link
                    to={createPageUrl("Systems")}
                    className="inline-flex items-center gap-2 text-[#559e2a] font-semibold mt-6 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to={createPageUrl("Systems")}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-[#559e2a] font-medium transition-colors"
          >
            View All Systems & Compare
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}