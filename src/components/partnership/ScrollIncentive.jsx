import React, { useState, useEffect } from "react";
import { Calculator, ArrowDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIncentive() {
  const [showIncentive, setShowIncentive] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const packagesSection = document.querySelector("#investment-packages");
    const calculatorSection = document.querySelector("#roi-calculator");
    
    if (!packagesSection || !calculatorSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === packagesSection && entry.isIntersecting) {
            setShowIncentive(true);
          } else if (entry.target === calculatorSection && entry.isIntersecting) {
            setShowIncentive(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(packagesSection);
    observer.observe(calculatorSection);

    return () => observer.disconnect();
  }, [dismissed]);

  const handleScrollToCalculator = () => {
    const calculatorSection = document.querySelector("#roi-calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDismissed(true);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowIncentive(false);
  };

  return (
    <AnimatePresence>
      {showIncentive && !dismissed && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-1/3 right-6 z-[60] max-w-sm w-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#559e2a] p-4 flex items-center gap-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-[#559e2a] rounded-xl flex items-center justify-center flex-shrink-0">
              <Calculator className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="font-bold text-gray-900 text-sm mb-1">
                💡 Try Our ROI Calculator
              </div>
              <p className="text-gray-600 text-xs">
                See your potential returns in real-time
              </p>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleScrollToCalculator}
              className="flex items-center gap-1 px-4 py-2 bg-[#559e2a] text-white rounded-full text-sm font-medium hover:bg-[#468821] transition-colors"
            >
              View
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}