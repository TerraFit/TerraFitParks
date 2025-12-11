import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Check } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const obstacles = [
  {
    name: "BASKET",
    image: "https://www.zupi.si/wp-content/uploads/2023/01/riding_basket.jpg",
    description: "Riding obstacle BASKET"
  },
  {
    name: "BIKE HANDLE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_bike_handle.jpg",
    description: "Riding obstacle BIKE HANDLE"
  },
  {
    name: "SLEDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_sledge.jpg",
    description: "Riding obstacle SLEDGE"
  },
  {
    name: "WAKE BOARD RIDE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_wake_board.jpg",
    description: "Riding obstacle WAKE BOARD RIDE"
  },
  {
    name: "SCOOTER RIDE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_scooter.jpg",
    description: "Riding obstacle SCOOTER RIDE"
  },
  {
    name: "SWING RIDE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_swing.jpg",
    description: "Riding obstacle SWING RIDE"
  },
  {
    name: "COCOBALL",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding-ccocoball-thumb.jpg",
    description: "Riding obstacle COCOBALL"
  },
  {
    name: "TARZAN RIDE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_tarzan_image-480x480.jpg",
    description: "Riding obstacle TARZAN RIDE"
  },
  {
    name: "PLATE RIDE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/riding_plate.jpg",
    description: "Riding obstacle PLATE RIDE"
  }
];

export default function RidingObstacles() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.zupi.si/wp-content/uploads/2023/01/riding_basket.jpg"
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
              Riding Obstacles
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Elements on trolleys to ride from one platform to another. These exciting obstacles provide 
              thrilling rides and unique experiences for adventure park visitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9b59b6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#9b59b6]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Trolley System</h3>
                <p className="text-gray-600 text-sm">Mounted on trolleys for smooth platform-to-platform rides</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9b59b6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#9b59b6]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Thrilling Experience</h3>
                <p className="text-gray-600 text-sm">High-speed rides with various styles and designs</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9b59b6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#9b59b6]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Diverse Options</h3>
                <p className="text-gray-600 text-sm">From baskets to wakeboards and themed rides</p>
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
      <section className="py-24 bg-gradient-to-br from-[#8e44ad] via-[#9b59b6] to-[#bb8fce]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in These Riding Obstacles?
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