import { Layers, Wrench, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              About Us
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              APM Autoparts Pvt Ltd, India has a long standing history of manufacturing bespoke radiators for automotive, stationary and agricultural OE & after-market requirements in India, and was incorporated in the year 1996. APM originally manufactured high quality copper brass radiators for local and international customers, serving the OEM & aftermarket segment.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We expanded into Brazed Aluminium Heat Exchanger market since 2017 and have setup a dedicated team within the company to exclusively deal with Aluminium product, design, development and manufacturing based on various customer requirements. With our combined experience of over 25 years in the heat exchanger industry, we serve a broad spectrum of applications.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-5">
                <Layers className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-3 font-semibold text-slate-900">Copper & Aluminium</h3>
                <p className="mt-1 text-sm text-slate-600">Expertise across copper-brass and brazed aluminium technologies.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <Wrench className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-3 font-semibold text-slate-900">Design to Delivery</h3>
                <p className="mt-1 text-sm text-slate-600">End-to-end development tailored to your performance requirements.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-3 font-semibold text-slate-900">Quality First</h3>
                <p className="mt-1 text-sm text-slate-600">OEM-grade quality systems with rigorous testing and validation.</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-200/30 via-transparent to-cyan-200/30" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-900">Manufacturing Focus</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                    Custom radiator cores and assemblies for heavy-duty and passenger vehicles.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                    Brazed aluminium heat exchangers engineered for efficiency and durability.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                    Prototyping, thermal design support, and rapid iteration with in-house testing.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                    Small to large batch production to suit OEM and aftermarket demands.
                  </li>
                </ul>
              </div>
            </div>
            <div id="contact" className="mt-8 rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Get in touch</h3>
              <p className="mt-2 text-slate-600">Looking for a manufacturing partner? Reach out to discuss your requirements.</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <p><span className="font-medium">Email:</span> info@apmautoparts.com</p>
                <p><span className="font-medium">Phone:</span> +91-00000-00000</p>
                <p className="sm:col-span-2"><span className="font-medium">Address:</span> India</p>
              </div>
              <a href="mailto:info@apmautoparts.com" className="mt-5 inline-block rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
