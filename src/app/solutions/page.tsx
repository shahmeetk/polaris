import { LineChart, Briefcase, Landmark, ChevronRight, CheckCircle2, ArrowUpRight, BarChart4, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Institutional Solutions | Polaris",
  description: "Explore Polaris's core capabilities spanning Investment Solutions, Fund Management, and Capital Advisory.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/global_wealth_map.jpg" 
            alt="Global Wealth Network" 
            fill 
            className="object-cover object-center opacity-30 scale-110 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-5xl md:text-8xl font-heading font-medium tracking-tight mb-8 leading-[0.95]">
                Global <br />
                <span className="text-blue-400">Capabilities.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                Comprehensive financial architecture encompassing proprietary strategies, fund administration, and strategic advisory.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            
            {/* Solution 1: Investment Solutions */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="group relative bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700">
                <div className="flex flex-col lg:flex-row">
                  <div className="p-10 lg:p-20 lg:w-3/5">
                    <div className="mb-10 bg-white p-5 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <BarChart4 className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl font-heading font-medium text-slate-950 mb-8">Investment Solutions</h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                      Polaris engineers proprietary, quantitative-driven strategies focused on market neutral and absolute return mandates. Our approach relies on rigorous statistical arbitrage, systematic execution, and dynamic hedging.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {[
                        "Absolute Return Strategies",
                        "Systematic & Quantitative Trading",
                        "Algorithmic Execution Capabilities",
                        "Tail Risk Hedging"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/investment-approach">
                      <Button size="lg" className="h-14 px-10 bg-blue-600 text-white rounded-xl hover:bg-blue-500 group">
                        View Investment Approach
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:w-2/5 relative bg-slate-900 min-h-[400px]">
                    <div className="absolute inset-0 bg-blue-600/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="w-full h-full bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
                        <div className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold mb-4">Live Execution Data</div>
                        <div className="space-y-4">
                          {[1, 2, 3].map((_, i) => (
                            <div key={i} className="h-4 bg-blue-500/20 rounded-full w-full relative overflow-hidden">
                              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse" style={{ width: `${60 + (i * 10)}%` }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Solution 2: Fund Management */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group relative bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="p-10 lg:p-20 lg:w-3/5">
                    <div className="mb-10 bg-white p-5 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Landmark className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl font-heading font-medium text-slate-950 mb-8">Fund Management</h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                      Leveraging the Mauritius VCC framework, we provide turnkey fund management solutions for family offices and institutional pools of capital.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {[
                        "VCC Sub-Fund Structuring",
                        "Independent NAV Oversight",
                        "Regulatory Reporting",
                        "Institutional Custody"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-2/5 relative bg-slate-900 min-h-[400px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Network className="h-32 w-32 text-blue-500/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Solution 3: Capital Advisory */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="group relative bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700">
                <div className="flex flex-col lg:flex-row">
                  <div className="p-10 lg:p-20 lg:w-3/5">
                    <div className="mb-10 bg-white p-5 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <ShieldCheck className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl font-heading font-medium text-slate-950 mb-8">Capital Advisory</h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                      Our advisory practice assists ultra-high-net-worth families and institutions in optimizing their corporate and financial structures.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {[
                        "Wealth Structuring",
                        "Asset Segregation",
                        "Succession Vehicles",
                        "Governance Architecture"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="h-14 px-10 border-slate-200 text-slate-900 rounded-xl hover:bg-slate-50">
                        Initiate Advisory Protocol
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:w-2/5 bg-blue-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_10%,transparent_70%)] opacity-20"></div>
                    <Briefcase className="h-32 w-32 text-white/40" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
