import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import BackgroundGradients from './components/UI/BackgroundGradients';
import CookiesProvider from './providers/cookies/CookieProvider';
import { headers } from 'next/headers';
import { getBaseUrlFromHeaders, SITE_DESC } from './consts/consts';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin']
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrlFromHeaders(await headers());
  const title = {
    default: 'Digitree',
    template: '%s | Digitree',
  };

  return {
    metadataBase: new URL(baseUrl),
    title,
    description: SITE_DESC,
    themeColor: 'black',
    openGraph: {
      title,
      description: SITE_DESC,
      url: baseUrl,
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Digitree Education classroom photo with the text: "Digitree, měníme strategii v měřitelné výsledky."',
        },
      ],
      type: 'website',
      siteName: 'Digitree',
    },
    manifest: '/manifest.webmanifest',
  };
}

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
