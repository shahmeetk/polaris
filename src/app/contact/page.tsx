import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Shield } from "lucide-react";

export const metadata = {
  title: "Contact Our Office | Polaris",
  description: "Initiate a dialogue with Polaris for institutional-grade financial solutions and strategic partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B132B] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Connect with Polaris</h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              We welcome strategic dialogue with qualified professional investors, institutional allocators, and distribution partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-heading font-medium text-slate-900 mb-2">Submit an Inquiry</h2>
              <p className="text-sm text-slate-500 mb-10 leading-relaxed">
                Please refrain from submitting confidential financial data through this portal. Comprehensive strategy disclosures and proprietary materials are provided strictly following appropriate qualification procedures.
              </p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-slate-700">Full Name</Label>
                    <Input id="fullName" placeholder="Enter your full name" className="h-12 bg-slate-50/50" required />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-700">Corporate Email</Label>
                    <Input id="email" type="email" placeholder="name@firm.com" className="h-12 bg-slate-50/50" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-slate-700">Phone / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+1 (000) 000-0000" className="h-12 bg-slate-50/50" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="entity" className="text-slate-700">Entity / Organization</Label>
                    <Input id="entity" placeholder="Name of your organization" className="h-12 bg-slate-50/50" required />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-slate-700">Nature of Inquiry</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe your requirements..." 
                    className="min-h-[160px] bg-slate-50/50 resize-none"
                    required 
                  />
                </div>

                <Button type="submit" className="w-full h-14 text-base bg-primary hover:bg-primary/90 text-white rounded-sm transition-all">
                  Transmit Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <div>
                <h3 className="text-xl font-heading font-medium text-slate-900 mb-8 border-b border-slate-200 pb-4">Corporate Coordinates</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="mt-1 text-slate-400">
                      <MapPin className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Registered Headquarters</p>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        Office 708, 7th Floor, Nexsky Building<br />
                        Ebene, Quatre Bornes, 72201<br />
                        Republic of Mauritius
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="mt-1 text-slate-400">
                      <Mail className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Electronic Communications</p>
                      <a href="mailto:polarisvcc@gmail.com" className="text-slate-600 text-sm hover:text-primary transition-colors">polarisvcc@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="mt-1 text-slate-400">
                      <Phone className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Direct Line</p>
                      <p className="text-slate-600 text-sm">+230 5421 1329</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B132B] p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                  <Shield className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-heading text-lg font-medium mb-3">Regulatory Adherence</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Polaris is structured as a Variable Capital Company in Mauritius. Engagements are strictly subjected to rigorous KYC/AML protocols and institutional suitability criteria.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
