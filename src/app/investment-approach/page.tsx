import { Target, Activity, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Investment Approach | Polaris",
  description: "Understanding the rigorous, quantitative, and risk-adjusted investment methodology of Polaris.",
};

export default function InvestmentApproachPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 flex items-center bg-slate-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/algorithmic_trading_node.jpg" 
            alt="Algorithmic Trading Network" 
            fill 
            className="object-cover object-center opacity-60"
            priority
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6 drop-shadow-md">Investment Approach</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              A systematic, mathematically disciplined pursuit of absolute returns and capital preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-medium text-slate-900 mb-6">The Philosophy</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We believe that consistent alpha generation requires the elimination of cognitive bias and emotional decision-making. The Polaris methodology is deeply rooted in quantitative analysis, algorithmic execution, and rigorous backtesting across multiple market cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <Activity className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-4">Quantitative Rigor</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Strategies are developed using advanced statistical modeling to identify pricing inefficiencies and structural anomalies across global liquidity pools. Every hypothesis is subjected to stringent out-of-sample stress testing.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <Zap className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-4">Systematic Execution</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We utilize high-fidelity execution infrastructure to minimize slippage and market impact. Algorithmic trade routing ensures that our mathematical models are translated into precise market actions without manual intervention.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <Target className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-4">Risk Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Risk is strictly monitored via real-time position limits, dynamic drawdown controls, and hard-coded stop parameters. Capital preservation is prioritized over maximum theoretical yield.
              </p>
            </div>
          </div>

          <div className="mt-20 p-10 bg-white border border-slate-200">
            <h3 className="text-2xl font-heading font-medium text-slate-900 mb-4">Performance Disclosures</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Historical performance data, strategy tear sheets, and detailed attribution analysis are strictly reserved for qualified professional investors. Interested parties must complete our institutional onboarding and verification process to access the Polaris data room.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
