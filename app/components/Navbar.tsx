"use client";
import { Button } from "./ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: NavbarProps) {
  const navLinks = [{name: "Home", id:"home"}, {name: "O nas", id:"about"}, {name:"Oferta", id:"services"}, {name: "Kontakt", id:"contact"}];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-emerald-500/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={"/logos/logo.svg"} width={30} height={30} alt="VexelStudio logo"/>
          <span className="text-white tracking-tight text-lg font-bold">Vexel Studio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((section) => (
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
          {navLinks.map((section) => (
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
  );
}
