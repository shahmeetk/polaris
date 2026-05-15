import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-8">
          <Link href="/" className="inline-block bg-white p-3 rounded-2xl">
            <Image 
              src="/polaris_logo.jpeg" 
              alt="Polaris Logo" 
              width={260} 
              height={80} 
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            A distinguished Variable Capital Company (VCC) headquartered in Mauritius, delivering institutional-grade financial and capital advisory solutions to global allocators.
          </p>
          <div className="flex space-x-4">
             {/* Social placeholders could go here if needed */}
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-8">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Sitemap</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center group">About <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            <li><Link href="/solutions" className="hover:text-blue-400 transition-colors flex items-center group">Solutions <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            <li><Link href="/investment-approach" className="hover:text-blue-400 transition-colors flex items-center group">Approach <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            <li><Link href="/governance" className="hover:text-blue-400 transition-colors flex items-center group">Governance <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            <li><Link href="/investor-relations" className="hover:text-blue-400 transition-colors flex items-center group">IR <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-8">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Coordinates</h3>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
              <span>Office 708, 7th Floor, Nexsky Building<br />Ebene, Mauritius</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-blue-500 shrink-0" />
              <a href="mailto:polarisvcc@gmail.com" className="hover:text-white transition-colors">polarisvcc@gmail.com</a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-blue-500 shrink-0" />
              <span>+230 5421 1329</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-8">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Legal</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/legal" className="hover:text-blue-400 transition-colors">Legal Disclaimer</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 mt-24 pt-12 border-t border-white/5">
        <div className="max-w-5xl">
          <h4 className="text-white text-xs font-bold mb-4 uppercase tracking-widest">Important Institutional Disclosure</h4>
          <p className="text-[10px] md:text-xs leading-relaxed text-slate-600 font-light">
            This website is for informational purposes only and does not constitute an offer, solicitation, or recommendation to invest. All investments carry risk, and past performance is not indicative of future results. Detailed strategy information is available exclusively to qualified and professional investors upon completion of necessary compliance, KYC/AML, and onboarding procedures. Polaris is registered as a Variable Capital Company in Mauritius and operates subject to applicable regulatory and legal frameworks.
          </p>
          <div className="mt-8 text-[10px] text-slate-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Polaris Variable Capital Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
