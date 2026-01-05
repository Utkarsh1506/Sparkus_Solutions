import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'SPARKUS Solutions | IT Consultancy & Product Engineering',
  description:
    'Transform your ideas into powerful digital products. Award-winning IT consultancy specializing in product engineering and enterprise solutions.',
  keywords:
    'IT consultancy, product engineering, digital transformation, web development, custom software',
  authors: [{ name: 'SPARKUS Solutions' }],
  openGraph: {
    title: 'SPARKUS Solutions',
    description:
      'Transform your ideas into powerful digital products.',
    url: 'https://sparkus.solutions',
    siteName: 'SPARKUS Solutions',
    images: [
      {
        url: 'https://sparkus.solutions/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPARKUS Solutions',
    description: 'Transform your ideas into powerful digital products.',
  },
};

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        <div className="mt-4 text-accent font-semibold text-center">Loading...</div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-bg text-white antialiased">
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <main className="relative pt-20 overflow-x-hidden">
            {children}
          </main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
