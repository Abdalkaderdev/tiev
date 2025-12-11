import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Candles - SoapBox Super App | Spiritual Engagement Rewards',
  description: 'Your spiritual engagement rewards and AI feature credits that power your faith journey on SoapBox.',
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
        <ChatWidget />
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
