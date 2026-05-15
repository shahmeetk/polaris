import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FolderLock, Key, ShieldAlert, ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Investor Relations | Polaris",
  description: "Access point for Polaris's existing investors and qualified professional partners.",
};

export default function InvestorRelationsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background / Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[4px]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-5xl md:text-8xl font-heading font-medium tracking-tight mb-8 leading-[0.95]">
                Authenticated <br />
                <span className="text-blue-400">Partners.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                Secure access to reporting, analytics, and firm communications for existing and prospective institutional partners.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Existing Clients */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="group h-full bg-slate-950 rounded-[3rem] p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FolderLock className="h-40 w-40 text-blue-500" />
                </div>
                <div className="relative z-10">
                  <div className="mb-10 bg-blue-600 p-5 rounded-2xl w-fit shadow-lg shadow-blue-900/20">
                    <FolderLock className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-heading font-medium text-white mb-6">Client Portal</h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                    Existing Polaris investors can access their secure digital vault to view monthly NAV statements, performance analytics, and capital notices.
                  </p>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-white text-slate-950 hover:bg-slate-100 h-14 rounded-xl text-base font-semibold group">
                    Enter Secure Portal
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Prospective Clients */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group h-full bg-slate-50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="mb-10 bg-white border border-slate-100 p-5 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Key className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-heading font-medium text-slate-950 mb-6">Strategy Data Room</h2>
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                    Qualified prospective investors undergoing due diligence may request access to offering memorandums, track records, and DDQs.
                  </p>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-slate-200 text-slate-900 hover:bg-white hover:border-blue-200 h-14 rounded-xl text-base font-semibold transition-all">
                    Request Credentials
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-blue-50 border border-blue-100 rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
              <div className="bg-blue-600 p-4 rounded-2xl text-white">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-heading font-semibold text-slate-950 mb-2">Technical Assistance</h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  If you require assistance with your portal credentials or have questions regarding your recent statement, please contact the IR team directly.
                </p>
              </div>
              <Link href="mailto:polarisvcc@gmail.com">
                <Button className="bg-blue-600 text-white hover:bg-blue-500 h-12 px-8 rounded-xl whitespace-nowrap">
                  <Mail className="mr-2 h-4 w-4" /> Email IR Team
                </Button>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
