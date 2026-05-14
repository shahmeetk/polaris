import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/polaris_logo.jpeg" 
            alt="Polaris Logo" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium text-slate-700">
          <Link href="/about" className="hover:text-primary transition-colors">About Polaris</Link>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <Link href="/investment-approach" className="hover:text-primary transition-colors">Approach</Link>
          <Link href="/governance" className="hover:text-primary transition-colors">Governance</Link>
          <Link href="/investor-relations" className="hover:text-primary transition-colors">Investor Relations</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button variant="outline" className="hidden lg:inline-flex border-slate-300 text-slate-800 hover:bg-slate-50 transition-colors">
              Schedule a Call
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm transition-all">
              Client Portal
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
