import { Metadata } from 'next';

const TITLE = 'InvestHerd';
const DESCRIPTION =
  'InvestHerd helps you seamlessly manage multiple family trading accounts, providing insights into holdings, overlap, and efficient margin management with AI support.';

const PREVIEW_IMAGE_URL = '/assets/investherd-logo.png';
const ALT_TITLE = 'InvestHerd Dashboard Overview';
const BASE_URL = 'https://investherd.in';

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/candlestick.svg',
  },
  applicationName: 'InvestHerd',
  creator: 'InvestHerd Team',
  twitter: {
    creator: '@InvestHerd',
    title: 'InvestHerd - Simplifying Family Portfolio Management',
    description:
      'InvestHerd consolidates multiple accounts into one dashboard, providing insights for smarter investment management.',
    card: 'summary_large_image',
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: 'InvestHerd - Advanced Portfolio Management',
    description:
      'Easily consolidate and analyze your family trading accounts with InvestHerd, offering intelligent insights for better investment management.',
    siteName: 'InvestHerd',
    url: BASE_URL,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: 'Finance',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'InvestHerd',
    'portfolio management',
    'family trading',
    'multi-account management',
    'AI margin management',
    'investment tracking',
  ],
  metadataBase: new URL(BASE_URL),
};
