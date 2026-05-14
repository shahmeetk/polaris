import { LineChart, Briefcase, Landmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Institutional Solutions | Polaris",
  description: "Explore Polaris's core capabilities spanning Investment Solutions, Fund Management, and Capital Advisory.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B132B] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Image 
            src="/global_wealth_map.png" 
            alt="Global Wealth Network" 
            fill 
            className="object-cover object-center mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6 drop-shadow-md">Institutional Solutions</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              Comprehensive financial architecture encompassing proprietary strategies, fund administration, and strategic advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Details */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          {/* Solution 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-start py-16 border-b border-slate-100">
            <div className="w-full md:w-1/3">
              <div className="bg-slate-50 w-16 h-16 flex items-center justify-center rounded-sm mb-6 border border-slate-100">
                <LineChart className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-heading font-medium text-slate-900 mb-4">Investment Solutions</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Polaris engineers proprietary, quantitative-driven strategies focused on market neutral and absolute return mandates. Our approach relies on rigorous statistical arbitrage, systematic execution, and dynamic hedging to generate alpha independent of broad market directionality.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Absolute Return Strategies</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Systematic & Quantitative Trading</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Algorithmic Execution Capabilities</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Tail Risk Hedging</li>
              </ul>
              <Link href="/investment-approach">
                <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-50">View Investment Approach</Button>
              </Link>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="flex flex-col md:flex-row gap-12 items-start py-16 border-b border-slate-100">
            <div className="w-full md:w-1/3">
              <div className="bg-slate-50 w-16 h-16 flex items-center justify-center rounded-sm mb-6 border border-slate-100">
                <Landmark className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-heading font-medium text-slate-900 mb-4">Fund Management</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Leveraging the Mauritius VCC framework, we provide turnkey fund management solutions for family offices and institutional pools of capital. We handle the complexities of portfolio structuring, compliance, and ongoing administration.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> VCC Sub-Fund Structuring</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Independent NAV Calculation Oversight</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Regulatory Reporting & Compliance</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Institutional Custody Integration</li>
              </ul>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-start py-16">
            <div className="w-full md:w-1/3">
              <div className="bg-slate-50 w-16 h-16 flex items-center justify-center rounded-sm mb-6 border border-slate-100">
                <Briefcase className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-heading font-medium text-slate-900 mb-4">Capital Advisory</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our advisory practice assists ultra-high-net-worth families and institutions in optimizing their corporate and financial structures. We provide strategic counsel on jurisdiction selection, asset protection, and succession planning vehicles.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Cross-Border Wealth Structuring</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Asset Segregation Strategies</li>
                <li className="flex items-start"><span className="text-primary mr-3 font-bold">✓</span> Family Office Setup Advisory</li>
              </ul>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white">Request Consultation</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
