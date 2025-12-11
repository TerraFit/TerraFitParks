import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, Quote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import TerraButton from "@/components/ui/TerraButton";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
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
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#559e2a] font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Let's Build Something Amazing
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to start your adventure park journey? Our team is here to answer your questions 
              and help you explore partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                How Can We Help?
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#559e2a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#559e2a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:+27837789487" className="text-gray-600 hover:text-[#559e2a] transition-colors">
                      +27(0)837789487
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#559e2a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#559e2a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:inquiry@aemaragroup.com" className="text-gray-600 hover:text-[#559e2a] transition-colors">
                      inquiry@aemaragroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#559e2a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#559e2a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <p className="text-gray-600">Monday - Friday, 9am - 4pm SasT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#559e2a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#559e2a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <p className="text-gray-600">Alongside R102, J-Bay Zebra Lodge<br />6375 Thornhill, Eastern Cape, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-2xl p-6 relative">
                <Quote className="w-8 h-8 text-[#559e2a]/20 absolute top-4 right-4" />
                <p className="text-gray-600 italic mb-4">
                  "Working with TerraFit was transformative for our resort. Their team guided us 
                  through every step, and our adventure park has become our top revenue generator."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Testimonial"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Michael Thabo</div>
                    <div className="text-gray-500 text-xs">Safari Lodge Owner, Mpumalanga</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-[#559e2a]/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#559e2a]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                      className="text-[#559e2a] font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Discovery Call</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
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
                          placeholder="you@company.com"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your organization name"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Tell us about your project *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your vision, location, and any specific questions you have..."
                          rows={5}
                          required
                          className="mt-2"
                        />
                      </div>

                      <TerraButton type="submit" fullWidth size="lg" className="group">
                        <Send className="w-4 h-4 mr-2" />
                        Schedule a Discovery Call
                      </TerraButton>

                      <p className="text-gray-500 text-xs text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
          alt="Map placeholder"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-[#559e2a] mx-auto mb-3" />
            <div className="font-semibold text-gray-900">TerraFit Parks HQ</div>
            <div className="text-gray-500 text-sm">Alongside R102, J-Bay Zebra Lodge, Thornhill, South Africa!</div>
          </div>
        </div>
      </section>
    </div>
  );
}