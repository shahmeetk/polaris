import { ShieldCheck, FileCheck, LockKeyhole, Scale, BookOpen, Fingerprint } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Governance & Compliance | Polaris",
  description: "Discover Polaris's commitment to strict regulatory adherence, transparency, and institutional governance.",
};

export default function GovernancePage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-5xl md:text-8xl font-heading font-medium tracking-tight mb-8 leading-[0.95]">
                Regulatory <br />
                <span className="text-blue-400">Integrity.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                Upholding the highest standards of regulatory integrity, independent oversight, and operational transparency.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-20 mb-32">
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="right" delay={0.1}>
                <h2 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Framework</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-medium text-slate-950 mb-8 leading-tight">Institutional Trust Architecture.</h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
                  As a Variable Capital Company operating in the Republic of Mauritius, Polaris is subject to robust regulatory oversight. We view compliance as the foundational pillar of investor trust.
                </p>
                <div className="flex items-center space-x-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <Fingerprint className="h-10 w-10 text-blue-600" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Zero Tolerance Policy</div>
                    <div className="text-xs text-slate-500">Strict adherence to FATF international standards</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-6">
                  {[
                    { icon: ShieldCheck, title: "FSC Regulated", desc: "Regulated by the Financial Services Commission of Mauritius." },
                    { icon: Scale, title: "VCC Act Compliance", desc: "Ring-fenced assets within individual sub-funds." },
                    { icon: BookOpen, title: "Governance Code", desc: "Adherence to the National Code of Corporate Governance." }
                  ].map((item, i) => (
                    <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex gap-6">
                      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 h-fit">
                        <item.icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-slate-950 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Section 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700 h-full">
                <div className="mb-8 p-5 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <FileCheck className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-heading font-medium text-slate-950 mb-6">Independent Oversight</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light">
                  To eliminate conflicts of interest, Polaris employs top-tier independent service providers for all critical fund operations. This includes independent fund administration for Net Asset Value (NAV) calculation and recognized global auditing firms.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700 h-full">
                <div className="mb-8 p-5 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <LockKeyhole className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-heading font-medium text-slate-950 mb-6">AML & KYC Protocols</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light">
                  We maintain zero tolerance for financial crime. Polaris enforces stringent Anti-Money Laundering (AML) and Know Your Customer (KYC) onboarding procedures aligned with international standards.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
}
