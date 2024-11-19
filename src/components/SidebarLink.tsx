import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Define the props interface
interface SidebarLinkProps {
  href: string;
  icon: ReactNode; // ReactNode allows any valid JSX (e.g., <FaHome />)
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label }) => (
  <Link href={href} className={clsx(
    'flex items-center space-x-3 px-4 py-2 rounded-md transition duration-200 transform hover:bg-gray-700 hover:scale-105 active:scale-95',
    inter.className
  )}>
    <span className="text-xl">{icon}</span>
    <span className="text-lg">{label}</span>
  </Link>
);

export default SidebarLink;
