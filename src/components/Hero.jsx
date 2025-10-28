import { Rocket, Factory, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 text-white">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80 backdrop-blur">
              <Rocket className="h-4 w-4 text-emerald-400" />
              <span>Since 1996 • Heat Exchanger Specialists</span>
            </div>
            <h1 className="mt-5 text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
              APM Autoparts Pvt Ltd
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
              Indian manufacturer of bespoke radiators and brazed aluminium heat exchangers for automotive, HVAC and compressed air industries. Delivering quality, reliability and innovation for OEM and aftermarket needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </a>
              <a href="#markets" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
                Our Markets
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Experience</dt>
                <dd className="text-xl font-semibold">25+ yrs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Materials</dt>
                <dd className="text-xl font-semibold">Copper • Aluminium</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Segments</dt>
                <dd className="text-xl font-semibold">OEM • Aftermarket</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Footprint</dt>
                <dd className="text-xl font-semibold">India • Global</dd>
              </div>
            </dl>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10">
              <div className="absolute inset-0 grid place-items-center">
                <Factory className="h-24 w-24 text-emerald-400/80" />
              </div>
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
