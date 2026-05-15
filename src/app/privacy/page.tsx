import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Privacy Policy | Polaris",
  description: "Privacy Policy for Polaris Variable Capital Company.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 flex items-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4">Privacy Policy</h1>
              <p className="text-slate-400 font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="prose prose-slate prose-lg max-w-none text-slate-500 font-light leading-relaxed">
              <p className="text-xl text-slate-600 mb-12">
                Polaris Variable Capital Company ("Polaris") is committed to protecting the privacy and security of your personal data. This policy describes how we handle your information in connection with our institutional services.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Data Collection</h3>
                  <p>
                    We collect personal identification information (Name, email address, corporate entity details) when you voluntarily submit inquiries or engage in institutional onboarding procedures.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Use of Information</h3>
                  <p>
                    The information collected is used exclusively for responding to professional inquiries, conducting mandated KYC/AML checks, and managing institutional relationships through our secure portals.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Data Security</h3>
                  <p>
                    We employ robust, institutional-grade security measures to prevent unauthorized access. Data is stored on secure servers and protected by advanced encryption protocols.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Information Sharing</h3>
                  <p>
                    Polaris does not sell or rent your personal information. Information may be shared with authorized third-party service providers (such as administrators or auditors) strictly for regulatory compliance and fund operations.
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
