import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AIChat } from "@/components/ai-chat";
import { VercelToolbar } from "@vercel/toolbar/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Polaris | Institutional-Grade Financial Solutions",
  description: "Polaris is a distinguished Variable Capital Company (VCC) headquartered in Mauritius, delivering institutional-grade financial and capital advisory solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-full flex flex-col bg-slate-50 text-slate-900`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <AIChat />
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
