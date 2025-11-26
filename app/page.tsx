"use client";
import { getCalApi } from "@calcom/embed-react";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function App() {
  // ----------------------------------------------------
  // HOOKS
  // ----------------------------------------------------
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ "namespace": "30min" });
        cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    })();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------------------------------------------------
  // RENDEROWANIE KOMPONENTU
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-black/95 overflow-x-hidden relative">
      <AnimatedBackground />
      <Navbar 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
