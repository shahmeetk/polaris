"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm" 
        : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image 
            src="/polaris_logo.jpeg" 
            alt="Polaris Logo" 
            width={260} 
            height={80} 
            className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest transition-colors">
          {[
            ["About", "/about"],
            ["Solutions", "/solutions"],
            ["Approach", "/investment-approach"],
            ["Governance", "/governance"],
            ["IR", "/investor-relations"]
          ].map(([label, href]) => (
            <Link 
              key={href} 
              href={href} 
              className={cn(
                "hover:text-blue-500 transition-colors",
                scrolled ? "text-slate-600" : "text-white/80"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button 
              variant="outline" 
              className={cn(
                "hidden lg:inline-flex h-12 px-6 rounded-xl transition-all border-transparent",
                scrolled 
                  ? "border-slate-200 text-slate-800 hover:bg-slate-50" 
                  : "bg-white/10 text-white hover:bg-white/20 border-white/20"
              )}
            >
              Schedule a Call
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/20 transition-all font-semibold">
              Client Portal
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
