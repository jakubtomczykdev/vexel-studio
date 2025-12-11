"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { QuoteForm } from "./QuoteForm";
import { useState, useEffect } from "react";

const packages = [
  {
    name: "Start",
    price: "od 1200 zł",
    description: "Idealny dla małych firm i freelancerów, którzy potrzebują profesjonalnej wizytówki w sieci.",
    features: [
      "Indywidualny projekt graficzny (One Page)",
      "Responsywność (RWD)",
      "Podstawowa optymalizacja SEO",
      "Szybki czas ładowania",
      "Formularz kontaktowy",
      "Integracja z mapami Google",
      "Certyfikat SSL",
      "1 rok hostingu i domeny gratis"
    ],
    highlight: false,
    delay: 0
  },
  {
    name: "Standard",
    price: "od 2500 zł",
    description: "Rozbudowana strona dla firm, które chcą skutecznie pozyskiwać klientów.",
    features: [
      "Wszystko z pakietu Start",
      "Do 5 podstron",
      "System zarządzania treścią (CMS)",
      "Zaawansowana optymalizacja SEO",
      "Blog firmowy",
      "Integracja z social media",
      "Google Analytics & Search Console",
      "Szkolenie z obsługi panelu"
    ],
    highlight: true,
    delay: 0.2
  },
  {
    name: "Premium / E-commerce",
    price: "Wycena indywidualna",
    description: "Dedykowane rozwiązania, sklepy internetowe i zaawansowane aplikacje webowe.",
    features: [
      "Wszystko z pakietu Standard",
      "Nielimitowana liczba podstron",
      "Sklep internetowy (płatności, wysyłki)",
      "Zaawansowane filtrowanie produktów",
      "Integracje z zewnętrznymi systemami",
      "Wielojęzyczność",
      "Dedykowane funkcjonalności",
      "Priorytetowe wsparcie techniczne"
    ],
    highlight: false,
    delay: 0.4
  }
];

export function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen && selectedPackage) {
      const timer = setTimeout(() => {
        const formElement = document.getElementById("quote-form-container");
        if (formElement) {
          const yOffset = -50; // Less offset to keep context
          const y = formElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isFormOpen, selectedPackage]);

  const handlePackageSelect = (pkgName: string) => {
    if (selectedPackage === pkgName && isFormOpen) {
      setIsFormOpen(false);
      setSelectedPackage(null);
    } else {
      setSelectedPackage(pkgName);
      setIsFormOpen(true);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements similar to Services */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight font-display">
            Wybierz pakiet idealny dla Ciebie
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-light">
            Przejrzyste zasady, brak ukrytych kosztów. Zainwestuj w stronę, która zarabia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: pkg.delay }}
              className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-500 ${selectedPackage === pkg.name
                ? "border-emerald-500 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.2)] scale-[1.02] z-20"
                : pkg.highlight
                  ? "border-emerald-500/50 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                  : "border-emerald-500/10 bg-black/40 backdrop-blur-sm hover:border-emerald-500/30"
                }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black whitespace-nowrap flex items-center px-3 lg:px-4 py-1 rounded-full text-sm font-medium">
                  Najczęściej wybierany
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-4">{pkg.price}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm">
                    <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePackageSelect(pkg.name)}
                className={`cursor-pointer w-full rounded-full py-6 text-base font-medium transition-all hover:scale-105 ${selectedPackage === pkg.name
                  ? "bg-emerald-500 text-black ring-2 ring-emerald-400 ring-offset-2 ring-offset-black"
                  : pkg.highlight
                    ? "bg-emerald-500 hover:bg-emerald-600 text-black"
                    : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
              >
                {selectedPackage === pkg.name ? "Wypełnij formularz poniżej" : "Wybierz pakiet"}
              </Button>

              {selectedPackage === pkg.name && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-emerald-500 animate-bounce">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div id="quote-form-container">
                <QuoteForm selectedPackage={selectedPackage} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm">
            * Podane ceny są cenami netto. Ostateczna wycena zależy od stopnia skomplikowania projektu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
