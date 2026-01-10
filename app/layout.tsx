import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TIEV - Treasures in Earthen Vessels',
  description: 'Reaching the unreached, caring for the poor, and discovering the treasure found in every Nation, Tribe and Tongue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Progressive Blur Effect */}
        <div className="gradient-blur" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Background script for UnicornStudio.js */}
        <div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{ maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)' }}>
          <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
            <div data-us-project="FixNvEwvWwbu3QX9qC3F" className="absolute w-full h-full left-0 top-0 -z-10"></div>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"></script>
          </div>
        </div>
      </body>
    </html>
  );
}
