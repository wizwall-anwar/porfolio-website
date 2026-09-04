import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { themeScript } from '@/lib/theme-script';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-anwar-zeta.vercel.app'),
  title: {
    default: 'Anwar Ayoon — Problem Solver Using Technology',
    template: '%s — Anwar Ayoon',
  },
  description:
    'Technology-driven problem solver using data, software, and AI to make complicated systems more practical, accessible, and human.',
  openGraph: {
    title: 'Anwar Ayoon — Problem Solver Using Technology',
    description:
      'Technology-driven problem solver using data, software, and AI to make complicated systems more practical, accessible, and human.',
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-anwar-zeta.vercel.app',
    siteName: 'Anwar Ayoon',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
