import { Star, CheckCircle, MapPin } from 'lucide-react';
import Image from 'next/image';
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
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300',
    tags: ['Repair', 'Sales'],
  },
  {
    id: 2,
    name: 'Green Life Hospital',
    category: 'Healthcare',
    rating: 4.5,
    reviews: 312,
    location: 'Green Road, Dhaka',
    verified: true,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400&h=300',
    tags: ['24/7', 'Emergency'],
  },
  {
    id: 3,
    name: 'Sultan\'s Dine',
    category: 'Food & Dining',
    rating: 4.9,
    reviews: 2500,
    location: 'Gulshan 2, Dhaka',
    verified: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400&h=300',
    tags: ['Kacchi', 'Delivery'],
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Top Rated Businesses
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Highly recommended by the community.
            </p>
          </div>
          <Link
            href="/ranking"
            className="flex items-center gap-2 font-semibold text-emerald-600 hover:underline"
          >
            View all rankings
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm">
                  {business.category}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                      {business.name}
                      {business.verified && (
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      )}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {business.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 rounded-lg bg-emerald-100 px-2 py-1 text-emerald-700">
                      <span className="font-bold">{business.rating}</span>
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="mt-1 text-xs text-gray-500">
                      {business.reviews} reviews
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {business.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
