export const metadata = {
  title: "Terms of Use | Polaris",
  description: "Terms and conditions of using the Polaris Variable Capital Company website.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="bg-[#0B132B] text-white py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-heading font-medium tracking-tight mb-4">Terms of Use</h1>
          <p className="text-slate-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-slate max-w-none text-slate-600">
          <p>
            By accessing or using the website of Polaris Variable Capital Company ("Polaris"), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not access or use this site.
          </p>
          <h3>Intellectual Property</h3>
          <p>
            All content, materials, algorithms, branding, and text presented on this website are the exclusive intellectual property of Polaris or its licensors and are protected by applicable copyright and trademark laws. Unauthorized reproduction, distribution, or modification is strictly prohibited.
          </p>
          <h3>Use of Website</h3>
          <p>
            This website is intended solely for informational purposes for qualified institutional and professional investors. You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party.
          </p>
          <h3>No Advisory Relationship</h3>
          <p>
            Use of this website does not create a fiduciary, advisory, or professional relationship between you and Polaris. The information provided does not constitute financial, legal, or tax advice.
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            Polaris shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website or any information contained herein.
          </p>
        </div>
      </section>
    </div>
  );
}
