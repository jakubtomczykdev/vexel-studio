"use client";
import { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
// import { VexelLogo } from "./components/VexelLogo";
import { motion } from "framer-motion";
import { toast } from "sonner";
import CompanyCarousel from "./components/CompanyCarousel";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function App() {
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate random particles
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen bg-black/95 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-emerald-500 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-emerald-500/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={"./logos/logo.svg"} width={30} height={30} alt="VexelStudio logo"/>
          <span className="text-white tracking-tight text-lg font-bold">Vexel Studio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {[{name: "Home", id:"home"}, {name: "O nas", id:"about"}, {name:"Oferta", id:"services"}, {name: "Kontakt", id:"contact"}].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className="text-slate-100 hover:text-emerald-400 transition-colors text-md tracking-wide"
            >
              {section.name}
            </a>
          ))}
          <Button
            data-cal-link="jakub-tomczyk/30min"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-black rounded-full px-8 transition-all hover:scale-105"
          >
            Umów bezpłatną konsultację
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
            aria-label="Otwórz menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/0 backdrop-blur-xl border-t border-emerald-500/10 px-8 py-4 flex flex-col gap-4">
          {[{name: "Home", id:"home"}, {name: "O nas", id:"about"}, {name:"Oferta", id:"services"}, {name: "Kontakt", id:"contact"}].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
                setMobileMenuOpen(false);
              }}
              className="text-slate-200 hover:text-emerald-400 transition-colors text-base tracking-wide text-left"
            >
              {section.name}
            </a>
          ))}
          <Button
            data-cal-link="jakub-tomczyk/30min"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-black rounded-full px-6 py-2 transition-all hover:scale-105 mt-2"
          >
            Umów konsultację
          </Button>
        </div>
      )}
    </nav>
    <main>
      {/* Hero Section with Large Abstract Orb */}
      <section id="home" className="relative min-h-screen flex items-start pt-32 overflow-hidden">
     
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 blur-3xl opacity-10">
              <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600"></div>
            </div>

            {/* Main Orb */}
            <div className="relative w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] md:w-[1200px] md:h-[600px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/10 via-green-500/10 to-emerald-600/10 blur-2xl"></div>

              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-emerald-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute inset-16 rounded-full border border-emerald-400/20"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Abstract Floating Elements */}
        <motion.div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-24 h-24 border border-emerald-500/20 rounded-2xl"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-emerald-500/30"
          animate={{
            rotate: [0, -360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute bottom-1/3 left-1/3 w-32 h-32"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full border border-emerald-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-emerald-400/30 rounded-full"></div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-1/4 right-1/3"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-lg rotate-45"></div>
        </motion.div>

        {/* Floating Grid Pattern */}
        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 right-1/4 w-40 h-40 opacity-10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="grid grid-cols-4 gap-2 w-full h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-emerald-500/40"></div>
            ))}
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mb-6 md:inline-block hidden">
              <div className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                <span className="text-emerald-400 text-sm tracking-wider ">Strony internetowe dla firm, które chcą zdobywać więcej klientów oraz leadów </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-8 font-bold">
              Tworzymy szybkie strony, które dominują w Google i zamieniają odwiedzających w klientów.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Koniec z przestarzałymi stronami. Pokażemy Ci, jak stworzyć nowoczesną witrynę, która przyciąga klientów, wyróżnia Twoją firmę w sieci i zwiększa sprzedaż – niezależnie od branży.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
              data-cal-link="jakub-tomczyk/30min"
              data-cal-config='{"layout":"month_view"}'
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-black rounded-full px-10 py-6 text-lg transition-all hover:scale-105"
              >
                Umów bezpłatną konsultację
              </Button>
            </div>
            
            <CompanyCarousel />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-emerald-500/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-emerald-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

      </section>

      {/* Services Section */}
      <section id="services" aria-labelledby="services-heading" className="py-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute top-20 left-10 w-32 h-32 border border-emerald-500/10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute bottom-20 right-20 w-40 h-40"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full border border-emerald-500/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-emerald-400/20 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 id="services-heading" className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight">
              W czym się specjalizujemy?
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-light">
              Rozwiązania od projektu po wdrożenie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strony internetowe",
                description: "Projektujemy strony, które przyciągają uwagę, działają błyskawicznie i pomagają Twojej firmie rosnąć."
              },
              {
                title: "Sklepy Online (E-commerce)",
                description: "Tworzymy sklepy, które sprzedają – intuicyjne, szybkie i łatwe w obsłudze, zarówno dla Ciebie, jak i Twoich klientów."
              },
              {
                title: "Pozycjonowanie w Google",
                description: "Dbamy o to, żeby Twoja strona była widoczna tam, gdzie szukają Cię klienci."
              },
              {
                title: "Projekt graficzny i branding",
                description: "Pomagamy zbudować spójny i nowoczesny wizerunek marki, który wyróżnia Cię w sieci."
              },
              {
                title: "Maksymalna wydajność",
                description: "Dzięki dopracowanemu kodowi i nowoczesnym technologiom Twoja strona jest szybka, bezpieczna oraz gotowa na ruch z wyszukiwarki i nie tylko."
              },
              {
                title: "Stała opieka nad stroną",
                description: "Zajmujemy się aktualizacjami, bezpieczeństwem i szybkością, żeby Twoja strona zawsze działała bez problemów."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl border border-emerald-500/10 bg-gradient-to-b from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 hover:bg-emerald-500/10 h-full">
                  <h3 className="text-2xl bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 text-transparent mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-100 leading-relaxed font-light">{service.description}</p>

                  {/* Hover Glow Effect */}
                  <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" aria-labelledby="about-heading" className="py-32 relative overflow-hidden">
        {/* Abstract Lines */}
        <div aria-hidden="true" className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
            animate={{
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2,
            }}
          />
        </div>

        {/* Floating Hexagon */}
        <motion.div
          aria-hidden="true"
          className="absolute top-1/3 right-10 w-24 h-24 opacity-10"
          animate={{
            rotate: [0, 120, 240, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-emerald-500" fill="none">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-7xl text-white mb-8 tracking-tight">
              Stworzone dla wydajności
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                i rozwoju twojej firmy
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light mb-16">
              Budujemy coś więcej niż strony. Dajemy Ci skuteczne narzędzie, które przekłada ruch na realne zlecenia i sprzedaż. U nas każdy detal jest świadomie zaprojektowany, by łatwo prowadzić użytkownika do celu.
            </p>

            <div className="grid md:grid-cols-3 gap-12 sm:gap-16">
              {[
                { number: "10+", label: "Wykonanych projektów" },
                { number: "98%", label: "Satysfakcja klientów" },
                { number: "50+", label: "Web3 integrations" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-3 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-slate-200 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" aria-labelledby="work-heading" className="py-32 relative overflow-hidden">
        {/* Abstract Glow */}
        <div aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/10 rounded-full blur-3xl"></div>

        {/* Grid Background */}
        <div aria-hidden="true" className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Triangle */}
        <motion.div
          aria-hidden="true"
          className="absolute top-20 left-20 opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" className="stroke-emerald-500" fill="none">
            <polygon points="50,10 90,90 10,90" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 id="work-heading" className="text-4xl sm:text-5xl md:text-7xl text-white mb-6 tracking-tight">
              Wyróżnione prace
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-light">
              Sprawdź nasze ostatnie realizacje
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              { title: "Kowalski & Partnerzy", category: "Landing page", year: "2025", href: "https://kowalski-partnerzy.vercel.app/" },
              { title: "Restauracja Bellovito", category: "E-Commerce", year: "2025", href: "#" },
              { title: "AI Analytics Dashboard", category: "SaaS Product", year: "2025", href: "#" }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/10 bg-gradient-to-b from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 hover:bg-emerald-500/10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-emerald-400 mb-3 tracking-wider">{project.category}</div>
                        <h3 className="text-3xl sm:text-4xl text-white tracking-tight">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <div className="text-slate-100 text-xl sm:text-2xl font-light self-start sm:self-center">{project.year}</div>
                        <Button variant="outline" className="bg-transparent text-white border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white">
                          Zobacz projekt
                        </Button>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" aria-labelledby="contact-heading" className="py-32 relative overflow-hidden">
        {/* Abstract Background */}
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-emerald-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Animated Circles */}
        <motion.div
          aria-hidden="true"
          className="absolute top-1/4 left-10 w-32 h-32 sm:w-64 sm:h-64 border border-emerald-500/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute bottom-1/4 right-10 w-24 h-24 sm:w-48 sm:h-48 border border-emerald-500/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="contact-heading" className="text-4xl sm:text-5xl md:text-7xl text-white mb-8 tracking-tight">
              Stwórzmy razem
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                coś niezwykłego
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
              Zostaw wiadomość, a my wrócimy z bezpłatną wyceną w 24h.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent! We'll be in touch soon.", {
                  duration: 5000,
                });
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-8 p-6 sm:p-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-100">
                    Imię
                  </Label>
                  <Input
                    id="name"
                    placeholder="Twoje imię"
                    required
                    className="bg-slate-900/50 border-emerald-500/20 text-white placeholder:text-slate-500 focus:border-emerald-500/50 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-100">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="twojemail@email.com"
                    required
                    className="bg-slate-900/50 border-emerald-500/20 text-white placeholder:text-slate-500 focus:border-emerald-500/50 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-100">
                  Firma
                </Label>
                <Input
                  id="company"
                  placeholder="Nazwa twojej firmy"
                  className="bg-slate-900/50 border-emerald-500/20 text-white placeholder:text-slate-500 focus:border-emerald-500/50 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-100">
                  Wiadomość
                </Label>
                <Textarea
                  id="message"
                  placeholder="Opisz nam swój pomysł..."
                  required
                  rows={6}
                  className="bg-slate-900/50 border-emerald-500/20 text-white placeholder:text-slate-500 focus:border-emerald-500/50 rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-black rounded-full py-6 text-lg transition-all hover:scale-105"
              >
                Wyślij Wiadomość
              </Button>
            </form>

            <p className="text-slate-100 mt-8 text-center font-light">
              Lub wyślij maila na{" "} 
              <a href="mailto:kontakt@vexelstudio.pl" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                kontakt@vexelstudio.pl 
              </a>
            </p>
          </motion.div>
        </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="py-16 border-t border-emerald-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image src={"./logos/logo.svg"} width={24} height={24} alt="VexelStudio logo"/>
              <span className="text-slate-100 tracking-tight">Vexel Studio</span>
            </div>

            <div className="flex gap-8 sm:gap-12">
              <a href="#" className="text-slate-100 hover:text-emerald-400 transition-colors text-sm">Instagram</a>
              <a href="#" className="text-slate-100 hover:text-emerald-400 transition-colors text-sm">LinkedIn</a>
              <a href="/privacy-policy" className="text-slate-100 hover:text-emerald-400 transition-colors text-sm">Polityka Prywatności</a>
            </div>

            <p className="text-slate-100 text-sm font-light text-center md:text-left">
              © 2025 Vexel Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}