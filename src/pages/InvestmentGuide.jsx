import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  TreePine, ChevronRight, TrendingUp, Shield, Cog, Award,
  ArrowRight, Download, Phone, Mail, Globe, Users, Clock,
  BarChart3, Target, CheckCircle, Zap, CableCar
} from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

const financialModels = [
  {
    name: "Pop-Up Profit",
    type: "Mobile Package",
    investment: "ZAR 1,000,000+",
    icon: "🚚",
    metrics: {
      capacity: "30 guests/session",
      sessions: "6-8 per day",
      avgTicket: "R100",
      dailyRevenue: "R18,000 - R24,000",
      annualRevenue: "R1.6M - R6.0M",
      breakeven: "20-36 months"
    }
  },
  {
    name: "Forest Canopy",
    type: "Treetop Package",
    investment: "ZAR 3,000,000+",
    icon: "🌲",
    featured: true,
    metrics: {
      capacity: "60 guests simultaneous",
      sessions: "4 rotations/day",
      avgTicket: "R320",
      dailyRevenue: "R67,200 - R86,400",
      annualRevenue: "R16.8M - R27M",
      breakeven: "18-24 months"
    }
  },
  {
    name: "Urban Thrill",
    type: "Adrenaline Package",
    investment: "ZAR 3,800,000+",
    icon: "⚡",
    metrics: {
      capacity: "80 guests simultaneous",
      sessions: "4-5 rotations/day",
      avgTicket: "R350",
      dailyRevenue: "R112,000 - R140,000",
      annualRevenue: "R28M - R42M",
      breakeven: "14-20 months"
    }
  }
];

const engineeringHighlights = [
  {
    title: "Tree-Hugger™ Technology",
    description: "TerraFitParks exclusive mounting system that grows with the tree. Preserve the integrity of the tree, Zero bark damage, even load distribution across attachment points."
  },
  {
    title: "European Steel Standards",
    description: "All structural components meet EN 15567-1:2015 safety standards. Hot-dip galvanized for 25+ year lifespan."
  },
  {
    title: "Continuous Belay System",
    description: "Guests remain connected from start to finish. Eliminates clip-in errors and speeds throughput by 40%."
  },
  {
    title: "Modular Design",
    description: "Start small, grow big. Every system is designed for future expansion without major modifications."
  }
];

export default function InvestmentGuide() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Cover Page */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80"
            alt="Adventure park"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Document header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#559e2a]/20 rounded-full border border-[#559e2a]/30 mb-8">
                <TreePine className="w-5 h-5 text-[#559e2a]" />
                <span className="text-[#559e2a] font-semibold">TerraFit Parks</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              INVESTMENT
              <br />
              <span className="text-[#559e2a]">GUIDE</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
              2025 Edition
            </div>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
              A comprehensive prospectus for adventure park investment opportunities in Africa
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>An Aemara Group Company</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>ZUPI Engineering Partner</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <ChevronRight className="w-5 h-5 rotate-90 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-[#559e2a] font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-[#559e2a]" />
              Section 01
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Executive Summary
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="lead text-xl">
                The African adventure tourism market represents one of the fastest-growing segments 
                in the continental leisure economy, with projected annual growth of 12-15% through 2030.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { value: "$8.2B", label: "African Adventure Tourism Market (2024)", icon: TrendingUp },
                { value: "12-15%", label: "Projected Annual Growth Rate", icon: BarChart3 },
                { value: "67M", label: "Annual Adventure Tourists visitors to Africa", icon: Users }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-[#559e2a]/10 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-[#559e2a]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-[#559e2a]/10 to-transparent rounded-2xl border-l-4 border-[#559e2a]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The TerraFit Advantage</h3>
              <p className="text-gray-600">
                TerraFit Parks combines deep African market knowledge with European engineering excellence. 
                Our turnkey solutions eliminate the complexity of adventure park development, providing partners 
                with proven systems, training, and ongoing support to ensure profitable operations from day one.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-[#559e2a] font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-[#559e2a]" />
              Section 02
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Engineering Excellence
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 text-lg mb-8">
                  Every TerraFit installation is designed and manufactured by our Slovenian engineering 
                  partner, ZUPI, with over 20 years of adventure park construction experience across Europe.
                </p>
                
                <div className="space-y-6">
                  {engineeringHighlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 bg-[#559e2a] rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Engineering"
                  className="rounded-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#559e2a]" />
                    <div>
                      <div className="font-bold text-gray-900">10-Year Structural Warranty</div>
                      <div className="text-gray-500 text-sm">Industry-leading protection</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Models */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-[#559e2a] font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-[#559e2a]" />
              Section 03
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Models
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mb-12">
              Detailed projections based on actual performance data from operating parks across Southern Africa.
            </p>

            <div className="space-y-8">
              {financialModels.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-8 ${
                    model.featured 
                      ? 'bg-gradient-to-br from-[#559e2a]/10 to-[#559e2a]/5 border-2 border-[#559e2a]/30' 
                      : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{model.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{model.name}</h3>
                          <p className="text-gray-500">{model.type}</p>
                        </div>
                        {model.featured && (
                          <span className="ml-auto px-3 py-1 bg-[#559e2a] text-white text-xs font-bold rounded-full">
                            FLAGSHIP
                          </span>
                        )}
                      </div>
                      <div className="text-3xl font-bold text-[#559e2a] mb-6">{model.investment}</div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                      {Object.entries(model.metrics).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-xl p-4">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="font-semibold text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-400 text-sm text-center mt-8">
              * All projections are estimates based on market research and operating park data. 
              Actual results may vary based on location, management, and market conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact / Back Page */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#559e2a]/20 rounded-full border border-[#559e2a]/30 mb-8">
              <TreePine className="w-5 h-5 text-[#559e2a]" />
              <span className="text-[#559e2a] font-semibold">TerraFit Parks</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Schedule a discovery call with our team to discuss your vision 
              and receive a customized feasibility assessment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to={createPageUrl("Contact")}>
                <TerraButton size="lg" className="group">
                  Schedule Discovery Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </TerraButton>
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-gray-800">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#559e2a]" />
                </div>
                <a href="tel:+27837789487" className="text-gray-300 hover:text-white transition-colors">
                  +27(0)837789487
                </a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#559e2a]" />
                </div>
                <a href="mailto:inquiry@aemaragroup.com" className="text-gray-300 hover:text-white transition-colors">
                  inquiry@aemaragroup.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#559e2a]" />
                </div>
                <span className="text-gray-300">Mon-Fri, 9am-4pm SasT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
