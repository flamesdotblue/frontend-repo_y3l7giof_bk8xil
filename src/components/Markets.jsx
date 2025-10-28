import { Car, Wind, Snowflake } from "lucide-react";

export default function Markets() {
  const markets = [
    {
      icon: Car,
      title: "Automotive (incl. EV)",
      desc:
        "High-performance radiators and heat exchangers for passenger, commercial, off-highway and emerging EV platforms.",
      points: ["OEM-grade reliability", "Optimized thermal efficiency", "Durable construction"],
    },
    {
      icon: Snowflake,
      title: "HVAC",
      desc:
        "Efficient aluminium heat exchangers tailored for climate control and industrial cooling applications.",
      points: ["Energy-efficient designs", "Application-specific sizing", "Long service life"],
    },
    {
      icon: Wind,
      title: "Compressed Air Industry",
      desc:
        "Robust coolers engineered for compressed air and gas systems, balancing pressure drop and cooling capacity.",
      points: ["Low pressure drop", "Corrosion resistance", "Easy integration"],
    },
  ];

  return (
    <section id="markets" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Markets We Serve</h2>
          <p className="mt-3 text-slate-600">Brazed aluminium heat exchangers and copper-brass radiators engineered for diverse operating conditions.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map(({ icon: Icon, title, desc, points }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
