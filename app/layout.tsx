import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import CookiesProvider from './providers/cookies/CookieProvider';
import { BASE_URL } from './consts/consts';
import { GradientProvider } from './providers/gradients/GradientProvider';
import GradientRouteConfig from './components/UI/gradients/GradientRouteConfig';
import GradientLayer from './components/UI/gradients/GradientsLayer';


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
          <GradientProvider>
            <GradientLayer />
            <GradientRouteConfig />
            <Navbar />
            {children}
            <Footer />
          </GradientProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
