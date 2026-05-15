import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Legal Disclaimer | Polaris",
  description: "Legal disclosures and disclaimers for Polaris Variable Capital Company.",
};

export default function LegalPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 flex items-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4">Legal Disclaimer</h1>
              <p className="text-slate-400 font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="prose prose-slate prose-lg max-w-none text-slate-500 font-light leading-relaxed">
              <p className="text-xl text-slate-600 mb-10">
                The information contained on this website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation for any security, investment strategy, or fund managed or advised by Polaris Variable Capital Company (&quot;Polaris&quot;).
              </p>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Regulatory Status</h3>
                  <p>
                    Polaris is registered as a Variable Capital Company in the Republic of Mauritius. The contents of this website have not been reviewed or approved by the Financial Services Commission (FSC) of Mauritius or any other regulatory authority.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Qualified Investors Only</h3>
                  <p>
                    The strategies and funds described herein are strictly available to qualified, professional, or institutional investors who meet the rigorous suitability and sophisticated investor criteria required by applicable laws. Retail investors are explicitly prohibited from investing in Polaris funds.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Risk Disclosure</h3>
                  <p>
                    All investments involve substantial risk, including the potential loss of principal. Past performance is not indicative of future results. There can be no assurance that any investment objectives will be achieved or that any risk management frameworks will be successful. 
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Confidentiality</h3>
                  <p>
                    Any offer or solicitation will be made only by means of a confidential Private Placement Memorandum (PPM) and related subscription documents, and only in jurisdictions where permitted by law.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
