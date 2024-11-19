// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/investherd-footer-logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper section with logo, social media, and quick links */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex flex-row items-center lg:items-start">
            <Image src={logo} alt="InvestHerd Logo" width={70} height={50} />
            <h2 className="text-3xl font-bold mt-2">InvestHerd</h2>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-2xl">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-400 transition-colors" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Bottom section with copyright */}
        <div className="mt-6 text-center text-sm lg:flex lg:justify-between lg:items-center">
          <p>© {new Date().getFullYear()} InvestHerd. All rights reserved.</p>
          <p className="mt-4 lg:mt-0">
            Designed for your portfolio management needs
          </p>
        </div>
      </div>
    </footer>
  );
}
