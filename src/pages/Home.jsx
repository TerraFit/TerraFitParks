import React from "react";
import HeroSection from "@/components/home/HeroSection";
import SystemsPreview from "@/components/home/SystemsPreview";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { Shield, Award, Wrench, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "10-Year Warranty",
    description: "Industry-leading warranty on all structural components"
  },
  {
    icon: Award,
    title: "European Engineering",
    description: "Slovenian precision meets African market expertise"
  },
  {
    icon: Wrench,
    title: "Turnkey Solutions",
    description: "From concept to operation, we handle everything"
  },
  {
    icon: Users,
    title: "Training Included",
    description: "Comprehensive staff training and certification"
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Features Strip */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#559e2a]/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-[#559e2a]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SystemsPreview />

      {/* Why TerraFit Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Why TerraFit</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                African Vision × European Precision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine deep understanding of African markets with world-class Slovenian engineering. 
                Every park we build is designed for your specific climate, terrain, and target market.
              </p>
              
              <div className="space-y-4">
                {[
                  "Proven ROI models tailored to African markets",
                  "Complete project management from A to Z",
                  "Ongoing maintenance and support programs",
                  "Financing options available for qualified projects"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#559e2a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
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
                  src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-9.jpg"
                  alt="Adventure park spider net"
                  className="rounded-2xl h-48 w-full object-cover"
                />
                <img
                  src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-13.jpg"
                  alt="Bridge obstacle"
                  className="rounded-2xl h-48 w-full object-cover mt-8"
                />
                <img
                  src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-3.jpg"
                  alt="Spider net"
                  className="rounded-2xl h-48 w-full object-cover -mt-4"
                />
                <img
                  src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-16.jpg"
                  alt="Walking bridge"
                  className="rounded-2xl h-48 w-full object-cover mt-4"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-3xl font-bold text-[#559e2a]">50+</div>
                <div className="text-gray-600 text-sm">Parks Installed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: YouTube Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Watch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              See TerraFit Parks in Action
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Watch how we develop, build, and operate world-class treetop and adrenaline parks across Africa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/aC6YsuCpkfI"
              title="TerraFit Parks - Africa's Premier Adventure Park Provider"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Optional: Stats/CTA under video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-8 mt-12 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-[#559e2a]">4</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#559e2a]">50+</div>
              <div className="text-sm text-gray-500">Parks Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#559e2a]">100K+</div>
              <div className="text-sm text-gray-500">Annual Visitors</div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
