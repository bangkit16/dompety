"use client";

import React, { useState } from "react";
import { MascotProCrown } from "./Mascots";
import { GooglePlayIcon } from "./PlayStoreBadge";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const comparisonRows = [
    {
      feature: "Pencatatan Manual Transaksi",
      free: "Unlimited",
      pro: "Unlimited",
    },
    {
      feature: "Multi-Rekening, E-Wallet & Kas",
      free: "Didukung",
      pro: "Didukung",
    },
    {
      feature: "Kueri & Input Suara AI",
      free: "Kuota Harian (Reset tiap hari)",
      pro: "Prioritas & Ekstra Kuota",
    },
    {
      feature: "Opsi Bonus Kuota AI",
      free: "Tonton Iklan Rewarded",
      pro: "Bebas Kuota Tanpa Iklan",
    },
    {
      feature: "Iklan Banner Aplikasi",
      free: "Ada iklan ringan",
      pro: "100% Bebas Iklan",
    },
    {
      feature: "Backup Cloud Supabase",
      free: "Tersedia",
      pro: "Prioritas Dukungan Cloud",
    },
  ];

  return (
    <section id="harga" className="py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#051125] mb-4">
          Transparan, Tanpa Biaya Tersembunyi
        </h2>
        <p className="text-base sm:text-lg text-[#71717a] font-normal leading-relaxed">
          Gunakan gratis selamanya untuk pencatatan mandiri. Upgrade ke Pro VIP kapan saja untuk performa AI prioritas tanpa jeda iklan.
        </p>

        {/* Fluid Pill Billing Switch */}
        <div className="mt-8 inline-flex items-center p-1 rounded-full ring-1 ring-black/10 bg-zinc-100">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-white text-[#0a2505] shadow-sm"
                : "text-zinc-600 hover:text-black"
            }`}
          >
            Bulanan
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
              billingCycle === "yearly"
                ? "bg-[#0a2505] text-white shadow-sm"
                : "text-zinc-600 hover:text-black"
            }`}
          >
            <span>Tahunan</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-400 text-amber-950">
              Hemat 28%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid (Double-Bezel Architecture) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16 sm:mb-20">
        {/* Tier 1: Free Card */}
        <div className="rounded-3xl sm:rounded-[2.5rem] p-1.5 ring-1 ring-black/10 bg-zinc-100/80 shadow-sm flex flex-col justify-between">
          <div className="rounded-[calc(1.5rem-0.125rem)] sm:rounded-[calc(2.5rem-0.375rem)] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full border border-zinc-200/60">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                    Tier Dasar
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#051125] mt-1">
                    Dompety Free
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Solusi esensial untuk melacak dompet dan rekening harian.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-black font-display text-[#0a2505]">
                  Rp 0
                </span>
                <span className="text-zinc-500 text-xs font-mono ml-2">/ gratis selamanya</span>
              </div>

              <ul className="space-y-3.5 text-xs text-zinc-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Pencatatan manual transaksi unlimited</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Kelola multi-rekening &amp; dompet digital</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Kuota harian input suara &amp; kueri AI</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Opsi tambah kuota harian via iklan rewarded</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Sinkronisasi Google Cloud Supabase</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-100">
              <a
                href="https://play.google.com/store/apps/details?id=com.bangkit16s.dompety"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 px-6 rounded-full font-bold text-xs bg-zinc-100 hover:bg-zinc-200 text-[#051125] transition-colors"
              >
                Mulai Gratis di Play Store
              </a>
            </div>
          </div>
        </div>

        {/* Tier 2: Pro VIP Card */}
        <div className="rounded-3xl sm:rounded-[2.5rem] p-1.5 ring-1 ring-emerald-500/30 bg-gradient-to-br from-emerald-500/20 via-black/40 to-black/80 shadow-2xl flex flex-col justify-between">
          <div className="rounded-[calc(1.5rem-0.125rem)] sm:rounded-[calc(2.5rem-0.375rem)] bg-[#071307] p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full border border-emerald-500/30 text-white relative overflow-hidden">
            {/* Luminous Ambient Light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Mascot Pro Crown Seal Placement */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none opacity-80 sm:opacity-100">
              <MascotProCrown className="w-16 h-16 sm:w-28 sm:h-28" size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400 text-amber-950">
                  Prestige VIP
                </span>
                {billingCycle === "yearly" && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Hemat 28%
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Dompety Pro VIP
              </h3>
              <p className="text-xs text-zinc-300 mt-1 max-w-xs font-normal">
                Kecerdasan AI prioritas tinggi tanpa batas kuota dan tanpa iklan.
              </p>

              <div className="my-8">
                {billingCycle === "yearly" ? (
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black font-display text-white">
                        Rp 129.000
                      </span>
                      <span className="text-zinc-400 text-xs font-mono">/ tahun</span>
                    </div>
                    <p className="text-[11px] font-mono text-amber-300 mt-1">
                      Setara Rp 10.750 per bulan
                    </p>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-display text-white">
                      Rp 14.900
                    </span>
                    <span className="text-zinc-400 text-xs font-mono">/ bulan</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3.5 text-xs text-zinc-200 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>100% Bebas iklan banner &amp; rewarded</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Prioritas respon &amp; ekstra kuota suara AI</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Tanya jawab finansial natural language unlimited</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Dukungan cloud prioritas &amp; backup instan</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center flex-shrink-0 text-[11px] font-bold">
                    ✓
                  </div>
                  <span>Lencana profil eksklusif Pro VIP</span>
                </li>
              </ul>
            </div>

            {/* Button-in-Button Architecture */}
            <div className="relative z-10 mt-10 pt-6 border-t border-white/10 space-y-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.bangkit16s.dompety"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-amber-950 text-xs font-bold flex items-center justify-between shadow-lg active:scale-[0.98] transition-all duration-300"
              >
                <span>Berlangganan di Google Play</span>
                <div className="w-8 h-8 rounded-full bg-amber-950/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                  <GooglePlayIcon className="w-4 h-4" />
                </div>
              </a>
              <p className="text-center text-[10px] text-zinc-400 font-mono">
                Kelola atau batalkan kapan saja melalui Google Play Subscriptions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Matrix Comparison Table */}
      <div className="rounded-2xl sm:rounded-[2rem] p-1.5 ring-1 ring-black/10 bg-zinc-100/80 shadow-sm overflow-hidden">
        <div className="rounded-[calc(1rem-0.125rem)] sm:rounded-[calc(2rem-0.375rem)] bg-white overflow-hidden border border-zinc-200/60">
          <div className="px-5 sm:px-6 py-4 bg-zinc-50 border-b border-zinc-200">
            <h3 className="font-display font-bold text-sm text-[#051125]">
              Matriks Perbandingan Fitur
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-zinc-100 text-[10px] uppercase tracking-wider text-zinc-500">
                  <th className="py-3 px-4 sm:px-6 font-semibold">Kapabilitas</th>
                  <th className="py-3 px-4 sm:px-6 font-semibold w-1/4">Dompety Free</th>
                  <th className="py-3 px-4 sm:px-6 font-semibold w-1/4 text-emerald-800 bg-emerald-50/50">
                    Dompety Pro VIP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-sans">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-zinc-800">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-zinc-500 font-mono">
                      {row.free}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-800 bg-emerald-50/30 font-mono">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
