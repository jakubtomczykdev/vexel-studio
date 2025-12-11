"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { PricingSection } from "./PricingSection";
import { useState, useEffect, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function OfertaPage() {
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = useCallback((id: string) => {
        // If we are on the offer page, some sections might not exist (like 'about' or 'work').
        // In a real app, we might want to navigate back to home with a hash.
        // For now, let's assume the Navbar handles navigation to other pages or hashes.
        // But wait, the Navbar component uses scrollToSection which assumes elements exist on the current page.
        // We need to handle this.

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            // If element not found, it might be on the homepage.
            // We should probably redirect to /#id
            window.location.href = `/#${id}`;
        }
    }, []);

    return (
        <div className="min-h-screen bg-black/95 overflow-x-hidden relative">
            <AnimatedBackground />
            <Navbar
                isScrolled={isScrolled}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                scrollToSection={scrollToSection}
            />
            <main className="pt-20">
                <PricingSection />
            </main>
            <Footer />
        </div>
    );
}
