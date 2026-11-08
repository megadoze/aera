import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight, Montserrat, Roboto_Condensed } from "next/font/google";

export const metadata: Metadata = {
  title: "AERA Capsule Mars",
  description: "AERA Capsule Mars",
};

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${interTight.className} ${montserrat.variable} ${robotoCondensed.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
