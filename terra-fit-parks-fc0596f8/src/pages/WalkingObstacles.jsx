import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Check } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const obstacles = [
  {
    name: "HAPPY CROCO BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2024/02/obstacle_croco_bridge_image-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "CATERPILLAR BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/10/walking-obstacle-caterpilar-feature-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "HEDGEHOG BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/10/walking-obstacle-hedgehog-feature-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "OWL BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/10/walking-obstacle-owl-feature-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "STRAWBERRY BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/10/walking-obstacle-strawberry-feature-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "SQUIRREL BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/10/walking-obstacle-squirrel-bridge-feature-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "ACORN BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/10/walking-obstacle-acorn-bridge-feature-480x480.jpg",
    description: "To be installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant."
  },
  {
    name: "LETTERS",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking-letters-feature-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of letter: 20–60 cm."
  },
  {
    name: "BANANA BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_banana-2-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of banana: 20 cm."
  },
  {
    name: "BIG FOOT BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_bigfoot-1-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 60 cm. 2 round beams are placed under each bigfoot. Exercise can be used between platforms."
  },
  {
    name: "CANDY BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_candy-1-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of candy: 50 cm."
  },
  {
    name: "PUZZLE BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_puzzle-1-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of puzzle: 70 cm."
  },
  {
    name: "BUTTERFLY BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_butterfly-1-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of butterfly: 75 cm."
  },
  {
    name: "SNAIL BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_snail-1-480x480.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of snail: 75 cm."
  },
  {
    name: "APPLE BRIDGE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/walking_apple-349x349.jpg",
    description: "Installed on two wire ropes. The distance between the holes is 50 cm. The surface of the element is non-slip and weather resistant. Size of apple: 72 cm."
  }
];

export default function WalkingObstacles() {
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
              Walking Obstacles
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Walking obstacles are elements placed on the height of the platforms. Users should walk on the elements. 
              All obstacles feature non-slip, weather-resistant surfaces and are installed on two wire ropes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Platform Height</h3>
                <p className="text-gray-600 text-sm">Elements placed at platform level for walking challenges</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Non-Slip Surface</h3>
                <p className="text-gray-600 text-sm">Weather-resistant and safe in all conditions</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Wire Rope Installation</h3>
                <p className="text-gray-600 text-sm">Standard 50-60cm spacing between mounting holes</p>
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
      <section className="py-24 bg-gradient-to-br from-[#3a7019] via-[#468821] to-[#559e2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in These Walking Obstacles?
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