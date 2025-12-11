import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Check } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const obstacles = [
  {
    name: "CLIMBING NET",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_net.jpg",
    description: "Climbing obstacle CLIMBING NET"
  },
  {
    name: "CLIMBING A NET",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_anet_image-480x480.jpg",
    description: "Climbing obstacle CLIMBING A NET"
  },
  {
    name: "CLIMBING CURTAINS",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_curtains.jpg",
    description: "Climbing obstacle CLIMBING CURTAINS"
  },
  {
    name: "CLIMBING NET L->R",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_netLR.jpg",
    description: "Climbing obstacle CLIMBING NET L->R"
  },
  {
    name: "SPIDER NET",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_spidernet.jpg",
    description: "Climbing obstacle SPIDER NET"
  },
  {
    name: "NET PYRAMID",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_pyramid.jpg",
    description: "Climbing obstacle NET PYRAMID"
  },
  {
    name: "LIGHT CLIMBING PYRAMID",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_climbingpyramid.jpg",
    description: "Climbing obstacle LIGHT CLIMBING PYRAMID"
  },
  {
    name: "CLIFFHANGER",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_cliffhanger.jpg",
    description: "Climbing obstacle CLIFFHANGER"
  },
  {
    name: "CLIMBING WALL",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_wall.jpg",
    description: "Climbing obstacle CLIMBING WALL"
  },
  {
    name: "CLIMBING ANIMALS",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_animals_image-480x480.jpg",
    description: "Climbing obstacle CLIMBING ANIMALS"
  },
  {
    name: "CLIMBING GHOST",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_ghost.jpg",
    description: "Climbing obstacle CLIMBING GHOST"
  },
  {
    name: "CLIMBING U NET",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_unet_imge-480x480.jpg",
    description: "Climbing obstacle CLIMBING U NET"
  },
  {
    name: "CHARLIE CHAPLIN",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/climbing_chaplin_image-480x480.jpg",
    description: "Climbing obstacle CHARLIE CHAPLIN"
  }
];

export default function ClimbingObstacles() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-2.jpg"
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
              Climbing Obstacles
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Climbing obstacles are installed vertically for users to climb from one element to another. 
              These challenging elements test strength, endurance, and climbing skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e67e22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#e67e22]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Vertical Installation</h3>
                <p className="text-gray-600 text-sm">Designed for climbing between different platform levels</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e67e22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#e67e22]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Strength Challenge</h3>
                <p className="text-gray-600 text-sm">Tests upper body strength and endurance</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e67e22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#e67e22]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Diverse Designs</h3>
                <p className="text-gray-600 text-sm">Multiple styles from nets to walls and themed elements</p>
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
      <section className="py-24 bg-gradient-to-br from-[#d35400] via-[#e67e22] to-[#f39c12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in These Climbing Obstacles?
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