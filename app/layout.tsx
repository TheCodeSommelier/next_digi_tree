import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import BackgroundGradients from './components/UI/BackgroundGradients';
import CookiesProvider from './providers/cookies/CookieProvider';
import { BASE_URL } from './consts/consts';


const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: 'Digitree',
    template: '%s | Digitree',
  },
  manifest: `${BASE_URL}/manifest.webmanifest`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} pt-20 antialiased`}
      >
        <GoogleTagManager gtmId='GTM-P6BQ93SK' />
        <CookiesProvider>
          <div className="relative min-h-screen">
            <BackgroundGradients />
            <div className="relative z-10">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </CookiesProvider>
      </body>
    </html>
  );
}
