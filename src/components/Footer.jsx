import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900">APM Autoparts Pvt Ltd</h3>
            <p className="mt-2 text-sm text-slate-600 max-w-prose">
              Manufacturers of bespoke radiators and brazed aluminium heat exchangers catering to automotive, HVAC and compressed air industries.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@apmautoparts.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-00000-00000</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Location</h4>
            <p className="mt-3 flex items-start gap-2 text-sm text-slate-700">
              <MapPin className="mt-0.5 h-4 w-4" /> India
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} APM Autoparts Pvt Ltd. All rights reserved.</p>
          <p>Built with precision and reliability.</p>
        </div>
      </div>
    </footer>
  );
}
