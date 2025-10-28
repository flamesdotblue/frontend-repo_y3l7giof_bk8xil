import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Markets from "./components/Markets";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">APM Autoparts</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
            <a href="#markets" className="text-slate-600 hover:text-slate-900">Markets</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <AboutSection />
        <Markets />
      </main>

      <Footer />
    </div>
  );
}
