export const metadata = {
  title: "Privacy Policy | Polaris",
  description: "Privacy Policy for Polaris Variable Capital Company.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="bg-[#0B132B] text-white py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-heading font-medium tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-slate max-w-none text-slate-600">
          <p>
            Polaris Variable Capital Company ("Polaris", "we", "our", or "us") is committed to protecting the privacy and security of your personal data. This Privacy Policy describes how we collect, use, and handle your information in connection with our website and related services.
          </p>
          <h3>Data Collection</h3>
          <p>
            We may collect personal identification information (Name, email address, phone number, corporate entity details) when you voluntarily submit inquiries through our contact forms or engage in institutional onboarding procedures.
          </p>
          <h3>Use of Information</h3>
          <p>
            The information collected is used exclusively for:
          </p>
          <ul>
            <li>Responding to professional inquiries and communication.</li>
            <li>Conducting legally mandated Anti-Money Laundering (AML) and Know Your Customer (KYC) checks.</li>
            <li>Managing our institutional relationships and providing secure access to our investor portal.</li>
          </ul>
          <h3>Data Security</h3>
          <p>
            We employ robust, institutional-grade security measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal information. Data is stored on secure servers and protected by advanced encryption protocols.
          </p>
          <h3>Information Sharing</h3>
          <p>
            Polaris does not sell or rent your personal information to third parties. Information may be shared with authorized third-party service providers (such as fund administrators or auditors) strictly for the purpose of regulatory compliance and fund operations, subject to confidentiality agreements.
          </p>
        </div>
      </section>
    </div>
  );
}
