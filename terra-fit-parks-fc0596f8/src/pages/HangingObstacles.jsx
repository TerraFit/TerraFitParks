import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Check } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const obstacles = [
  {
    name: "STAIRWAY TO HEAVEN -SINGLE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_stairway_to_heaven_single.jpg",
    description: "Hanging obstacle STAIRWAY TO HEAVEN -SINGLE"
  },
  {
    name: "STAIRWAY TO HEAVEN -DOUBLE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_stairway_to_heaven_double.jpg",
    description: "Hanging obstacle STAIRWAY TO HEAVEN -DOUBLE"
  },
  {
    name: "STAIRWAY TO HEAVEN -DOUBLE WITH SPRING",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_stairway_to_heaven_double_spring.jpg",
    description: "Hanging obstacle STAIRWAY TO HEAVEN -DOUBLE WITH SPRING"
  },
  {
    name: "STAIRWAY TO HEAVEN -SINGLE SLING",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_stairway_to_heaven_single_sling.jpg",
    description: "Hanging obstacle STAIRWAY TO HEAVEN -SINGLE SLING"
  },
  {
    name: "SWINGING BEAM – SINGLE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_swinging_beam_single.jpg",
    description: "Hanging obstacle SWINGING BEAM – SINGLE"
  },
  {
    name: "SWINGING BEAM",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_swinging_beam.jpg",
    description: "Hanging obstacle SWINGING BEAM"
  },
  {
    name: "SWINGING BEAM – RAINBOW",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_swinging_beam_rainbow.jpg",
    description: "Hanging obstacle SWINGING BEAM – RAINBOW"
  },
  {
    name: "SWINGING BEAM – TRIPLE",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_swinging_beam_triple.jpg",
    description: "Hanging obstacle SWINGING BEAM – TRIPLE"
  },
  {
    name: "HANGING SKITLES",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_hanging_skittles.jpg",
    description: "Hanging obstacle HANGING SKITLES"
  },
  {
    name: "HANGING H",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_hanging_h.jpg",
    description: "Hanging obstacle HANGING H"
  },
  {
    name: "HANGING BAT",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_bat.jpg",
    description: "Hanging obstacle HANGING BAT"
  },
  {
    name: "HANGING ZIGZAG",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_zigzag.jpg",
    description: "Hanging obstacle HANGING ZIGZAG"
  },
  {
    name: "HANGING X",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_x.jpg",
    description: "Hanging obstacle HANGING X"
  },
  {
    name: "HANGING CIRCLES",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_circle.jpg",
    description: "Hanging obstacle HANGING CIRCLES"
  },
  {
    name: "HANGING SQUARES",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_squares.jpg",
    description: "Hanging obstacle HANGING SQUARES"
  },
  {
    name: "HANGING PLATES",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_plates.jpg",
    description: "Hanging obstacle HANGING PLATES"
  },
  {
    name: "HANGING RUBBER SEMICIRCLES",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_rubber_semicircles.jpg",
    description: "Hanging obstacle HANGING RUBBER SEMICIRCLES"
  },
  {
    name: "HANGING WAVES",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_waves.jpg",
    description: "Hanging obstacle HANGING WAVES"
  },
  {
    name: "WOODEN TUNNEL",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_wooden_tunnel.jpg",
    description: "Hanging obstacle WOODEN TUNNEL"
  },
  {
    name: "NET TUNNEL",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_net_tunnel.jpg",
    description: "Hanging obstacle NET TUNNEL"
  },
  {
    name: "HANGING NET CURTAINS",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_net_curtains.jpg",
    description: "Hanging obstacle HANGING NET CURTAINS"
  },
  {
    name: "U NET",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_u_net.jpg",
    description: "Hanging obstacle U NET"
  },
  {
    name: "U SLING",
    image: "https://www.zupi.si/wp-content/uploads/2023/03/hanging_u_sling.jpg",
    description: "Hanging obstacle U SLING"
  }
];

export default function HangingObstacles() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-3.jpg"
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
              Hanging Obstacles
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Hanging and floating between platforms, hanging obstacles are installed on wire ropes above the user's head. 
              These dynamic elements challenge balance, grip strength, and coordination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#3498db]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#3498db]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Overhead Installation</h3>
                <p className="text-gray-600 text-sm">Suspended on wire ropes above user's head</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#3498db]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#3498db]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Dynamic Movement</h3>
                <p className="text-gray-600 text-sm">Swinging and floating elements for enhanced challenge</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#3498db]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#3498db]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Balance & Grip</h3>
                <p className="text-gray-600 text-sm">Tests coordination and upper body strength</p>
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
      <section className="py-24 bg-gradient-to-br from-[#2980b9] via-[#3498db] to-[#5dade2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in These Hanging Obstacles?
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