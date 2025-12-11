"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { CalendarIcon, SendIcon, Loader2 } from "lucide-react";

interface QuoteFormProps {
    selectedPackage: string | null;
}

export function QuoteForm({ selectedPackage }: QuoteFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: selectedPackage || "",
        budget: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (selectedPackage) {
            setFormData((prev) => ({ ...prev, package: selectedPackage }));
        }
    }, [selectedPackage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Extract error message safely
                const errorMessage = typeof data.error === 'string'
                    ? data.error
                    : data.error?.message || JSON.stringify(data.error);
                throw new Error(errorMessage);
            }

            setIsSuccess(true);
        } catch (error: any) {
            console.error("Error submitting form:", error);
            // Optionally set an error state here to show to the user
            alert(`Wystąpił błąd: ${error.message || "Spróbuj ponownie później."}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto p-6 md:p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 text-center"
            >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SendIcon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dziękujemy za zapytanie!</h3>
                <p className="text-slate-300 mb-8">
                    Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły projektu.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    className="cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full px-8"
                >
                    Wyślij kolejne zapytanie
                </Button>
            </motion.div>
        );
    }

    return (
        <div id="quote-form" className="max-w-4xl mx-auto pt-8">
            <div className="p-5 md:p-12 rounded-3xl border border-emerald-500/20 bg-black/60 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-medium">
                            Wybrano pakiet: <span className="text-white font-bold">{formData.package || "Nie wybrano"}</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Opowiedz nam o swoim projekcie</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Wypełnij krótki formularz, a my przygotujemy dla Ciebie wstępną koncepcję i wycenę.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Imię i nazwisko</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                    placeholder="Jan Kowalski"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Adres e-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                    placeholder="jan@firma.pl"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300 ml-1">Numer telefonu</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                    placeholder="+48 000 000 000"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="package" className="text-sm font-medium text-slate-300 ml-1">Pakiet</label>
                                <select
                                    id="package"
                                    name="package"
                                    value={formData.package}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-zinc-900">Wybierz pakiet...</option>
                                    <option value="Start" className="bg-zinc-900">Start (od 1200 zł)</option>
                                    <option value="Standard" className="bg-zinc-900">Standard (od 2500 zł)</option>
                                    <option value="Premium" className="bg-zinc-900">Premium / E-commerce (Wycena)</option>
                                    <option value="Other" className="bg-zinc-900">Inny / Niestandardowy</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium text-slate-300 ml-1">Opis projektu</label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                rows={4}
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                                placeholder="Opisz krótko czym zajmuje się Twoja firma i czego potrzebujesz..."
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="cursor-pointer flex-1 bg-emerald-500 hover:bg-emerald-600 text-black rounded-full py-5 md:py-7 text-base md:text-lg font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Wysyłanie...
                                    </>
                                ) : (
                                    "Wyślij zapytanie o wycenę"
                                )}
                            </Button>

                            <div className="flex items-center justify-center sm:hidden text-slate-500 text-sm font-medium">
                                lub
                            </div>

                            <Button
                                type="button"
                                data-cal-link="jakub-tomczyk/30min"
                                data-cal-config='{"layout":"month_view"}'
                                className="cursor-pointer flex-1 bg-transparent border-2 border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-white rounded-full py-5 md:py-7 text-base md:text-lg font-medium transition-all hover:bg-emerald-500/5"
                            >
                                <CalendarIcon className="w-5 h-5 mr-2" />
                                Umów bezpłatną rozmowę
                            </Button>
                        </div>
                        <p className="text-center text-slate-400 text-xs mt-4">
                            * Wysłanie formularza jest niezobowiązujące. Odpowiadamy zazwyczaj w ciągu 24h.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
