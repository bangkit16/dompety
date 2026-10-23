import React from "react";
import Image from "next/image";

export interface MascotBadgeProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

function getStyle(size?: number, className = "") {
  if (className.includes("w-") || !size) return undefined;
  return { width: size, height: size };
}

export function MascotHeroWelcoming({
  className = "",
  size = 180,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_HERO_WELCOMING.png"
        alt="Dompety Welcoming Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </div>
  );
}

export function MascotAiAssistant({
  className = "",
  size = 160,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_AI_ASSISTANT.png"
        alt="Dompety AI Voice Assistant Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );
}

export function MascotMultiAccount({
  className = "",
  size = 160,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_MULTI_ACCOUNT.png"
        alt="Dompety Multi-Account Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );
}

export function MascotAnalytics({
  className = "",
  size = 160,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_ANALYTICS.png"
        alt="Dompety Analytics Detective Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );
}

export function MascotProCrown({
  className = "",
  size = 160,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_PRO_CROWN.png"
        alt="Dompety Pro VIP Crown Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </div>
  );
}

export function MascotSecurity({
  className = "",
  size = 160,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_SECURITY.png"
        alt="Dompety Security Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </div>
  );
}

export function MascotCelebration({
  className = "",
  size = 160,
  priority = false,
}: MascotBadgeProps) {
  return (
    <div
      style={getStyle(size, className)}
      className={`relative flex items-center justify-center select-none pointer-events-none aspect-square ${className}`}
    >
      <Image
        src="/images/DOMPETY_CELEBRATION.png"
        alt="Dompety Celebration Mascot"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </div>
  );
}
