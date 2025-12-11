import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const phoneNumber = "+27837789487";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <>
      {/* WhatsApp Icon Button - Always Visible */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Open WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.327 1.203 4.938 1.838 7.812 1.838 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.337c-2.488 0-4.894-0.625-7.038-1.8l-0.506-0.262-5.106 1.319 1.331-4.956-0.331-0.556c-1.325-2.206-2.019-4.706-2.019-7.244 0-7.762 6.319-14.081 14.081-14.081s14.081 6.319 14.081 14.081c0 7.763-6.319 14.081-14.081 14.081zM21.444 18.319c-0.287-0.144-1.694-0.837-1.956-0.931s-0.456-0.144-0.644 0.144c-0.194 0.287-0.744 0.931-0.912 1.125s-0.331 0.213-0.619 0.069c-0.287-0.144-1.213-0.444-2.306-1.419-0.85-0.762-1.425-1.7-1.594-1.988s-0.019-0.444 0.125-0.587c0.131-0.131 0.287-0.338 0.431-0.506s0.194-0.287 0.287-0.481c0.094-0.194 0.050-0.363-0.025-0.506s-0.644-1.544-0.881-2.119c-0.231-0.556-0.469-0.481-0.644-0.488-0.163-0.006-0.356-0.006-0.544-0.006s-0.5 0.069-0.762 0.35c-0.262 0.287-1 0.975-1 2.381s1.025 2.762 1.169 2.95c0.144 0.194 2.012 3.075 4.875 4.319 0.681 0.294 1.213 0.469 1.625 0.6 0.688 0.219 1.313 0.188 1.806 0.113 0.55-0.081 1.694-0.694 1.931-1.363s0.238-1.244 0.169-1.363c-0.075-0.125-0.269-0.2-0.563-0.344z" />
        </svg>
      </button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#25D366] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 32 32"
                      className="w-7 h-7 fill-[#25D366]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.327 1.203 4.938 1.838 7.812 1.838 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.337c-2.488 0-4.894-0.625-7.038-1.8l-0.506-0.262-5.106 1.319 1.331-4.956-0.331-0.556c-1.325-2.206-2.019-4.706-2.019-7.244 0-7.762 6.319-14.081 14.081-14.081s14.081 6.319 14.081 14.081c0 7.763-6.319 14.081-14.081 14.081zM21.444 18.319c-0.287-0.144-1.694-0.837-1.956-0.931s-0.456-0.144-0.644 0.144c-0.194 0.287-0.744 0.931-0.912 1.125s-0.331 0.213-0.619 0.069c-0.287-0.144-1.213-0.444-2.306-1.419-0.85-0.762-1.425-1.7-1.594-1.988s-0.019-0.444 0.125-0.587c0.131-0.131 0.287-0.338 0.431-0.506s0.194-0.287 0.287-0.481c0.094-0.194 0.050-0.363-0.025-0.506s-0.644-1.544-0.881-2.119c-0.231-0.556-0.469-0.481-0.644-0.488-0.163-0.006-0.356-0.006-0.544-0.006s-0.5 0.069-0.762 0.35c-0.262 0.287-1 0.975-1 2.381s1.025 2.762 1.169 2.95c0.144 0.194 2.012 3.075 4.875 4.319 0.681 0.294 1.213 0.469 1.625 0.6 0.688 0.219 1.313 0.188 1.806 0.113 0.55-0.081 1.694-0.694 1.931-1.363s0.238-1.244 0.169-1.363c-0.075-0.125-0.269-0.2-0.563-0.344z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">TerraFit Parks</div>
                    <div className="text-white/90 text-sm">Online</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    👋 Hi there! Have questions about our adventure parks? 
                    We're here to help!
                  </p>
                </div>
                <p className="text-gray-600 text-xs mb-4">
                  Tap below to start a conversation with our team on WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-medium py-3 px-4 rounded-full text-center transition-colors"
                >
                  Start Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}