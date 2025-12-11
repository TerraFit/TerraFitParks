import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, TreePine } from "lucide-react";
import TerraButton from "@/components/ui/TerraButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Systems", page: "Systems" },
  { name: "Catalogue", page: "Catalogue" },
  { name: "Partnership", page: "Partnership" },
  { name: "Investment Guide", page: "InvestmentGuide" },
  { name: "Team", page: "Team" },
  { name: "About", page: "About" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/Home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={createPageUrl("Home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-[#559e2a] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled || !isHomePage ? "text-gray-900" : "text-white"
            )}>
              TerraFit<span className={cn(scrolled || !isHomePage ? "text-[#559e2a]" : "text-[#559e2a]")}>Parks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-[#559e2a]/10",
                  scrolled || !isHomePage ? "text-gray-700 hover:text-[#559e2a]" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to={createPageUrl("Contact")}>
              <TerraButton>Contact Us</TerraButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled || !isHomePage ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] mt-4" : "max-h-0"
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#559e2a]/10 hover:text-[#559e2a] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to={createPageUrl("Contact")} onClick={() => setIsOpen(false)}>
                <TerraButton fullWidth>Contact Us</TerraButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}