import { Search, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Bangladesh's #1 Verification Platform
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">Trusted</span> Businesses <br />
            in Bangladesh
          </h1>
          <p className="mb-10 text-lg text-gray-600 sm:text-xl">
            We verify businesses so you don't have to. Check Shera Score, read real reviews, and make informed decisions.
          </p>

          <div className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What are you looking for? (e.g. Best Pizza, Dentist)"
                className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-lg shadow-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>
            <button className="h-14 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 px-8 text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90">
              Search
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">5,000+</span>
              <span>Verified Businesses</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">120k+</span>
              <span>Authentic Reviews</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">100%</span>
              <span>Real People</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
