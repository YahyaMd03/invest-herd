'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { FaBars, FaTimes, FaHome, FaUser, FaChartLine, FaFileAlt, FaCog } from 'react-icons/fa';
import logo from '../../public/investherd-footer-logo.png';
import SidebarLink from './SidebarLink';

const inter = Inter({ subsets: ['latin'] });

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Toggle Icon for Mobile Screens */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className={clsx(
            "lg:hidden fixed top-4 text-black text-2xl focus:outline-none z-50 transition-all duration-300",
            isOpen ? "left-64" : "left-4" // Moves icon based on sidebar state
          )}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed lg:relative bg-black text-white w-64 h-screen p-4 transition-transform duration-300 z-40',
          {
            'transform -translate-x-full lg:translate-x-0': isMobile && !isOpen,
            'transform translate-x-0': !isMobile || isOpen,
          }
        )}
      >
        {/* Company Logo and Name */}
        <div className="flex items-center space-x-3 mt-4 mb-8">
          <Image src={logo} alt="InvestHerd Logo" width={40} height={40} />
          <h1 className={clsx('text-2xl font-bold', inter.className)}>InvestHerd</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <SidebarLink href="/dashboard" icon={<FaHome />} label="Dashboard" />
          <SidebarLink href="/accounts" icon={<FaUser />} label="Accounts" />
          <SidebarLink href="/analytics" icon={<FaChartLine />} label="Analytics" />
          <SidebarLink href="/reports" icon={<FaFileAlt />} label="Reports" />
          <SidebarLink href="/settings" icon={<FaCog />} label="Settings" />
        </nav>
      </aside>
    </div>
  );
};


export default Sidebar;
