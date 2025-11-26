"use client";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-31.5 relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute top-0 lg:bottom-12 left-1/2 -translate-x-1/2 z-20  lg:hidden"
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
              transition={{ duration: 0.6 }}
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
  );
}
