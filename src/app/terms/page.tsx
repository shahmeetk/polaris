import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Terms of Use | Polaris",
  description: "Terms and conditions of using the Polaris Variable Capital Company website.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 flex items-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4">Terms of Use</h1>
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
                By accessing or using the website of Polaris Variable Capital Company (&quot;Polaris&quot;), you agree to be bound by these Terms of Use.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Intellectual Property</h3>
                  <p>
                    All content, algorithms, branding, and text presented on this website are the exclusive intellectual property of Polaris or its licensors. Unauthorized reproduction, distribution, or modification is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Use of Website</h3>
                  <p>
                    This website is intended solely for informational purposes for qualified institutional and professional investors. You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">No Advisory Relationship</h3>
                  <p>
                    Use of this website does not create a fiduciary, advisory, or professional relationship between you and Polaris. The information provided does not constitute financial, legal, or tax advice.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-medium text-slate-950 mb-4">Limitation of Liability</h3>
                  <p>
                    Polaris shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your access to, or use of, this website or any information contained herein.
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
