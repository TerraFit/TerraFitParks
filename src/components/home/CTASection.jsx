import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Phone } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a7019] via-[#468821] to-[#559e2a]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join Africa's growing network of successful adventure park entrepreneurs. 
            Get a free consultation and discover how TerraFit can transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("Contact")}>
              <TerraButton variant="white" size="lg" className="group">
                Request a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TerraButton>
            </Link>
            <a href="tel:+15551234567">
              <TerraButton 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-[#559e2a]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </TerraButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}