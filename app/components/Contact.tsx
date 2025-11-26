"use client";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
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
  );
}
