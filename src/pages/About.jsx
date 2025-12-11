import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Leaf, TrendingUp, Heart, ArrowRight, Globe, Handshake } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const values = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Every installation protects and celebrates the natural environment. Our Tree-Hugger technology ensures zero damage to ecosystems.",
    color: "#22c55e"
  },
  {
    icon: TrendingUp,
    title: "Profitable",
    description: "We empower African entrepreneurs with proven business models and world-class infrastructure that generates sustainable returns.",
    color: "#559e2a"
  },
  {
    icon: Heart,
    title: "Thrilling",
    description: "We build experiences that inspire confidence, create joy, and bring communities together through shared adventure.",
    color: "#ef4444"
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Mountains"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Engineered by Excellence,<br />
              <span className="text-[#559e2a]">Built for Adventure</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Combining African market expertise with European engineering precision to 
              create world-class adventure experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Empowering African Visionaries, Building Community Landmarks
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TerraFit Parks was born from a simple vision: to bring world-class adventure experiences 
                to African communities while empowering local entrepreneurs to build sustainable tourism businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Through our strategic partnership with ZUPI Engineering and Vevrca Parks in Slovenia, 
                we combine 20+ years of European adventure park expertise with deep understanding 
                of African markets, creating a unique proposition that delivers both quality and profitability.
              </p>

              {/* Partner Logos */}
              <div className="flex items-center gap-8 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ZUPI</div>
                    <div className="text-gray-500 text-sm">Engineering Partner</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Vevrca</div>
                    <div className="text-gray-500 text-sm">Design Partner</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504025468847-0e438279542c?w=600&q=80"
                  alt="Adventure park"
                  className="rounded-2xl h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
                  alt="Outdoor adventure"
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80"
                alt="Team meeting"
                className="rounded-2xl h-48 w-full object-cover mt-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Team collaboration"
                className="rounded-3xl w-full h-[500px] object-cover shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                African Vision × Slovenian Precision = Unbeatable Parks
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "Local Intelligence", desc: "Deep understanding of African tourism markets, regulations, and consumer behavior." },
                  { title: "Engineering Excellence", desc: "20+ years of European adventure park design and manufacturing expertise." },
                  { title: "Community Design", desc: "Parks that become landmarks and gathering places for local communities." },
                  { title: "Sustainable Models", desc: "Business frameworks that create lasting value for operators and communities alike." }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 bg-[#559e2a] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Ready to Join Our Story?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Become part of Africa's growing network of adventure park entrepreneurs. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={createPageUrl("Team")}>
                <TerraButton variant="white" size="lg" className="group">
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </TerraButton>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <TerraButton 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-[#559e2a]"
                >
                  Get in Touch
                </TerraButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}