import Image from "next/image";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[60vh] max-h-[520px] sm:h-[70vh] sm:max-h-[640px] lg:h-[80vh] lg:max-h-[760px] aspect-[720/1600] max-w-[85vw]">
      {/* Ambient Depth Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-[#10b981]/10 to-transparent rounded-[3.5rem] blur-2xl pointer-events-none" />

      {/* Outer Shell: Precision Hardware Bezel */}
      <div className="relative w-full h-full rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 ring-1 ring-white/10 bg-gradient-to-b from-zinc-700/60 via-zinc-900 to-black shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
        <div className="relative w-full h-full rounded-[calc(2.5rem-0.375rem)] sm:rounded-[calc(3rem-0.5rem)] overflow-hidden bg-black">
          <Image
            src="/images/Screenshot-dashboard-app.jpeg"
            alt="Dompety Dashboard"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}
