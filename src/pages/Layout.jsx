
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap');
        
        :root {
          --font-heading: 'Montserrat', sans-serif;
          --font-body: 'Poppins', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
        }
        
        body, p, span, a, button, input, textarea, select {
          font-family: var(--font-body);
        }
      `}</style>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
