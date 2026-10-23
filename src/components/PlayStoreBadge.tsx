import React from "react";

interface PlayStoreBadgeProps {
  className?: string;
  variant?: "primary" | "dark" | "pill";
}

export function PlayStoreBadge({ className = "", variant = "primary" }: PlayStoreBadgeProps) {
  const href = "https://play.google.com/store/apps/details?id=com.bangkit16s.dompety";

  if (variant === "pill") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full font-semibold text-xs transition-all duration-300 active:scale-[0.98] bg-[#0a2505] text-white hover:bg-[#103a08] ring-1 ring-emerald-500/30 shadow-md ${className}`}
      >
        <span>Download di Google Play</span>
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
          <GooglePlayIcon className="w-3.5 h-3.5" />
        </div>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Unduh di Google Play Store"
      className={`group relative inline-flex items-center gap-3 sm:gap-4 pl-4 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 active:scale-[0.98] ${
        variant === "dark"
          ? "bg-[#051125] hover:bg-[#071936] text-white ring-1 ring-white/10 shadow-lg"
          : "bg-[#0a2505] hover:bg-[#103a08] text-white ring-1 ring-emerald-400/40 shadow-xl shadow-[#0a2505]/25"
      } ${className}`}
    >
      <div className="flex flex-col text-left">
        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-emerald-300/80 leading-none">
          Tersedia Resmi di
        </span>
        <span className="text-sm sm:text-base font-extrabold font-display tracking-tight text-white leading-tight mt-0.5">
          Google Play Store
        </span>
      </div>

      {/* Button-in-Button Trailing Icon Circle */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 flex-shrink-0">
        <GooglePlayIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      </div>
    </a>
  );
}

export function GooglePlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.6 1.8C3.2 2.2 3 2.8 3 3.6V20.4C3 21.2 3.2 21.8 3.6 22.2L3.7 22.3L13.1 12.9V12.7V11.1L3.7 1.7L3.6 1.8Z"
        fill="url(#gp_blue)"
      />
      <path
        d="M16.2 16.1L13.1 12.9V12.7V11.1L16.2 8L16.3 8.1L20 10.2C21.1 10.8 21.1 11.8 20 12.4L16.3 14.5L16.2 16.1Z"
        fill="url(#gp_yellow)"
      />
      <path
        d="M16.3 16L13.1 12.8L3.6 22.3C4 22.7 4.7 22.8 5.5 22.3L16.3 16Z"
        fill="url(#gp_red)"
      />
      <path
        d="M16.3 8L5.5 1.7C4.7 1.2 4 1.3 3.6 1.7L13.1 11.2L16.3 8Z"
        fill="url(#gp_green)"
      />
      <defs>
        <linearGradient id="gp_blue" x1="12.2" y1="2.7" x2="-1.7" y2="16.6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF" />
          <stop offset="0.01" stopColor="#00A1FF" />
          <stop offset="0.26" stopColor="#00BEFF" />
          <stop offset="0.51" stopColor="#00D2FF" />
          <stop offset="0.76" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient id="gp_yellow" x1="21.8" y1="12" x2="-0.4" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000" />
          <stop offset="0.41" stopColor="#FFBD00" />
          <stop offset="0.78" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient id="gp_red" x1="18" y1="14.6" x2="2.7" y2="29.9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id="gp_green" x1="2.7" y1="-5.9" x2="18" y2="9.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071" />
          <stop offset="0.07" stopColor="#2DA771" />
          <stop offset="0.48" stopColor="#15CF74" />
          <stop offset="0.8" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
}
