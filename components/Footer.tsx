import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-900/30 flex items-center justify-center border border-amber-900/50">
                <Flame className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-white font-medium">SoapBox Super App</span>
            </div>
            <p className="text-neutral-500 text-sm mb-4">
              Empowering faith communities worldwide with innovative technology that brings people together, deepens spiritual connections, and transforms lives.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-medium mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/features" className="hover:text-amber-500 transition-colors">Prayer Wall</Link></li>
              <li><Link href="/features" className="hover:text-amber-500 transition-colors">Bible Reading</Link></li>
              <li><Link href="/features" className="hover:text-amber-500 transition-colors">Events</Link></li>
              <li><Link href="/features" className="hover:text-amber-500 transition-colors">Community Chat</Link></li>
              <li><Link href="/features" className="hover:text-amber-500 transition-colors">Volunteer Hub</Link></li>
              <li><Link href="/candle" className="hover:text-amber-500 transition-colors">SoapBox Candles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
              <li><Link href="/help" className="hover:text-amber-500 transition-colors">Help Center</Link></li>
              <li><Link href="/support" className="hover:text-amber-500 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
            </ul>

            <h4 className="text-white font-medium mb-4 mt-8">Get Started</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/get-started" className="hover:text-amber-500 transition-colors">Sign Up Free</Link></li>
              <li><Link href="/signin" className="hover:text-amber-500 transition-colors">Sign In</Link></li>
              <li><Link href="/pricing" className="hover:text-amber-500 transition-colors">View Pricing</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              &copy; 2025 SoapBox Super App. All rights reserved.
            </p>
            <p className="text-neutral-600 text-xs">
              Built with faith and technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
