import { Target, Activity, Zap, Cpu, BarChart3, Binary, ArrowDownRight, Layers } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Investment Approach | Polaris",
  description: "Understanding the rigorous, quantitative, and risk-adjusted investment methodology of Polaris.",
};

export default function InvestmentApproachPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/algorithmic_trading_node.jpg" 
            alt="Algorithmic Trading Network" 
            fill 
            className="object-cover object-center opacity-30 scale-105 animate-slow-zoom"
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
                Systematic <br />
                <span className="text-blue-400">Execution.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                A systematic, mathematically disciplined pursuit of absolute returns and capital preservation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="right" delay={0.1}>
                <h2 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Core Philosophy</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-medium text-slate-950 mb-8 leading-tight">
                  The Elimination of <br />
                  <span className="text-blue-500">Cognitive Bias.</span>
                </h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                  We believe that consistent alpha generation requires the removal of emotional decision-making. The Polaris methodology is deeply rooted in quantitative analysis, algorithmic execution, and rigorous backtesting across multiple market cycles.
                </p>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Cpu, label: "Machine Intelligence" },
                    { icon: Binary, label: "Systematic Bias" },
                    { icon: Layers, label: "Multi-Asset Alpha" },
                    { icon: BarChart3, label: "Dynamic Vol" }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-500">
                      <item.icon className="h-8 w-8 text-blue-600 mb-4 group-hover:text-white transition-colors" />
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-white/80 transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Pillar 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 h-full">
                <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Activity className="h-8 w-8 text-blue-600 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-slate-950 mb-4">Quantitative Rigor</h3>
                <p className="text-slate-500 leading-relaxed">
                  Strategies are developed using advanced statistical modeling to identify pricing inefficiencies and structural anomalies across global liquidity pools. Every hypothesis is subjected to stringent out-of-sample stress testing.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 h-full">
                <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Zap className="h-8 w-8 text-blue-600 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-slate-950 mb-4">Systematic Execution</h3>
                <p className="text-slate-500 leading-relaxed">
                  We utilize high-fidelity execution infrastructure to minimize slippage and market impact. Algorithmic trade routing ensures mathematical models are translated into precise market actions.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 h-full">
                <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Target className="h-8 w-8 text-blue-600 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-slate-950 mb-4">Risk Management</h3>
                <p className="text-slate-500 leading-relaxed">
                  Risk is strictly monitored via real-time position limits, dynamic drawdown controls, and hard-coded stop parameters. Capital preservation is prioritized over maximum theoretical yield.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.5}>
            <div className="relative overflow-hidden bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-white">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ArrowDownRight className="h-64 w-64" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-3xl font-heading font-medium mb-6">Strategy Data Room</h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-10">
                  Historical performance data, strategy tear sheets, and detailed attribution analysis are strictly reserved for qualified professional investors. Complete our institutional onboarding to access the Polaris data room.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="h-12 w-[1px] bg-blue-500/50"></div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400">Restricted Access Protocol</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
