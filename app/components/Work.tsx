"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projectsData";
import Link from "next/link";

export function Work() {
  return (
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
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/10 bg-gradient-to-b from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 hover:bg-emerald-500/10">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
                    <div className="flex-grow">
                      <div className="text-sm text-emerald-400 mb-3 tracking-wider">{project.category}</div>
                      <h3 className="text-3xl sm:text-4xl text-white tracking-tight mb-4">{project.title}</h3>
                      <p className="text-slate-300 leading-relaxed font-light max-w-2xl">{project.description}</p>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-start sm:items-end gap-4 mt-4 sm:mt-0">
                      <div className="text-slate-100 text-xl sm:text-2xl font-light">{project.year}</div>
                      <Button
                        variant="outline"
                        className="bg-transparent text-white border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white group-hover:border-emerald-500/50 transition-all"
                      >
                        Zobacz projekt <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
