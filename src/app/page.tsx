import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { PlayStoreBadge, GooglePlayIcon } from "@/components/PlayStoreBadge";
import { PhoneMockup } from "@/components/PhoneMockup";
import {
  MascotHeroWelcoming,
  MascotAiAssistant,
  MascotMultiAccount,
  MascotAnalytics,
  MascotSecurity,
  MascotCelebration,
} from "@/components/Mascots";
import { InteractiveChatDemo } from "@/components/InteractiveChatDemo";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf8fb] text-[#051125] selection:bg-[#4c7e47]/20 selection:text-[#0a2505]">
      {/* Detached Floating Island Navigation (Section 3.1) */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* HERO SECTION (Section 3.2 - Asymmetric Split Hero)        */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden min-h-[100dvh] pt-28 pb-20 sm:pt-36 sm:pb-32 bg-gradient-to-b from-[#050c05] via-[#091809] to-[#040e04] text-white flex items-center">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                {/* Eyebrow Pill 1 */}
                {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Google Play: com.bangkit16s.dompety</span>
                </div> */}

                <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight leading-[1.08] text-white">
                  Catat Keuangan Cukup Bicara,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-200">
                    Biarkan AI yang Bekerja.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Dompety adalah asisten finansial cerdas yang mengubah ucapan dan ketikan santaimu menjadi pencatatan keuangan instan, rapi, dan otomatis terstruktur.
                </p>

                {/* Primary CTA with Button-in-Button Architecture */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <PlayStoreBadge variant="primary" />
                </div>

                {/* Micro-Copy */}
                <p className="text-xs font-mono text-zinc-400 tracking-wide">
                  Gratis selamanya / Tanpa kartu kredit / Data terenkripsi RLS
                </p>
              </div>

              {/* Right Column: Machined Phone Mockup & Mascot Slot 1 */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                {/* SLOT MASCOT 1: DOMPETY_HERO_WELCOMING */}
                <div className="absolute -top-10 -right-2 sm:-top-14 sm:-right-6 z-30 pointer-events-none">
                  <MascotHeroWelcoming className="w-24 h-24 sm:w-36 sm:h-36" size={150} priority />
                </div>

                {/* Precision Phone Mockup */}
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TRUST STRIP (Section 3.3)                                 */}
        {/* ========================================================= */}
        <section className="bg-white border-y border-zinc-200/80 py-8 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/60 md:bg-transparent md:border-0 md:border-r md:border-zinc-200 md:rounded-none md:p-0">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#051125]">
                  4.8 / 5.0
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-zinc-500 mt-1">
                  Kepuasan Pengguna Play Store
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/60 md:bg-transparent md:border-0 md:border-r md:border-zinc-200 md:rounded-none md:p-0">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#0a2505]">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-zinc-500 mt-1">
                  Data Terisolasi (Supabase RLS)
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/60 md:bg-transparent md:border-0 md:border-r md:border-zinc-200 md:rounded-none md:p-0">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-600">
                  Native
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-zinc-500 mt-1">
                  Speech Recognition Cepat
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/60 md:bg-transparent md:border-0 md:rounded-none md:p-0">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#051125]">
                  0 ms
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-zinc-500 mt-1">
                  Zero Lag Reactive State
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ASYMMETRICAL BENTO GRID: FEATURE SHOWCASES (Section 3.4)  */}
        {/* ========================================================= */}
        <section id="fitur-ai" className="py-16 sm:py-24 lg:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#051125] leading-tight">
              Kecerdasan Buatan yang Bekerja Nyata untuk Dompetmu
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 mt-3 font-normal">
              Bukan sekadar form input biasa. Dompety menggabungkan pengenalan suara instan, multi-akun, dan kalkulasi otomatis.
            </p>
          </div>

          {/* Bento Grid Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Bento Card 1 (Col 8): Speech Engine + Mascot Slot 2 */}
            <div className="lg:col-span-8 rounded-3xl sm:rounded-[2.5rem] p-1.5 ring-1 ring-black/10 bg-zinc-100/80 shadow-sm flex flex-col justify-between">
              <div className="rounded-[calc(1.5rem-0.125rem)] sm:rounded-[calc(2.5rem-0.375rem)] bg-white p-5 sm:p-8 md:p-10 border border-zinc-200/60 h-full flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                  <div className="max-w-md space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold">
                      Expo Speech Engine
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#051125]">
                      Bicara Santai, Transaksi Langsung Tercatat
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                      Cukup tekan mikrofon dan ucapkan kalimat seperti &ldquo;Beli bensin 50 ribu pakai ShopeePay&rdquo;. AI Dompety otomatis mendeteksi nominal, kategori pengeluaran, serta akun pembayaranmu dalam sekejap.
                    </p>
                  </div>

                  {/* SLOT MASCOT 2: DOMPETY_AI_ASSISTANT */}
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <MascotAiAssistant className="w-24 h-24 sm:w-32 sm:h-32" size={130} />
                  </div>
                </div>

                {/* Simulated Audio Stream Visualizer Bar */}
                <div className="mt-8 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0a2505] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      AI
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">
                        Contoh Kalimat Alami
                      </div>
                      <div className="text-xs font-semibold text-zinc-800">
                        &ldquo;Beli kopi susu 18 ribu tunai&rdquo;
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 px-3 py-1 rounded-full bg-emerald-100">
                      Otomatis: Pengeluaran / Kuliner / Kas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2 (Col 4): Multi-Rekening + Mascot Slot 3 */}
            <div id="multi-akun" className="lg:col-span-4 rounded-3xl sm:rounded-[2.5rem] p-1.5 ring-1 ring-black/10 bg-zinc-100/80 shadow-sm flex flex-col justify-between">
              <div className="rounded-[calc(1.5rem-0.125rem)] sm:rounded-[calc(2.5rem-0.375rem)] bg-white p-5 sm:p-8 border border-zinc-200/60 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                      Unified Balances
                    </span>
                    <MascotMultiAccount className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0" size={110} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#051125]">
                    Semua Dompet &amp; Rekening dalam Satu Kendali
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    Kelola saldo BCA, Mandiri, GoPay, OVO, Dana hingga kas tunai fisik. Catat perpindahan saldo antar rekening tanpa input ganda.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">Transfer Antar Akun</span>
                    <span className="font-bold text-emerald-700">Auto-Balancing</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">Koreksi Saldo Riil</span>
                    <span className="font-bold text-zinc-800">Tersedia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3 (Col 7): Interactive Chat Console */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <InteractiveChatDemo />
            </div>

            {/* Bento Card 4 (Col 5): Analitik + Mascot Slot 4 */}
            <div id="analitik" className="lg:col-span-5 rounded-3xl sm:rounded-[2.5rem] p-1.5 ring-1 ring-black/10 bg-zinc-100/80 shadow-sm flex flex-col justify-between">
              <div className="rounded-[calc(1.5rem-0.125rem)] sm:rounded-[calc(2.5rem-0.375rem)] bg-white p-5 sm:p-8 border border-zinc-200/60 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                      Visual Cash Flow
                    </span>
                    <MascotAnalytics className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0" size={110} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#051125]">
                    Pahami Arus Kas Secara Visual Tanpa Pusing
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    Lihat ringkasan pemasukan vs pengeluaran bulananmu dalam grafik batang dan diagram kategori yang bersih.
                  </p>
                </div>

                {/* Progress Breakdown */}
                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                      <span>Kuliner &amp; Kebutuhan</span>
                      <span className="font-bold">42%</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-600 h-full rounded-full w-[42%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                      <span>Transportasi &amp; Utilitas</span>
                      <span className="font-bold">28%</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full w-[28%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SKEMA HARGA: FREE VS PRO VIP (Section 3.5)                */}
        {/* ========================================================= */}
        <PricingSection />

        {/* ========================================================= */}
        {/* SECURITY & GOOGLE PLAY COMPLIANCE (Section 3.6)           */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 lg:py-32 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-xs font-mono font-medium text-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Google Play Compliance &amp; Security</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#051125] leading-tight">
                  Keamanan Finansial Tanpa Kompromi
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
                  Data finansial Anda sepenuhnya privat. Kami mematuhi standar enkripsi modern dan regulasi perlindungan data Google Play Store.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-bold font-mono text-[#0a2505] uppercase tracking-wider mb-1">
                      Privasi Penuh
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Data Anda tidak pernah dijual kepada pihak ketiga, broker data, atau platform pinjaman online.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-bold font-mono text-[#0a2505] uppercase tracking-wider mb-1">
                      Supabase PostgreSQL RLS
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Penerapan Row Level Security memastikan catatan Anda hanya dapat diakses oleh akun Anda sendiri.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-bold font-mono text-[#0a2505] uppercase tracking-wider mb-1">
                      Google OAuth 2.0
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Autentikasi terenkripsi resmi tanpa perlu menyimpan kata sandi rentan di database kami.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-bold font-mono text-[#0a2505] uppercase tracking-wider mb-1">
                      Hak Hapus Akun Mandiri
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Hapus akun dan riwayat transaksi secara permanen kapan saja langsung melalui menu Setelan di aplikasi.
                    </p>
                  </div>
                </div>
              </div>

              {/* SLOT MASCOT 6: DOMPETY_SECURITY */}
              <div className="lg:col-span-4 flex justify-center">
                <MascotSecurity className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48" size={190} />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TANYA JAWAB (FAQ) (Section 3.7)                           */}
        {/* ========================================================= */}
        <section id="faq" className="py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#051125] mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              Penjelasan langsung mengenai cara kerja, privasi, dan paket langganan Dompety.
            </p>
          </div>

          <FaqSection />
        </section>

        {/* ========================================================= */}
        {/* PENUTUP & CTA FINAL (Section 3.8)                         */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 bg-gradient-to-b from-[#050c05] via-[#091809] to-[#040e04] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 text-center lg:text-left space-y-6">
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                  Mulai Bangun Kebiasaan Finansial yang Tenang Hari Ini
                </h2>
                <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Unduh Dompety sekarang di Google Play Store dan rasakan kemudahan mengelola keuangan dengan bantuan AI.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <PlayStoreBadge variant="primary" />
                </div>
              </div>

              {/* SLOT MASCOT 7: DOMPETY_CELEBRATION */}
              <div className="lg:col-span-4 flex justify-center">
                <MascotCelebration className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48" size={190} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* FOOTER (Section 3.9)                                      */}
      {/* ========================================================= */}
      <footer className="bg-[#030803] text-zinc-400 text-xs border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
            {/* Kolom 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden ">
                  <Image
                    src="/dompety-icon.png"
                    alt="Dompety Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-base font-bold font-display text-white">
                  Dompety
                </span>
              </div>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Asisten finansial cerdas dengan AI. Catat transaksi cukup bicara, pantau multi-rekening, dan pahami keuangan dengan tenang.
              </p>
              <div className="text-zinc-600 font-mono text-[11px]">
                &copy; 2026 Dompety by bangkit16s. All rights reserved.
              </div>
            </div>

            {/* Kolom 2 */}
            <div className="space-y-2">
              <div className="font-mono uppercase tracking-wider text-zinc-300 text-[10px] font-semibold">
                Legal &amp; Compliance
              </div>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://bangkit16s.github.io/dompety-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Kebijakan Privasi (Privacy Policy)
                  </a>
                </li>
                <li>
                  <a
                    href="https://bangkit16s.github.io/dompety-privacy-policy/terms.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Ketentuan Layanan (Terms of Service)
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">
                    Penghapusan Data: Tersedia di Setelan Aplikasi
                  </span>
                </li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div className="space-y-2">
              <div className="font-mono uppercase tracking-wider text-zinc-300 text-[10px] font-semibold">
                Teknis &amp; Distribusi
              </div>
              <ul className="space-y-1 text-zinc-400 font-mono text-[11px]">
                <li>Versi: 1.0.0</li>
                <li>Package: com.bangkit16s.dompety</li>
                <li>Platform: Android 7.0+ (Google Play Store)</li>
                <li>
                  Pengembang:{" "}
                  <a
                    href="https://github.com/bangkit16s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    GitHub @bangkit16s
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-zinc-500 font-mono text-[11px] gap-3">
            <p>Quiet confidence for your money.</p>
            <div className="flex items-center gap-2">
              <GooglePlayIcon className="w-3.5 h-3.5 opacity-60" />
              <span>Verified Google Play Store Application</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
