import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { GeistSans, GeistMono } from "geist/font";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "QCM Convertisseur - IPAG de Paris",
  description: "QCM Convertisseur",
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={GeistSans.className}>
        <main className='flex flex-col min-h-screen'>
          <div className='flex-grow bg-white pt-10 sm:pt-16'>
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
