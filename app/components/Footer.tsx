"use client";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-16 border-t border-emerald-500/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src={"/logos/logo.svg"} width={24} height={24} alt="VexelStudio logo" />
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
  );
}
