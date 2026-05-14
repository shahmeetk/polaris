export const metadata = {
  title: "Legal Disclaimer | Polaris",
  description: "Legal disclosures and disclaimers for Polaris Variable Capital Company.",
};

export default function LegalPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="bg-[#0B132B] text-white py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-heading font-medium tracking-tight mb-4">Legal Disclaimer</h1>
          <p className="text-slate-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-slate max-w-none text-slate-600">
          <p>
            The information contained on this website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation for any security, investment strategy, or fund managed or advised by Polaris Variable Capital Company ("Polaris") or any of its affiliates.
          </p>
          <p>
            Any such offer or solicitation will be made only by means of a confidential Private Placement Memorandum (PPM) and related subscription documents, and only in jurisdictions where permitted by law.
          </p>
          <h3>Regulatory Status</h3>
          <p>
            Polaris is registered as a Variable Capital Company in the Republic of Mauritius. The contents of this website have not been reviewed or approved by the Financial Services Commission (FSC) of Mauritius or any other regulatory authority.
          </p>
          <h3>Qualified Investors</h3>
          <p>
            The strategies and funds described herein are strictly available to qualified, professional, or institutional investors who meet the rigorous suitability and sophisticated investor criteria required by applicable laws. Retail investors are explicitly prohibited from investing in Polaris funds.
          </p>
          <h3>Risk Warning</h3>
          <p>
            All investments involve substantial risk, including the potential loss of principal. Past performance is not indicative of future results. There can be no assurance that any investment objectives will be achieved or that any risk management frameworks will be successful. 
          </p>
        </div>
      </section>
    </div>
  );
}
