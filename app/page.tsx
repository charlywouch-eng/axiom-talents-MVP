"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const t = {
    fr: {
      title: "AXIOM Talents",
      subtitle: "La première infrastructure de talents souveraine France-Cameroun",
      allOffers: "TOUTES NOS OFFRES D'EMPLOIS",
      discover: "Découvrez les métiers en tension",
      registerCandidate: "S'inscrire comme candidat (Cameroun)",
      registerCompany: "Je recrute (Entreprise premium France)",
    },
    en: {
      title: "AXIOM Talents",
      subtitle: "The first sovereign talent infrastructure France-Cameroon",
      allOffers: "ALL OUR JOB OFFERS",
      discover: "Discover high-demand jobs",
      registerCandidate: "Register as candidate (Cameroon)",
      registerCompany: "I want to hire (Premium French company)",
    },
  }[lang];

  const categories = [
    { fr: "Service à la personne", en: "Personal Services", icon: "🧑‍🦽" },
    { fr: "Support à l'entreprise", en: "Business Support", icon: "📊" },
    { fr: "Bâtiment et Construction", en: "Building & Construction", icon: "🏗️" },
    { fr: "Commerce & Vente", en: "Retail & Sales", icon: "🛒" },
    { fr: "Hôtellerie-Restauration", en: "Hospitality & Catering", icon: "🍽️" },
    { fr: "Transport & Logistique", en: "Transport & Logistics", icon: "🚚" },
    { fr: "Installation & Maintenance", en: "Installation & Maintenance", icon: "🔧" },
    { fr: "Agriculture & Élevage", en: "Agriculture & Farming", icon: "🌾" },
    { fr: "Santé", en: "Healthcare", icon: "🩺" },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">AXIOM</span>
            <span className="text-orange-500">.</span>
            <span className="text-orange-500 text-xl">talents</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-sm"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <a
              href="/register/company"
              className="px-5 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg font-medium transition"
            >
              {t.registerCompany}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/register/candidate"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-xl text-lg font-semibold transition shadow-lg shadow-orange-500/20"
          >
            {t.registerCandidate}
          </a>
          <a
            href="#offers"
            className="px-8 py-4 border border-orange-500 text-orange-400 hover:bg-orange-950/50 rounded-xl text-lg font-semibold transition"
          >
            {t.discover}
          </a>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="offers" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-400">
            {t.allOffers}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 bg-slate-900/80 backdrop-blur-sm"
              >
                <div className="p-8 text-center">
                  <div className="text-6xl mb-6">{cat.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{cat[lang]}</h3>
                  <p className="text-slate-400">
                    {lang === "fr" ? "Offres disponibles maintenant" : "Jobs available now"}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 text-center border-t border-slate-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Prêt à rejoindre l'autoroute des talents ?
        </h2>
        <a
          href="/register/candidate"
          className="inline-block px-10 py-5 bg-orange-600 hover:bg-orange-500 rounded-xl text-xl font-bold transition shadow-2xl shadow-orange-500/30"
        >
          {t.registerCandidate}
        </a>
      </section>
    </main>
  );
}
