import type { Metadata } from "next";
import { Cormorant_Garamond, Fira_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/cursor/Cursor";
import { Nav } from "@/components/nav/Nav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isabella Tedesco — Frontend Designer & HCI Researcher",
  description:
    "Frontend designer and HCI researcher working across product design, design systems, and AI/ML interfaces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${firaSans.variable} ${dmMono.variable}`}>
      <body>
        <SmoothScroll>
          <Cursor />
          <Nav />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
