import { Building, Globe, Scale } from "lucide-react";

export const metadata = {
  title: "About Polaris | Corporate Profile",
  description: "Learn about Polaris, a Mauritius-based Variable Capital Company dedicated to institutional wealth architecture.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B132B] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Corporate Profile</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              Engineering sophisticated financial structures for global allocators from our headquarters in Mauritius.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Narrative */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-heading font-medium text-slate-900 mb-6">Our Genesis & Vision</h2>
              <div className="prose prose-slate prose-lg max-w-none font-light leading-relaxed text-slate-600">
                <p>
                  Polaris was established with a singular objective: to provide institutional investors, family offices, and high-net-worth individuals with a secure, regulated, and highly efficient platform for global capital deployment.
                </p>
                <p>
                  Operating as a Variable Capital Company (VCC) under the progressive regulatory framework of Mauritius, we seamlessly integrate fund management, strategic capital advisory, and bespoke investment solutions. This unified approach eliminates the friction often associated with cross-border wealth management, allowing our partners to focus on absolute returns and long-term capital preservation.
                </p>
                <p>
                  We are not a retail brokerage. Polaris is a financial architect. We design and execute strategies characterized by rigorous risk management, quantitative discipline, and strict adherence to global compliance standards.
                </p>
              </div>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-10">
                
                <div className="flex gap-5">
                  <div className="text-primary mt-1">
                    <Globe className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">Global Jurisdiction</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Domiciled in Mauritius, a premier International Financial Centre known for its robust legal framework, political stability, and extensive network of double taxation avoidance agreements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="text-primary mt-1">
                    <Building className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">The VCC Advantage</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Utilizing the Variable Capital Company structure to offer unmatched flexibility in segregating assets, managing multiple sub-funds, and optimizing operational efficiencies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="text-primary mt-1">
                    <Scale className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">Fiduciary Alignment</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Our interests are inextricably linked with those of our investors. We uphold strict fiduciary duties, ensuring transparency, independent auditing, and rigorous governance.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
