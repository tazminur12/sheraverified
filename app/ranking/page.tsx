import { Star, CheckCircle, MapPin, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const businesses = [
  {
    id: 1,
    name: 'TechMaster BD',
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    location: 'Dhanmondi, Dhaka',
    verified: true,
    description: 'Expert laptop and mobile repair services with genuine parts.',
    score: 98,
  },
  {
    id: 2,
    name: 'Green Life Hospital',
    category: 'Healthcare',
    rating: 4.5,
    reviews: 312,
    location: 'Green Road, Dhaka',
    verified: true,
    description: 'Multi-disciplinary hospital with world-class facilities.',
    score: 95,
  },
  {
    id: 3,
    name: 'Sultan\'s Dine',
    category: 'Food & Dining',
    rating: 4.9,
    reviews: 2500,
    location: 'Gulshan 2, Dhaka',
    verified: true,
    description: 'Authentic Kacchi Biryani and traditional Bengali cuisine.',
    score: 99,
  },
  {
    id: 4,
    name: 'Pathway English',
    category: 'Education',
    rating: 4.7,
    reviews: 89,
    location: 'Uttara, Dhaka',
    verified: true,
    description: 'IELTS preparation and spoken English courses.',
    score: 94,
  },
  {
    id: 5,
    name: 'Dream Home Decor',
    category: 'Shopping',
    rating: 4.2,
    reviews: 45,
    location: 'Banani, Dhaka',
    verified: false,
    description: 'Premium furniture and home accessories.',
    score: 85,
  },
];

const categories = ['All', 'Education', 'Healthcare', 'Electronics', 'Food & Dining', 'Shopping', 'Travel'];
const locations = ['All', 'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi'];

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Top Ranked Businesses</h1>
          <p className="mt-2 text-gray-600">Find the best services in Bangladesh based on Shera Score and user reviews.</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Filter className="h-5 w-5" />
                Filters
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked={cat === 'All'} />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">Location</h3>
                  <select className="w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm outline-none focus:border-emerald-500">
                    {locations.map((loc) => (
                      <option key={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">Shera Score</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="radio" name="score" className="text-emerald-600" /> 90+ (Excellent)
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="radio" name="score" className="text-emerald-600" /> 80+ (Very Good)
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="radio" name="score" className="text-emerald-600" /> 70+ (Good)
                    </label>
                  </div>
                </div>
                
                <button className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-amber-500 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <span className="font-medium text-gray-900">{businesses.length} Results found</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="rounded-lg border-none bg-transparent text-sm font-bold text-gray-900 outline-none hover:text-emerald-600">
                  <option>Shera Score (High to Low)</option>
                  <option>Most Reviewed</option>
                  <option>Newest Added</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {businesses.map((business, index) => (
                <div key={business.id} className="group flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md sm:flex-row">
                  <div className="flex items-center justify-center sm:w-24 shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-2xl font-bold text-gray-400">
                       #{index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                       <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-600">
                         {business.category}
                       </span>
                       {business.verified && (
                         <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                           <CheckCircle className="h-3 w-3" /> Verified
                         </span>
                       )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600">
                      <Link href={`/business/${business.id}`}>{business.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{business.description}</p>
                    <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {business.location}
                      </div>
                      <div className="flex items-center gap-1">
                         <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                         <span className="font-bold text-gray-900">{business.rating}</span>
                         <span>({business.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-center gap-2 sm:border-l sm:border-gray-100 sm:pl-6">
                     <div className="text-center">
                       <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">{business.score}</div>
                       <div className="text-xs font-medium text-gray-500">Shera Score</div>
                     </div>
                     <Link href={`/business/${business.id}`} className="mt-2 w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white transition-opacity hover:opacity-90 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-amber-500">
                       View Profile
                     </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-700 hover:bg-gray-50">
                Load More Businesses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
