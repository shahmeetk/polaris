import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FolderLock, Key } from "lucide-react";

export const metadata = {
  title: "Investor Relations | Polaris",
  description: "Access point for Polaris's existing investors and qualified professional partners.",
};

export default function InvestorRelationsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B132B] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Investor Relations</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              Secure access to reporting, analytics, and firm communications for authenticated partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Existing Clients */}
            <div className="bg-white p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <FolderLock className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h2 className="text-2xl font-heading font-medium text-slate-900 mb-4">Client Portal</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Existing Polaris investors can access their secure digital vault to view monthly NAV statements, performance analytics, K-1s / tax documents, and capital call notices.
                </p>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                  Access Portal
                </Button>
              </Link>
            </div>

            {/* Prospective Clients */}
            <div className="bg-white p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <Key className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h2 className="text-2xl font-heading font-medium text-slate-900 mb-4">Data Room Access</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Qualified prospective investors undergoing due diligence may request access to the Polaris secure data room containing offering memorandums, track records, and DDQs.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-slate-300 text-slate-800 hover:bg-slate-50 h-12">
                  Request Access Keys
                </Button>
              </Link>
            </div>

          </div>

          <div className="mt-16 text-center text-sm text-slate-500 max-w-3xl mx-auto">
            <p>
              If you require assistance with your portal credentials or have questions regarding your recent statement, please contact the Investor Relations team directly at <a href="mailto:polarisvcc@gmail.com" className="text-primary hover:underline">polarisvcc@gmail.com</a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
