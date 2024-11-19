// components/Hero.tsx
import Button from './Button';
import Link from 'next/link';
import { Inter, Roboto } from 'next/font/google';

const headingFont = Inter({ weight: '800', subsets: ['latin'] });
const sentenceFont = Roboto({ weight: '400', subsets: ['latin'] });

export default function Hero() {
  return (
<section className="relative flex flex-col items-center justify-start h-[90vh] mt-8 overflow-hidden max-w-screen-lg mx-auto px-4">
  <h1 className={`text-3xl md:text-4xl lg:text-6xl ${headingFont.className} text-center text-black mt-12 py-8`}>
    Unified family portfolio at your fingertips
  </h1>
  
  <p className={`text-2xl md:text-3xl lg:text-4xl text-center text-gray-700 mt-4 ${sentenceFont.className}`}>
    Simplifying your portfolio management across multiple accounts.
    Track, analyze, and optimize your investments all in one place.
  </p>

  <div className="mt-6">
    <Link href="/signup">
      <Button text="Sign Up" variant="primary" />
    </Link>
  </div>
</section>

  );
}
