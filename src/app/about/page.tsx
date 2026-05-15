import { Building, Globe, Scale } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "About Polaris | Corporate Profile",
  description: "Learn about Polaris, a Mauritius-based Variable Capital Company dedicated to institutional wealth architecture.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
                Institutional <br />
                <span className="text-blue-400">Wealth Architecture.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                Engineering sophisticated financial structures for global allocators from our headquarters in Mauritius.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Column: Narrative */}
            <div className="w-full lg:w-3/5">
              <ScrollReveal direction="right" delay={0.1}>
                <h2 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Our Genesis</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 mb-10 leading-tight">Engineering Absolute Return Platforms.</h3>
                <div className="space-y-8 text-lg font-light leading-relaxed text-slate-600">
                  <p>
                    Polaris was established with a singular objective: to provide institutional investors, family offices, and high-net-worth individuals with a secure, regulated, and highly efficient platform for global capital deployment.
                  </p>
                  <p className="border-l-2 border-blue-500 pl-8 py-2 italic text-slate-900">
                    "We are not a retail brokerage. Polaris is a financial architect. We design and execute strategies characterized by rigorous risk management and quantitative discipline."
                  </p>
                  <p>
                    Operating as a Variable Capital Company (VCC) under the progressive regulatory framework of Mauritius, we seamlessly integrate fund management, strategic capital advisory, and bespoke investment solutions.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="w-full lg:w-2/5">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 space-y-12 shadow-sm">
                  
                  <div className="flex gap-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm h-fit">
                      <Globe className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">Global Jurisdiction</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Domiciled in Mauritius, a premier IFC known for its robust legal framework, political stability, and DTAA network.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm h-fit">
                      <Building className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">The VCC Advantage</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Utilizing the Variable Capital Company structure to offer unmatched flexibility in segregating assets and managing sub-funds.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm h-fit">
                      <Scale className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">Fiduciary Alignment</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        We uphold strict fiduciary duties, ensuring transparency, independent auditing, and rigorous governance standards.
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
