import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Check, Send, CheckCircle } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const categories = [
  {
    id: "walking",
    title: "Walking Obstacles",
    description: "Walking obstacles are elements placed on the height of the platforms. User should walk on the elements.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-1.jpg",
    color: "#559e2a"
  },
  {
    id: "climbing",
    title: "Climbing Obstacles",
    description: "Climbing obstacles are installed vertically for user to climb from one element to another.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-2.jpg",
    color: "#e67e22"
  },
  {
    id: "hanging",
    title: "Hanging Obstacles",
    description: "Hanging and floating between platforms, hanging obstacles are installed on wire ropes above the user's head.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-3.jpg",
    color: "#3498db"
  },
  {
    id: "riding",
    title: "Riding Obstacles",
    description: "Elements on trolleys to ride from one platform to another.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-5.jpg",
    color: "#9b59b6"
  },
  {
    id: "other",
    title: "Other Obstacles",
    description: "Special elements, mattresses, and vertical elements.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-11.jpg",
    color: "#e74c3c"
  },
  {
    id: "mattress",
    title: "Mattresses",
    description: "Safety mattresses for landing zones and fall protection areas.",
    image: "https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-14.jpg",
    color: "#16a085"
  }
];

export default function Catalogue() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    timeline: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.zupi.si/wp-content/uploads/2023/02/adventure-parks-elements-6.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Product Catalogue</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Adventure Park Elements
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of high-quality obstacle elements designed for thrilling 
              and safe adventure park experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div 
                      className="absolute top-4 right-4 w-2 h-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <div className="mb-4">
                      <p className={`text-gray-600 text-sm leading-relaxed ${!expandedCards[category.id] ? 'line-clamp-2' : ''}`}>
                        {category.description}
                      </p>
                      {category.description.length > 80 && (
                        <button
                          onClick={() => setExpandedCards({...expandedCards, [category.id]: !expandedCards[category.id]})}
                          className="text-[#559e2a] text-sm font-medium underline hover:text-[#468821] transition-colors mt-1"
                        >
                          {expandedCards[category.id] ? 'less' : 'more'}
                        </button>
                      )}
                    </div>
                    {category.id === "walking" && (
                      <Link to={createPageUrl("WalkingObstacles")}>
                        <TerraButton variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </TerraButton>
                      </Link>
                    )}
                    {category.id === "climbing" && (
                      <Link to={createPageUrl("ClimbingObstacles")}>
                        <TerraButton variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </TerraButton>
                      </Link>
                    )}
                    {category.id === "hanging" && (
                      <Link to={createPageUrl("HangingObstacles")}>
                        <TerraButton variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </TerraButton>
                      </Link>
                    )}
                    {category.id === "riding" && (
                      <Link to={createPageUrl("RidingObstacles")}>
                        <TerraButton variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </TerraButton>
                      </Link>
                    )}
                    {category.id === "other" && (
                      <Link to={createPageUrl("OtherObstacles")}>
                        <TerraButton variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </TerraButton>
                      </Link>
                    )}
                    {category.id === "mattress" && (
                      <Link to={createPageUrl("Mattresses")}>
                        <TerraButton variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </TerraButton>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request a Custom Quote
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your project timeline and we'll help you build the perfect adventure park.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-[#559e2a]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#559e2a]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest. Our team will review your request and get back to you within 24 hours with a detailed proposal.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", lastName: "", phone: "", email: "", timeline: "" });
                  }}
                  className="text-[#559e2a] font-medium hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@company.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline *</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData({...formData, timeline: value})}
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exploring">Exploring the options</SelectItem>
                      <SelectItem value="planning">Planning phase</SelectItem>
                      <SelectItem value="3-6">3 to 6 months</SelectItem>
                      <SelectItem value="6-12">6 to 12 months</SelectItem>
                      <SelectItem value="12+">12+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <TerraButton type="submit" fullWidth size="lg" className="group">
                  <Send className="w-4 h-4 mr-2" />
                  Request Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </TerraButton>

                <p className="text-gray-500 text-xs text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Premium Quality</h3>
                <p className="text-gray-600 text-sm">EN-certified materials and rigorous testing</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Custom Design</h3>
                <p className="text-gray-600 text-sm">Tailored solutions for your unique location</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Efficient production and installation process</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}