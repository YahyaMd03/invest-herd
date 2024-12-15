import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site-config';
import { Toaster } from 'sonner';
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/lib/provider/providers";

const satoshi = localFont({
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/satoshi.ttf',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-satoshi antialiased',
          satoshi.variable,
        )}
      >
        <Providers>
          {children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}