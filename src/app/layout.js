import { Inter, Caveat, Literata } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const caveatFont = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const literataFont = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

export const metadata = {
  title: "Convertisseur de fichier Excel à Moodle XML",
  description: "Créé par Hooman",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${caveatFont.variable} ${literataFont.variable}  ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
