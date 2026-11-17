import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { MARK } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "SARUS Infrastructures — Future Ready", template: "SARUS — %s" },
  description:
    "SARUS Infrastructures Private Limited — highways and urban infrastructure, built for a sustainable future.",
  icons: { icon: MARK },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to main content</a>
        <IconSprite />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
        <Reveal />
      </body>
    </html>
  );
}
