import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building, Shield, ChevronRight, Activity, Globe, Cpu, Zap, PieChart, TrendingUp, Users, Database } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/trading_hero_bg.jpg" 
            alt="Institutional Trading Background" 
            fill 
            className="object-cover object-center opacity-40 scale-105 animate-slow-zoom"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center space-x-3 border border-blue-500/30 bg-blue-500/5 backdrop-blur-md px-4 py-1.5 mb-10 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">Mauritius Variable Capital Company</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-heading font-medium leading-[0.95] tracking-tight mb-8">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Global Alpha.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-light">
                Polaris delivers institutional-grade quantitative strategies, capital advisory, and bespoke fund architecture for the world's most sophisticated allocators.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 text-base bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.02] transition-all rounded-xl shadow-xl shadow-blue-900/20">
                    Initiate Partnership
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-base border-slate-700 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 rounded-xl group transition-all">
                    Global Capabilities
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Floating Stats Sidebar - Desktop Only */}
        <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 z-20 space-y-6">
          {[
            { label: "Global Reach", val: "24/7", icon: Globe },
            { label: "Tech Stack", val: "Quantum", icon: Cpu },
            { label: "Compliance", val: "VCC", icon: Shield }
          ].map((stat, i) => (
            <ScrollReveal key={i} direction="left" delay={0.5 + (i * 0.1)}>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl w-48 hover:bg-white/10 transition-colors group">
                <stat.icon className="h-5 w-5 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-semibold text-white mb-1">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Quantitative Pillars Infographic */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Strategic Framework</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 mb-6">The Polaris Ecosystem</h3>
              <p className="text-lg text-slate-500 font-light">Integrating high-frequency execution with long-term capital preservation.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Precision Execution", desc: "Proprietary algorithmic routing ensuring zero-latency market entry.", color: "bg-blue-500" },
              { icon: Shield, title: "Fiduciary Trust", desc: "VCC structural compliance with top-tier audit oversight.", color: "bg-indigo-500" },
              { icon: PieChart, title: "Alpha Generation", desc: "Mathematically modeled alpha captures across global liquidity pools.", color: "bg-blue-600" },
              { icon: Database, title: "Data Architecture", desc: "Real-time analytics engine processing millions of market data points.", color: "bg-slate-800" }
            ].map((pillar, i) => (
              <ScrollReveal key={i} direction="up" delay={0.2 + (i * 0.1)}>
                <div className="group relative bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-default h-full">
                  <div className={`mb-8 w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-slate-900 mb-4">{pillar.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Connectivity Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/global_wealth_map.jpg" 
            alt="Global Market Connectivity" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="w-16 h-1 w-16 bg-blue-500 mb-8"></div>
                <h2 className="text-4xl md:text-5xl font-heading font-medium mb-8 leading-tight">
                  Borderless Capital. <br />
                  <span className="text-blue-400">Institutional Rigor.</span>
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-10">
                  Polaris operates at the intersection of global market access and local regulatory mastery. Our VCC structure allows for seamless capital aggregation and multi-asset deployment across emerging and developed frontiers.
                </p>
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-heading font-semibold text-white mb-2">100+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Global Markets</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-semibold text-white mb-2">24/7</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Execution Engine</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
                  
                  <h4 className="text-2xl font-heading font-medium mb-8 flex items-center">
                    <Activity className="mr-3 h-6 w-6 text-blue-400" />
                    Market Coverage
                  </h4>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Equities & Synthetics", pct: "95%" },
                      { label: "Digital Asset Arbitrage", pct: "88%" },
                      { label: "Fixed Income Structures", pct: "92%" },
                      { label: "Venture Allocations", pct: "84%" }
                    ].map((row, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-sm uppercase tracking-widest font-bold text-slate-400">
                          <span>{row.label}</span>
                          <span className="text-blue-400">{row.pct}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full" style={{ width: row.pct }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overhaul */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-20">
            <div className="lg:w-2/3">
              <ScrollReveal direction="up" delay={0.1}>
                <h3 className="text-4xl md:text-6xl font-heading font-medium text-slate-950 mb-8 leading-[1.1]">
                  Engineering The Future of <br />
                  <span className="italic font-serif text-blue-600">Investment Architecture.</span>
                </h3>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/3">
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  We move beyond traditional asset management by providing the structural scaffolding for global capital growth.
                </p>
                <Link href="/about" className="inline-flex items-center text-blue-600 font-bold uppercase tracking-widest text-xs hover:text-blue-700 transition-colors group">
                  Learn about our team <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Investment Solutions", desc: "Bespoke capital allocation across cross-border market inefficiencies.", delay: 0.1 },
              { icon: Building, title: "Fund Management", desc: "Rigorous portfolio oversight utilizing institutional VCC structures.", delay: 0.2 },
              { icon: Users, title: "Capital Advisory", desc: "Strategic structural guidance for family offices and institutions.", delay: 0.3 },
              { icon: Globe, title: "Institutional Distribution", desc: "Connecting sophisticated capital with premium global opportunities.", delay: 0.4 }
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={item.delay}>
                <div className="group bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 h-full">
                  <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-heading font-semibold text-slate-950 mb-4">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                  <Link href="/solutions" className="inline-flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    EXPLORE <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B132B] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">Initiate a Dialogue</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Polaris engages exclusively with qualified professional investors, institutional allocators, and strategic partners. Contact our relationship management team to explore alignment.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-base bg-white text-[#0B132B] hover:bg-slate-100 transition-all rounded-sm">
                Contact Our Office
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
