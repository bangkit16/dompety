import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dompety - Catat Keuangan Cukup Bicara, Biarkan AI Bekerja",
  description:
    "Dompety adalah asisten finansial cerdas yang mengubah ucapan dan ketikan santaimu menjadi pencatatan keuangan instan, rapi, dan otomatis terstruktur. Unduh gratis di Google Play Store.",
  keywords: [
    "Dompety",
    "catat keuangan AI",
    "aplikasi keuangan android",
    "voice finance tracker",
    "manajemen rekening e-wallet",
    "pengatur anggaran otomatis",
  ],
  authors: [{ name: "bangkit16s" }],
  themeColor: "#0a2505",
  openGraph: {
    title: "Dompety - Quiet confidence for your money",
    description:
      "Catat Keuangan Cukup Bicara, Biarkan AI yang Bekerja. Multi-rekening, voice recognition, dan analitik cerdas.",
    url: "https://play.google.com/store/apps/details?id=com.bangkit16s.dompety",
    siteName: "Dompety",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbf8fb] text-[#051125] font-sans antialiased selection:bg-[#4c7e47]/20 selection:text-[#0a2505] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
