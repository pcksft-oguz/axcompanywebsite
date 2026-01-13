import type { Metadata } from "next";
import { Kumbh_Sans } from 'next/font/google';
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Optimize Google Fonts with Next.js
const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-kumbh',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axionvate.com'),
  title: {
    default: "AX Company | Data Science, AI & Machine Learning Solutions",
    template: "%s | AX Company"
  },
  description: "Leading provider of Data Science, Artificial Intelligence, and Machine Learning solutions. Transform your business with cutting-edge AI technologies across the UK, Dubai, Azerbaijan, and Turkey.",
  keywords: [
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Solutions",
    "ML Models",
    "Data Analytics",
    "Deep Learning",
    "Predictive Analytics",
    "Big Data",
    "Natural Language Processing",
    "AI Consulting",
    "Dubai AI Company",
    "UK AI Solutions",
  ],
  authors: [
    {
      name: "AX Company",
      url: "https://axionvate.com"
    },
  ],
  creator: "AX Company",
  publisher: "AX Company",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/logo/logo.png",
    shortcut: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://axionvate.com',
    title: 'AX Company | Data Science, AI & Machine Learning Solutions',
    description: 'Leading provider of Data Science, Artificial Intelligence, and Machine Learning solutions. Transform your business with cutting-edge AI technologies.',
    siteName: 'AX Company',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'AX Company - AI & Data Science Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AX Company | Data Science, AI & Machine Learning Solutions',
    description: 'Leading provider of Data Science, Artificial Intelligence, and Machine Learning solutions. Transform your business with cutting-edge AI technologies.',
    images: ['/images/logo/logo.png'],
    creator: '@axcompany',
  },
  alternates: {
    canonical: 'https://axionvate.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload Font Awesome for better performance */}
        <link
          rel="preload"
          href="/icons/css/all.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="/icons/webfonts/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={kumbhSans.className}>
        <StructuredData />
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
