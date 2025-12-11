import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ClipboardCheck, Pencil, BarChart3, Cog, Factory, Hammer, 
  GraduationCap, PartyPopper, Wrench, Shield, ArrowRight, 
  Truck, TreePine, Zap, CableCar, Users, Star, Check
} from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import ROICalculator from "@/components/partnership/ROICalculator";
import QuoteDialog from "@/components/partnership/QuoteDialog";
import ScrollIncentive from "@/components/partnership/ScrollIncentive";
import { motion } from "framer-motion";

const timeline = [
  { step: 1, title: "Feasibility Study", icon: ClipboardCheck, description: "Site analysis & market research" },
  { step: 2, title: "Concept Sketch", icon: Pencil, description: "Custom park design proposal" },
  { step: 3, title: "Profitability Validation", icon: BarChart3, description: "Financial modeling & ROI" },
  { step: 4, title: "Engineering & Plans", icon: Cog, description: "Detailed technical drawings" },
  { step: 5, title: "Manufacturing", icon: Factory, description: "Premium components built" },
  { step: 6, title: "Installation", icon: Hammer, description: "Professional on-site setup" },
  { step: 7, title: "Staff Training", icon: GraduationCap, description: "Comprehensive certification" },
  { step: 8, title: "Grand Opening", icon: PartyPopper, description: "Launch support & marketing" },
  { step: 9, title: "Maintenance Program", icon: Wrench, description: "Ongoing care & inspections" },
  { step: 10, title: "10-Year Warranty", icon: Shield, description: "Peace of mind guaranteed" }
];

const packages = [
  {
    name: "Pop-Up Profit",
    subtitle: "Mobile Package",
    icon: Truck,
    price: "From ZAR 1,000,000*",
    tagColor: "#3498db",
    features: [
      "Trailer-based system",
      "9-18 challenge elements",
      "15-30 simultaneous guests",
      "3-6 hour deployment",
      "Event-ready certification",
      "Basic training included"
    ]
  },
  {
    name: "Forest Canopy",
    subtitle: "Treetop Package",
    icon: TreePine,
    price: "From ZAR 3,000,000*",
    tagColor: "#559e2a",
    featured: true,
    features: [
      "Tree-Hugger mounting",
      "From 40 challenge elements",
      "From 60 simultaneous guests",
      "Eco-tourism certified",
      "Full staff training",
      "Marketing launch support"
    ]
  },
  {
    name: "Urban Thrill",
    subtitle: "Adrenaline Package",
    icon: Zap,
    price: "From ZAR 3,800,000*",
    tagColor: "#e67e22",
    features: [
      "Pole-based structure",
      "From 40 challenge elements",
      "From 60 simultaneous guests",
      "All-weather design",
      "Premium visual impact",
      "Advanced training program"
    ]
  },
  {
    name: "Valley Flyer",
    subtitle: "Zip Line Add-On",
    icon: CableCar,
    price: "From ZAR 2,400,000*",
    tagColor: "#9b59b6",
    features: [
      "Single or dual lines",
      "Up to 500m spans",
      "High throughput design",
      "Scenic integration",
      "Operator training",
      "Braking systems included"
    ]
  },
  {
    name: "Group Racer",
    subtitle: "Multi-Line Experience",
    icon: Users,
    price: "Custom Quote",
    tagColor: "#e74c3c",
    features: [
      "2-4 parallel lines",
      "Racing experience",
      "Spectator viewing areas",
      "Timing systems",
      "Group bookings focus",
      "Event packages"
    ]
  }
];

export default function Partnership() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleQuoteClick = (packageName) => {
    setSelectedPackage(packageName);
    setQuoteDialogOpen(true);
  };

  return (
    <div className="pt-20">
      <ScrollIncentive />
      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        packageName={selectedPackage}
      />
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Partnership Model</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Your Journey to Adventure Park Success
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From initial concept to grand opening and beyond. We partner with you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              10 Steps to Your Dream Park
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-r from-[#559e2a] to-[#559e2a]/50 w-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-14 h-14 mx-auto bg-[#559e2a] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#559e2a]/30 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs text-[#559e2a] font-bold mb-1">Step {item.step}</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section id="investment-packages" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Investment Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Choose Your Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible investment options for every budget and vision. All packages include installation, training, and warranty.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow ${
                  pkg.featured ? 'ring-2 ring-[#559e2a]' : 'border border-gray-100'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-[#559e2a] text-white text-xs font-bold rounded-full">
                      <Star className="w-3 h-3" /> FLAGSHIP
                    </span>
                  </div>
                )}

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pkg.tagColor}15` }}
                >
                  <pkg.icon className="w-7 h-7" style={{ color: pkg.tagColor }} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.subtitle}</p>
                
                <div className="text-3xl font-bold text-gray-900 mb-6">{pkg.price}</div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#559e2a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <TerraButton 
                  fullWidth 
                  variant={pkg.featured ? "primary" : "outline"}
                  onClick={() => handleQuoteClick(pkg.name)}
                >
                  Get a Quote
                </TerraButton>

                <p className="text-gray-500 text-xs mt-4">
                  *Shipping, travel and accommodation not included. Project based pricing.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {packages.slice(3).map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${pkg.tagColor}15` }}
                  >
                    <pkg.icon className="w-7 h-7" style={{ color: pkg.tagColor }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{pkg.subtitle}</p>
                    <div className="text-2xl font-bold text-gray-900 mb-4">{pkg.price}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#559e2a]" />
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-4">
                    *Shipping, travel and accommodation not included. Project based pricing.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Financial Planning</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Calculate Your Potential Returns
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Use our interactive calculator to estimate your potential annual revenue. 
                Adjust the sliders based on your market research and location specifics.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Typical Forest Canopy Performance</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Capacity</div>
                    <div className="font-medium text-gray-900">60 guests simultaneously</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Daily Throughput</div>
                    <div className="font-medium text-gray-900">Up to 240 guests</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Ticket Price Range</div>
                    <div className="font-medium text-gray-900">R280 - R360</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Daily Revenue Potential</div>
                    <div className="font-medium text-[#559e2a]">R67,200 - R86,400</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <ROICalculator />
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
              Ready to Explore Partnership?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Request our detailed Investment Guide for comprehensive financial projections, 
              technical specifications, and case studies from operating parks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={createPageUrl("InvestmentGuide")}>
                <TerraButton variant="white" size="lg" className="group">
                  View Investment Guide
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </TerraButton>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <TerraButton 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-[#559e2a]"
                >
                  Schedule a Call
                </TerraButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}