import { GraduationCap, Stethoscope, ShoppingBag, Utensils, Plane, Home, Laptop, Car } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Education', icon: GraduationCap, count: '1.2k', href: '/categories/education' },
  { name: 'Healthcare', icon: Stethoscope, count: '850+', href: '/categories/healthcare' },
  { name: 'Shopping', icon: ShoppingBag, count: '2.5k', href: '/categories/shopping' },
  { name: 'Food & Dining', icon: Utensils, count: '3.4k', href: '/categories/food' },
  { name: 'Travel', icon: Plane, count: '500+', href: '/categories/travel' },
  { name: 'Real Estate', icon: Home, count: '300+', href: '/categories/real-estate' },
  { name: 'Electronics', icon: Laptop, count: '900+', href: '/categories/electronics' },
  { name: 'Automotive', icon: Car, count: '450+', href: '/categories/automotive' },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find the best rated businesses in every sector.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-emerald-100 hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-amber-500 group-hover:text-white">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.count} listings</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
