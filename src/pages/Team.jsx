import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Building2, Linkedin, ArrowRight, Lightbulb, Cog, Users, Leaf } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const team = [
  {
    name: "Didier Duc",
    role: "Executive Director & Founder",
    location: "South Africa",
    focus: "African Market Strategy",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69365324041dfb5bfc0596f8/feee44213_didier-duc.png",
    ventures: ["Absolute Owl", "SensCare", "JBay Zebra Lodge", "TerraFit Trail"],
    bio: "Didier brings over 15 years of entrepreneurial experience in African tourism and hospitality, with a passion for creating sustainable business models that empower local communities."
  },
  {
    name: "Alex Darko",
    role: "Non-Executive Chairman",
    location: "South Africa",
    focus: "Strategic Advisory & Governance",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69365324041dfb5bfc0596f8/8855a226f_AlexDarko.png",
    ventures: ["SensCare", "Nkululeko Leadership"],
    bio: "Director at Nkululeko Leadership Consulting, specializing in organizational culture, leadership, and change management. With extensive global experience across Europe, USA, and Africa, Alex held senior positions at Dun & Bradstreet Corporation (Director UK Shared Services, Director of Finance Europe) and served as CIO at AngloGold Ashanti."
  },
  {
    name: "Klemen Zupanc",
    role: "Executive Director & Technical Lead",
    location: "Slovenia",
    focus: "Engineering & Manufacturing",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69365324041dfb5bfc0596f8/7354ac02b_KlemenZupanc.jpg",
    ventures: ["ZUPI Engineering", "Vevrca Parks"],
    bio: "Klemen leads all technical operations, bringing 20+ years of adventure park engineering expertise from Europe's leading manufacturers to the African market."
  }
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Local Intelligence",
    description: "Deep market understanding"
  },
  {
    icon: Cog,
    title: "Engineering Excellence",
    description: "European precision & quality"
  },
  {
    icon: Users,
    title: "Community Design",
    description: "Parks as social landmarks"
  },
  {
    icon: Leaf,
    title: "Sustainable Models",
    description: "Long-term value creation"
  }
];

export default function Team() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Meet Our Team
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A unique blend of African entrepreneurship and European engineering expertise, 
              united by a shared vision for adventure tourism excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  
                  {/* Location badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-[#559e2a]" />
                    <span className="text-xs font-medium text-gray-700">{member.location}</span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <span className="text-gray-500">Focus:</span>
                    <span className="text-[#559e2a] font-medium">{member.focus}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Affiliated Ventures */}
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Affiliated Ventures</div>
                    <div className="flex flex-wrap gap-2">
                      {member.ventures.map((venture) => (
                        <span
                          key={venture}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          <Building2 className="w-3 h-3" />
                          {venture}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              African Vision × Slovenian Precision
            </h2>
            <p className="text-xl text-[#559e2a] font-medium">= Unbeatable Parks</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 mx-auto bg-[#559e2a]/10 rounded-2xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-[#559e2a]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{pillar.title}</h3>
                <p className="text-gray-500 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid2)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to Join Our Network?
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                We're always looking for passionate entrepreneurs, engineers, and adventure enthusiasts 
                to join our growing team.
              </p>
              <Link to={createPageUrl("Contact")}>
                <TerraButton size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </TerraButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}