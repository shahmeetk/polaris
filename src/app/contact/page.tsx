import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Shield, ArrowUpRight, Clock, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Contact Our Office | Polaris",
  description: "Initiate a dialogue with Polaris for institutional-grade financial solutions and strategic partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h1 className="text-5xl md:text-8xl font-heading font-medium tracking-tight mb-8 leading-[0.95]">
                Corporate <br />
                <span className="text-blue-400">Coordinates.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                We welcome strategic dialogue with qualified professional investors, institutional allocators, and distribution partners.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                  <h2 className="text-3xl font-heading font-medium text-slate-950 mb-4">Submit an Inquiry</h2>
                  <p className="text-slate-500 mb-12 font-light leading-relaxed">
                    Comprehensive strategy disclosures and proprietary materials are provided strictly following appropriate qualification procedures.
                  </p>
                  
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="fullName" className="text-xs uppercase tracking-widest font-bold text-slate-400">Full Name</Label>
                        <Input id="fullName" placeholder="Enter your full name" className="h-14 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-blue-500 transition-all px-6" required />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-slate-400">Corporate Email</Label>
                        <Input id="email" type="email" placeholder="name@firm.com" className="h-14 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-blue-500 transition-all px-6" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-slate-400">Phone / WhatsApp</Label>
                        <Input id="phone" type="tel" placeholder="+1 (000) 000-0000" className="h-14 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-blue-500 transition-all px-6" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="entity" className="text-xs uppercase tracking-widest font-bold text-slate-400">Organization</Label>
                        <Input id="entity" placeholder="Name of your firm" className="h-14 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-blue-500 transition-all px-6" required />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-slate-400">Nature of Inquiry</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Briefly describe your requirements..." 
                        className="min-h-[160px] bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all p-6 resize-none"
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/20 transition-all font-semibold group">
                      Transmit Message
                      <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-8">Corporate Details</h3>
                    <div className="space-y-10">
                      <div className="flex items-start space-x-6">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                          <MapPin className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-slate-950 mb-1">Registered HQ</p>
                          <p className="text-slate-500 leading-relaxed text-sm">
                            Office 708, 7th Floor, Nexsky Building<br />
                            Ebene, Quatre Bornes, 72201<br />
                            Republic of Mauritius
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                          <Mail className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-slate-950 mb-1">Electronic</p>
                          <a href="mailto:polarisvcc@gmail.com" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">polarisvcc@gmail.com</a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                          <Phone className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-slate-950 mb-1">Global Line</p>
                          <p className="text-slate-500 text-sm">+230 5421 1329</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <Clock className="h-8 w-8 text-blue-600 mb-4" />
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</div>
                      <div className="text-sm font-semibold text-slate-900">09:00 - 18:00 MUT</div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <Globe className="h-8 w-8 text-blue-600 mb-4" />
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Operational</div>
                      <div className="text-sm font-semibold text-slate-900">Global Markets</div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-slate-950 p-10 rounded-[2.5rem] text-white">
                    <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                      <Shield className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-heading font-medium mb-3 text-xl">Governance</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        Polaris VCC engagements are strictly subjected to rigorous KYC/AML protocols and institutional suitability criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
