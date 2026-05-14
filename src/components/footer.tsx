import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-300 py-16 border-t border-[#1C2541]">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="space-y-6">
          <Link href="/" className="inline-block bg-white p-2 rounded-sm">
            <Image 
              src="/polaris_logo.jpeg" 
              alt="Polaris Logo" 
              width={260} 
              height={80} 
              className="h-16 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed pr-4">
            A distinguished Variable Capital Company (VCC) headquartered in Mauritius, delivering institutional-grade financial and capital advisory solutions to global allocators.
          </p>
        </div>
        
        <div>
          <h3 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Polaris</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Institutional Solutions</Link></li>
            <li><Link href="/investment-approach" className="hover:text-white transition-colors">Investment Approach</Link></li>
            <li><Link href="/governance" className="hover:text-white transition-colors">Governance & Compliance</Link></li>
            <li><Link href="/investor-relations" className="hover:text-white transition-colors">Investor Relations</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white mb-6">Corporate Office</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Office 708, 7th Floor, Nexsky Building</li>
            <li>Ebene, Quatre Bornes, 72201</li>
            <li>Republic of Mauritius</li>
            <li className="pt-2">
              <a href="mailto:polarisvcc@gmail.com" className="hover:text-white transition-colors">polarisvcc@gmail.com</a>
            </li>
            <li>+230 5421 1329</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white mb-6">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/legal" className="hover:text-white transition-colors">Legal Disclaimer</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-[#1C2541] text-xs text-slate-500">
        <p className="mb-4 leading-relaxed max-w-5xl">
          <strong>Important Disclosure:</strong> This website is for informational purposes only and does not constitute an offer, solicitation, or recommendation to invest in any security, strategy, or fund. All investments carry risk, and past performance is not indicative of future results. Detailed strategy information is available exclusively to qualified and professional investors upon completion of necessary compliance, KYC/AML, and onboarding procedures. Polaris is registered as a Variable Capital Company in Mauritius and operates subject to applicable regulatory and legal frameworks. The content herein has not been reviewed or approved by any regulatory authority.
        </p>
        <p>&copy; {new Date().getFullYear()} Polaris Variable Capital Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
