import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
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
        className={`${figtree.variable} antialiased`}
      >
        <GoogleTagManager gtmId='GTM-P6BQ93SK' />
        <CookiesProvider>
          <Navbar />
          {children}
          <Footer />
        </CookiesProvider>
      </body>
    </html>
  );
}
