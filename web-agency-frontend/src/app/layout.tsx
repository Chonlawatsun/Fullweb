import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Mitr } from 'next/font/google'
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SetupProviders } from '@/components/SetupProviders';

const mitr = Mitr({
  subsets: ['thai'],
  weight: ['200', '300', '400', '500', '600', '700'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Website Full Web | Home",
  description: "เว็บไซต์บริการพัฒนาเว็บไซต์ แอป และระบบต่าง ๆ",
  openGraph: {
    title: "Website Full Web",
    description: "เว็บไซต์บริการพัฒนาเว็บไซต์ แอป และระบบต่าง ๆ",
    url: "https://mysite.com",
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${mitr.className} antialiased`}>
        <SetupProviders />  {/* <<< ต้องใส่ตรงนี้ */}
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}


