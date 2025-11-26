"use client";
import { motion } from "framer-motion";

export function About() {
  return (
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
  );
}
