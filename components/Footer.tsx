import Link from 'next/link';
import { Globe, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-900/30 flex items-center justify-center border border-amber-900/50">
                <Globe className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-white font-medium">TIEV Global</span>
            </div>
            <p className="text-neutral-500 text-sm mb-4">
              Reaching the unreached, caring for the poor, and discovering the treasure found in every Nation, Tribe and Tongue.
            </p>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="text-white font-medium mb-4">Our Work</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/projects/iraq" className="hover:text-amber-500 transition-colors">Iraq</Link></li>
              <li><Link href="/projects/pakistan" className="hover:text-amber-500 transition-colors">Pakistan</Link></li>
              <li><Link href="/projects/philippines" className="hover:text-amber-500 transition-colors">Philippines</Link></li>
              <li><Link href="/projects/japan" className="hover:text-amber-500 transition-colors">Japan</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
              <li><Link href="/about#values" className="hover:text-amber-500 transition-colors">Our Values</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-medium mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/donate" className="hover:text-amber-500 transition-colors flex items-center gap-1"><Heart className="w-3 h-3" /> Donate</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Partner With Us</Link></li>
            </ul>

            <h4 className="text-white font-medium mb-4 mt-8">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} TIEV Global. All rights reserved.
            </p>
            <p className="text-neutral-600 text-xs">
              Treasures in Earthen Vessels
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
