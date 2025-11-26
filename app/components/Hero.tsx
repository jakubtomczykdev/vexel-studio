"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import CompanyCarousel from "./LogoGrid";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
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
          transition={{ duration: 0.5 }}
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
        className="absolute bottom-0 lg:bottom-18 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-emerald-500/30 rounded-full flex items-start justify-center p-2 ">
          <motion.div
            className="w-1.5 h-3 bg-emerald-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
