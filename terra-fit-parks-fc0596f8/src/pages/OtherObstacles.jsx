import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Check } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const obstacles = [
  {
    name: "BIKE",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-1.jpg",
    description: "Bike-mounted platform element for unique challenges."
  },
  {
    name: "LADDER",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-2.jpg",
    description: "Vertical ladder element for climbing access."
  },
  {
    name: "VERTICAL NET TUNNEL",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-3.jpg",
    description: "Vertical net tunnel for climbing and exploration."
  },
  {
    name: "SLIDE",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-4.jpg",
    description: "Slide element for quick and fun descent between levels."
  }
];

export default function OtherObstacles() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-1.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl("Catalogue")} className="inline-flex items-center gap-2 text-[#559e2a] hover:text-[#468821] mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Catalogue</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Obstacle Category</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Other Obstacles
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Special elements, mattresses, and vertical elements that complement your adventure park. 
              These unique obstacles add variety and functionality to your park design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e74c3c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#e74c3c]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Special Elements</h3>
                <p className="text-gray-600 text-sm">Unique obstacles that don't fit standard categories</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e74c3c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#e74c3c]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Vertical Access</h3>
                <p className="text-gray-600 text-sm">Ladders and climbing elements for platform access</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e74c3c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#e74c3c]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Versatile Design</h3>
                <p className="text-gray-600 text-sm">Adaptable elements for diverse park layouts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obstacles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obstacles.map((obstacle, index) => (
              <motion.div
                key={obstacle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={obstacle.image}
                      alt={obstacle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {obstacle.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {obstacle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#c0392b] via-[#e74c3c] to-[#ec7063]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in These Special Obstacles?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Get a custom quote tailored to your adventure park needs. Our team will help you select 
              the perfect combination of obstacles for your unique location.
            </p>
            <Link to={createPageUrl("Catalogue")}>
              <TerraButton variant="white" size="lg">
                Request Custom Quote
              </TerraButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}