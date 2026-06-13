import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commit Coffee — Fuel for Builders",
  description:
    "Café de origen Huila diseñado para programadores, ingenieros, técnicos y creadores.",
  openGraph: {
    siteName: "Commit Coffee",
    type: "website",
    title: "Commit Coffee — Fuel for Builders",
    description:
      "Café de origen Huila diseñado para programadores, ingenieros, técnicos y creadores.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <SmoothScroll>
          <ScrollAnimations>
            <CustomCursor />
            {children}
          </ScrollAnimations>
        </SmoothScroll>
      </body>
    </html>
  );
}