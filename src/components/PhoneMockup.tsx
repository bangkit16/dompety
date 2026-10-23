import React from "react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] xs:max-w-[330px] sm:max-w-[370px]">
      {/* Ambient Depth Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-[#10b981]/10 to-transparent rounded-[3.5rem] blur-2xl pointer-events-none" />

      {/* Floating Status Pill: Instant Verified Transaction */}
      <div className="absolute -top-3 left-1 sm:-top-4 sm:-left-6 z-20 rounded-2xl p-1 ring-1 ring-emerald-500/30 bg-black/80 backdrop-blur-xl shadow-2xl max-w-[calc(100%-0.5rem)]">
        <div className="rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#0a180a] border border-emerald-500/20 flex items-center gap-2.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs ring-1 ring-emerald-400/40 flex-shrink-0">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] sm:text-xs font-bold text-white font-display truncate">Makan Siang Padang</span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold px-1 sm:px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 flex-shrink-0">
                BCA
              </span>
            </div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-emerald-400">-Rp 25.000</div>
          </div>
        </div>
      </div>

      {/* Outer Shell: Double-Bezel Precision Hardware */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 ring-1 ring-white/10 bg-gradient-to-b from-zinc-700/60 via-zinc-900 to-black shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
        {/* Inner Core: OLED Display */}
        <div className="relative rounded-[calc(2.5rem-0.375rem)] sm:rounded-[calc(3rem-0.5rem)] bg-[#050c05] text-white overflow-hidden border border-white/5 flex flex-col h-[570px] sm:h-[630px]">
          {/* Status Bar */}
          <div className="pt-3 px-6 flex justify-between items-center text-[11px] text-zinc-400 font-mono">
            <span>09:41</span>
            {/* Dynamic Camera Punch */}
            <div className="w-3.5 h-3.5 rounded-full bg-black ring-1 ring-zinc-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-900/60" />
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
              </svg>
              <span>5G</span>
              <div className="w-4 h-2 rounded-2xs border border-zinc-400 p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-400 rounded-3xs" />
              </div>
            </div>
          </div>

          {/* App Header Inside Mockup */}
          <div className="px-5 pt-4 pb-2 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 flex items-center justify-center font-bold text-xs text-emerald-300 font-display">
                D
              </div>
              <div>
                <div className="text-[10px] text-zinc-400 font-mono leading-none">Dompety Vault</div>
                <div className="text-xs font-bold text-white font-display mt-0.5">Bangkit Santoso</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
              PRO VIP
            </span>
          </div>

          {/* Balance Card inside App */}
          <div className="m-4 p-4 rounded-2xl bg-gradient-to-br from-[#0d2a0d] via-[#081a08] to-[#041004] border border-emerald-500/30 text-white shadow-lg relative overflow-hidden">
            <div className="text-[10px] text-emerald-300/80 font-mono uppercase tracking-wider">
              Total Saldo Terkonsolidasi
            </div>
            <div className="text-2xl font-black font-mono tracking-tight mt-1 text-white">
              Rp 14.250.000
            </div>
            <div className="mt-3 pt-2.5 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-zinc-300">
              <span className="text-emerald-400">+Rp 8.500.000 Masuk</span>
              <span className="text-rose-400">-Rp 2.450.000 Keluar</span>
            </div>
          </div>

          {/* Quick Account Chips */}
          <div className="px-4 flex gap-2 overflow-x-auto pb-1 text-xs">
            <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
              <div className="text-[9px] text-zinc-400 font-mono">BCA Prioritas</div>
              <div className="font-bold font-mono text-white text-[11px]">Rp 8.100.000</div>
            </div>
            <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
              <div className="text-[9px] text-zinc-400 font-mono">Mandiri Payroll</div>
              <div className="font-bold font-mono text-white text-[11px]">Rp 4.850.000</div>
            </div>
            <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
              <div className="text-[9px] text-zinc-400 font-mono">ShopeePay</div>
              <div className="font-bold font-mono text-white text-[11px]">Rp 1.300.000</div>
            </div>
          </div>

          {/* Live Voice Recording Waveform Widget */}
          <div className="mx-4 my-2 p-3 rounded-2xl bg-[#091609] border border-emerald-500/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                  Speech Recognition Engine
                </span>
              </div>
              {/* Animated Waveform Lines */}
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse [animation-delay:0.15s]" />
                <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full animate-pulse [animation-delay:0.3s]" />
                <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse [animation-delay:0.45s]" />
              </div>
            </div>
            <div className="text-[11px] text-zinc-200 bg-black/40 rounded-xl px-2.5 py-1.5 border border-white/5 font-mono">
              &ldquo;Beli bensin Pertamax 50 ribu pakai ShopeePay&rdquo;
            </div>
          </div>

          {/* Clean Transaction Ledger */}
          <div className="px-4 pt-1 flex-1 space-y-1.5">
            <div className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">
              Riwayat Terverifikasi
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 flex items-center justify-between border border-white/5">
              <div>
                <div className="text-xs font-bold text-white">Bensin Pertamax</div>
                <div className="text-[10px] text-zinc-400 font-mono">ShopeePay / Transportasi</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-rose-400">-Rp 50.000</div>
                <div className="text-[9px] text-zinc-500 font-mono">14:10</div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 flex items-center justify-between border border-white/5">
              <div>
                <div className="text-xs font-bold text-white">Makan Siang Padang</div>
                <div className="text-[10px] text-zinc-400 font-mono">BCA / Makanan</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-rose-400">-Rp 25.000</div>
                <div className="text-[9px] text-zinc-500 font-mono">12:30</div>
              </div>
            </div>
          </div>

          {/* Bottom App Nav Dock */}
          <div className="bg-[#030903] border-t border-white/10 py-2.5 px-6 flex justify-between items-center text-zinc-400 text-[10px] font-mono">
            <span className="text-emerald-400 font-semibold">Beranda</span>
            <span>Analitik</span>
            <div className="-mt-6 w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold ring-2 ring-black shadow-lg shadow-emerald-500/40">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Akun</span>
            <span>Setelan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
