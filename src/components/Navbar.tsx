"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GooglePlayIcon } from "./PlayStoreBadge";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Fitur AI", href: "#fitur-ai" },
    { label: "Multi-Akun", href: "#multi-akun" },
    { label: "Analitik", href: "#analitik" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ];

  // Close menu on ESC key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      <header className="fixed top-3 sm:top-6 inset-x-0 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl z-50">
        {/* Navbar Pill */}
        <div className="p-1 sm:p-1.5 rounded-full ring-1 ring-black/10 bg-white/90 backdrop-blur-2xl shadow-[0_12px_36px_rgba(5,17,37,0.08)]">
          <div className="rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 group">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dompety-icon.png"
                  alt="Dompety Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-extrabold font-display tracking-tight text-[#051125] leading-none">
                  Dompety
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#4c7e47] uppercase leading-none mt-0.5">
                  AI Wallet
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-medium text-zinc-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#0a2505] transition-colors relative py-1 hover:font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Button-in-Button Trailing Icon Architecture (Desktop) */}
            <div className="hidden md:flex items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.bangkit16s.dompety"
                target="_blank"
                rel="noopener noreferrer"
                className="group pl-4 pr-1.5 py-1.5 rounded-full bg-[#0a2505] hover:bg-[#103a08] text-white text-xs font-semibold flex items-center gap-2.5 shadow-sm active:scale-[0.98] transition-all duration-300"
              >
                <span>Download Play Store</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                  <GooglePlayIcon className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-zinc-800 rounded-full transition-all duration-300 origin-center ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.25" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-zinc-800 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-zinc-800 rounded-full transition-all duration-300 origin-center ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.25" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Detached Mobile Menu Card */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-1.5 rounded-2xl ring-1 ring-black/10 bg-white/95 backdrop-blur-2xl shadow-[0_20px_40px_rgba(5,17,37,0.12)] border border-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs font-semibold text-zinc-800 py-2.5 px-3 rounded-xl hover:bg-zinc-100/80 active:bg-zinc-200/60 transition-colors"
                >
                  <span>{link.label}</span>
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}

              <div className="pt-2 mt-1 border-t border-zinc-100">
                <a
                  href="https://play.google.com/store/apps/details?id=com.bangkit16s.dompety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl bg-[#0a2505] hover:bg-[#103a08] text-white text-xs font-bold shadow-sm active:scale-[0.98] transition-all"
                >
                  <span>Unduh di Google Play</span>
                  <GooglePlayIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
