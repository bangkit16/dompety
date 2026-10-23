"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Apakah Dompety memerlukan izin akses ke rekening bank saya?",
    answer:
      "Tidak sama sekali. Dompety tidak pernah meminta password, PIN, token, atau kredensial perbankan Anda. Pencatatan dilakukan mandiri atau melalui perintah suara pintar, sehingga privasi finansial Anda 100% aman dan terisolasi.",
  },
  {
    question: "Bagaimana cara kerja input suara AI?",
    answer:
      "Cukup tekan tombol mikrofon dan sebutkan transaksi Anda seperti berbicara normal, misalnya: 'Beli bensin 50 ribu pakai ShopeePay'. Teknologi speech recognition dan AI kami otomatis mengekstrak nominal, kategori, dan akun pembayaran tanpa perlu ketik manual.",
  },
  {
    question: "Apakah saya bisa menggunakan aplikasi secara gratis?",
    answer:
      "Ya. Seluruh fitur pencatatan manual dan fitur dasar AI gratis selamanya. Tersedia opsi tonton iklan rewarded untuk menambah kuota harian ekstra kapan saja.",
  },
  {
    question: "Bagaimana jika saya berganti perangkat smartphone?",
    answer:
      "Cukup login dengan akun Google yang sama. Seluruh riwayat transaksi dan data akun otomatis tersinkronisasi kembali secara aman melalui Supabase Cloud dengan Row Level Security.",
  },
  {
    question: "Di mana saya bisa membaca Kebijakan Privasi dan Ketentuan Layanan?",
    answer:
      "Tautan resmi dapat diakses publik pada footer halaman ini. Kami mematuhi seluruh standar keamanan data dan regulasi ketat Google Play Store.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-zinc-200">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-6 transition-all duration-200">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#051125] hover:text-[#0a2505] transition-colors"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold transition-all duration-300 ${
                  isOpen ? "bg-[#0a2505] text-white rotate-45" : "bg-zinc-100 text-zinc-600"
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="pt-3 pr-8 text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
