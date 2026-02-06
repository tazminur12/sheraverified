import Link from 'next/link';
import { Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-amber-500 font-bold text-white">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Shera<span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">Verified</span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for businesses, categories..."
              className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/for-business"
            className="hidden text-sm font-medium text-gray-600 hover:text-emerald-600 md:block"
          >
            For Business
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}
