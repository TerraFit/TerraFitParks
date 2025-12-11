import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TreePine, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#559e2a] rounded-xl flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                TerraFit<span className="text-[#559e2a]">Parks</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building thrilling adventure experiences that grow profits. Turnkey park systems for African entrepreneurs.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#559e2a] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#559e2a] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#559e2a] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#559e2a] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", page: "Home" },
                { name: "Our Systems", page: "Systems" },
                { name: "Partnership", page: "Partnership" },
                { name: "Investment Guide", page: "InvestmentGuide" },
                { name: "About Us", page: "About" }
              ].map((link) => (
                <li key={link.page}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-gray-400 hover:text-[#559e2a] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              {[
                "Treetop Adventures",
                "Adrenaline Parks",
                "Mobile Parks",
                "Zip Line Systems",
                "Custom Projects"
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={createPageUrl("Systems")}
                    className="text-gray-400 hover:text-[#559e2a] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#559e2a] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Alongside R102, J-Bay Zebra Lodge, 6375 Thornhill, Eastern Cape, South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#559e2a] flex-shrink-0" />
                <a href="tel:+27837789487" className="text-gray-400 hover:text-[#559e2a] transition-colors text-sm">
                  +27(0)837789487
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#559e2a] flex-shrink-0" />
                <a href="mailto:inquiry@aemaragroup.com" className="text-gray-400 hover:text-[#559e2a] transition-colors text-sm">
                  inquiry@aemaragroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TerraFit Parks. A division of Aemara Group Pty Ltd. All rights reserved. | A{" "}
            <a 
              href="https://www.terrafit-trail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#559e2a] hover:text-[#7ac142] transition-colors font-medium"
            >
              TerraFit Trail
            </a>{" "}
            division.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
