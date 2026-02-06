import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl bg-gray-900 text-white shadow-2xl">
          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:p-20">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Is your business Shera Verified?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Join 5,000+ businesses that use Shera Verified to build trust, collect reviews, and grow their reputation in Bangladesh.
              </p>
              
              <ul className="mb-10 space-y-4">
                {[
                  'Official Verified Badge',
                  'Respond to Reviews',
                  'Detailed Analytics Dashboard',
                  'Premium Support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-verified"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Get Verified
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/business-login"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-700 bg-transparent px-8 font-bold text-white transition-colors hover:bg-gray-800"
                >
                  Business Login
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              {/* Abstract decorative elements */}
              <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
              
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-white/10 p-8 backdrop-blur-md">
                   <div className="mb-6 flex items-center gap-4">
                     <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                     <div>
                       <div className="h-4 w-32 rounded bg-gray-200/50"></div>
                       <div className="mt-2 h-3 w-20 rounded bg-gray-200/30"></div>
                     </div>
                   </div>
                   <div className="space-y-3">
                     <div className="h-3 w-full rounded bg-gray-200/30"></div>
                     <div className="h-3 w-full rounded bg-gray-200/30"></div>
                     <div className="h-3 w-2/3 rounded bg-gray-200/30"></div>
                   </div>
                   <div className="mt-6 flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="h-4 w-4 rounded-sm bg-yellow-400"></div>
                        ))}
                      </div>
                      <div className="h-8 w-24 rounded-lg bg-blue-600"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
