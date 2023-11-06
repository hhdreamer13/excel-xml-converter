import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GeistSans } from "geist/font";

export const metadata = {
  title: "QCM Convertisseur - IPAG de Paris",
  description:
    "Convertissez vos fichiers Excel en format QCM XML adapté pour Agorassas.",
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
