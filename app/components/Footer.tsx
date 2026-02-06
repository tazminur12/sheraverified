import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Shera<span className="text-blue-600">Verified</span>
              </span>
            </Link>
            <p className="mb-6 text-gray-500">
              Bangladesh's most trusted business verification and review platform. Helping you find the best services with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
              For Consumers
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/ranking" className="text-gray-500 hover:text-blue-600">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/top-rated" className="text-gray-500 hover:text-blue-600">
                  Top Rated Businesses
                </Link>
              </li>
              <li>
                <Link href="/write-review" className="text-gray-500 hover:text-blue-600">
                  Write a Review
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-500 hover:text-blue-600">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
              For Business
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/get-verified" className="text-gray-500 hover:text-blue-600">
                  Get Verified
                </Link>
              </li>
              <li>
                <Link href="/business-login" className="text-gray-500 hover:text-blue-600">
                  Business Login
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-500 hover:text-blue-600">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-500 hover:text-blue-600">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin className="h-5 w-5 shrink-0 text-blue-600" />
                <span>Level 4, Shera Tower, Gulshan 1, Dhaka-1212</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="h-5 w-5 shrink-0 text-blue-600" />
                <span>+880 1711 000000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail className="h-5 w-5 shrink-0 text-blue-600" />
                <span>support@sheraverified.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 py-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SheraVerified. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
