import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building, Shield, ChevronRight, Activity, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0B132B] text-white overflow-hidden">
        {/* Abstract Architectural/Financial Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Image 
            src="/trading_hero_bg.png" 
            alt="Institutional Trading Background" 
            fill 
            className="object-cover object-center mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm px-3 py-1 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">Mauritius Variable Capital Company</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-medium leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
              Architecting Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">Capital Solutions.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12 font-light">
              Polaris delivers institutional-grade investment management, capital advisory, and strategic fund architecture for the world's most sophisticated allocators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-[#0B132B] hover:bg-slate-100 hover:scale-[1.02] transition-all rounded-sm">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-slate-600 text-slate-800 hover:bg-slate-800 hover:text-white rounded-sm group">
                  Explore Capabilities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Credentials */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col md:items-center md:text-center pt-8 md:pt-0">
              <Building className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">Institutional Framework</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Structured as a Mauritius Variable Capital Company, providing robust governance and regulatory alignment.</p>
            </div>
            <div className="flex flex-col md:items-center md:text-center pt-8 md:pt-0 px-0 md:px-8">
              <BarChart3 className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">Risk-Adjusted Execution</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Deploying sophisticated, arbitrage-oriented strategies designed for absolute return and capital preservation.</p>
            </div>
            <div className="flex flex-col md:items-center md:text-center pt-8 md:pt-0 px-0 md:px-8">
              <Shield className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">Fiduciary Excellence</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Dedicated to the highest standards of transparency, compliance, and rigorous portfolio oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Corporate Overview</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-medium text-slate-900 mb-6 leading-snug">
                A Unified Platform for Global Wealth Architecture.
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Polaris partners with high-net-worth individuals, family offices, and institutional distributors to engineer sophisticated financial solutions. By integrating fund management, tactical market strategies, and capital advisory under a singular, compliant VCC structure, we streamline the complexities of global capital deployment.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors group">
                  Read our Corporate Profile <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Investment Solutions", desc: "Bespoke capital allocation." },
                  { title: "Fund Management", desc: "Rigorous portfolio oversight." },
                  { title: "Capital Advisory", desc: "Strategic structural guidance." },
                  { title: "Institutional Distribution", desc: "Global partnership networks." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                    <h4 className="font-heading font-semibold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Explore <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B132B] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">Initiate a Dialogue</h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Polaris engages exclusively with qualified professional investors, institutional allocators, and strategic partners. Contact our relationship management team to explore alignment.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-base bg-white text-[#0B132B] hover:bg-slate-100 transition-all rounded-sm">
              Contact Our Office
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
