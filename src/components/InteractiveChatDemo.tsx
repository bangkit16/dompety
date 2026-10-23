"use client";

import React, { useState } from "react";

interface ChatScenario {
  id: string;
  question: string;
  answer: string;
  statBadge?: { label: string; value: string };
  breakdown?: { label: string; amount: string; pct: number }[];
}

const SCENARIOS: ChatScenario[] = [
  {
    id: "biggest-expense",
    question: "Berapa pengeluaran terbesar saya bulan ini?",
    answer:
      "Pengeluaran terbesarmu bulan ini adalah Sewa Apartemen sebesar Rp3.200.000 pada 2 Oktober via Bank Mandiri. Diikuti Belanja Bulanan Supermarket Rp1.150.000 via BCA.",
    statBadge: {
      label: "Pengeluaran Terbesar",
      value: "Rp 3.200.000",
    },
    breakdown: [
      { label: "Sewa Apartemen", amount: "Rp 3.200.000", pct: 65 },
      { label: "Supermarket Bulanan", amount: "Rp 1.150.000", pct: 25 },
      { label: "Service Rutin Motor", amount: "Rp 450.000", pct: 10 },
    ],
  },
  {
    id: "mandiri-balance",
    question: "Sisa saldo akun Mandiri berapa?",
    answer:
      "Sisa saldo aktif Bank Mandiri kamu saat ini Rp4.850.000. Terakhir ada transaksi keluar Rp50.000 untuk bensin Pertamax kemarin sore.",
    statBadge: {
      label: "Saldo Mandiri Aktif",
      value: "Rp 4.850.000",
    },
    breakdown: [
      { label: "Saldo Awal Bulan", amount: "Rp 8.100.000", pct: 100 },
      { label: "Total Pengeluaran", amount: "-Rp 3.250.000", pct: 40 },
    ],
  },
  {
    id: "top-category",
    question: "Kategori apa yang paling banyak keluar uang?",
    answer:
      "Kategori nomor 1 bulan ini adalah Kuliner & Makanan (38% dari total pengeluaran), total Rp2.450.000 dari 42 kali transaksi.",
    statBadge: {
      label: "Top Kategori: Kuliner",
      value: "38% (Rp 2.450.000)",
    },
    breakdown: [
      { label: "Kuliner & Kopi", amount: "Rp 2.450.000", pct: 38 },
      { label: "Tempat Tinggal", amount: "Rp 2.000.000", pct: 31 },
      { label: "Transportasi", amount: "Rp 1.100.000", pct: 17 },
      { label: "Lainnya", amount: "Rp 890.000", pct: 14 },
    ],
  },
];

export function InteractiveChatDemo() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("biggest-expense");
  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <div className="w-full rounded-2xl sm:rounded-[2rem] p-1.5 ring-1 ring-white/10 bg-gradient-to-br from-white/10 via-black/40 to-black/80 backdrop-blur-2xl shadow-2xl">
      <div className="rounded-[calc(1rem-0.125rem)] sm:rounded-[calc(2rem-0.375rem)] bg-[#050c05] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden border border-emerald-500/20">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Console Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
            <span className="font-mono font-medium text-emerald-300 tracking-wider uppercase text-[10px] sm:text-[11px] truncate">
              Natural Language Financial Query
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] text-zinc-500 flex-shrink-0 ml-2">Latency: 0.2s</span>
        </div>

        {/* Prompt Selection Pills */}
        <div className="my-4 sm:my-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Pilih Simulasi Pertanyaan:
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {SCENARIOS.map((sc) => {
              const isSelected = sc.id === activeScenarioId;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-left ${
                    isSelected
                      ? "bg-emerald-400 text-black font-semibold shadow-md shadow-emerald-400/20"
                      : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                  }`}
                >
                  &ldquo;{sc.question}&rdquo;
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Chat Thread */}
        <div className="space-y-4 pt-1">
          {/* User Bubble */}
          <div className="flex justify-end">
            <div className="max-w-[90%] sm:max-w-[75%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0a2505] border border-emerald-500/30 text-white shadow-md">
              <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-emerald-400 font-mono mb-1">
                <span>Input Suara Terdeteksi</span>
                <span>/</span>
                <span>09:41</span>
              </div>
              <p className="text-xs sm:text-sm font-medium break-words">{activeScenario.question}</p>
            </div>
          </div>

          {/* AI Response Card */}
          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 flex-shrink-0 flex items-center justify-center text-xs font-bold font-display text-emerald-300">
              D
            </div>

            <div className="flex-1 rounded-2xl rounded-tl-sm p-3.5 sm:p-5 bg-white/5 border border-white/10 space-y-3 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-emerald-400 font-display truncate">
                  Dompety Intelligence
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 flex-shrink-0">Terstruktur Otomatis</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal break-words">
                {activeScenario.answer}
              </p>

              {/* Data Metric Chip */}
              {activeScenario.statBadge && (
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-[11px] sm:text-xs font-mono max-w-full truncate">
                  <span className="text-emerald-300 flex-shrink-0">{activeScenario.statBadge.label}:</span>
                  <span className="font-bold text-white truncate">{activeScenario.statBadge.value}</span>
                </div>
              )}

              {/* Visual Breakdown Bars */}
              {activeScenario.breakdown && (
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Alokasi Terkait
                  </span>
                  {activeScenario.breakdown.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[11px] sm:text-xs font-mono text-zinc-300">
                        <span className="truncate pr-2">{item.label}</span>
                        <span className="font-bold text-white flex-shrink-0">{item.amount}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                        <div
                          className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
