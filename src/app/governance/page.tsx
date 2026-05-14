import { ShieldCheck, FileCheck, LockKeyhole } from "lucide-react";

export const metadata = {
  title: "Governance & Compliance | Polaris",
  description: "Discover Polaris's commitment to strict regulatory adherence, transparency, and institutional governance.",
};

export default function GovernancePage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B132B] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Governance & Compliance</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              Upholding the highest standards of regulatory integrity, independent oversight, and operational transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          
          <div className="prose prose-slate prose-lg max-w-none font-light leading-relaxed text-slate-600 mb-16">
            <p>
              As a Variable Capital Company operating in the Republic of Mauritius, Polaris is subject to robust regulatory oversight. We view compliance not merely as a legal obligation, but as the foundational pillar of investor trust and institutional credibility.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm">
                  <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-heading font-medium text-slate-900 mb-3">Regulatory Framework</h3>
                <p className="text-slate-600 leading-relaxed">
                  Polaris operates strictly within the guidelines set forth by the Financial Services Commission (FSC) of Mauritius and complies with the Variable Capital Companies Act. This ensures assets are ring-fenced within individual sub-funds, providing strong legal segregation and protection against cross-liability.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm">
                  <FileCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-heading font-medium text-slate-900 mb-3">Independent Oversight</h3>
                <p className="text-slate-600 leading-relaxed">
                  To eliminate conflicts of interest, Polaris employs top-tier independent service providers for all critical fund operations. This includes independent fund administration for Net Asset Value (NAV) calculation, recognized global auditing firms for annual financial reviews, and independent legal counsel.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm">
                  <LockKeyhole className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-heading font-medium text-slate-900 mb-3">AML & KYC Protocols</h3>
                <p className="text-slate-600 leading-relaxed">
                  We maintain zero tolerance for financial crime. Polaris enforces stringent Anti-Money Laundering (AML) and Know Your Customer (KYC) onboarding procedures aligned with FATF international standards. All prospective investors must undergo comprehensive screening prior to capital acceptance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
