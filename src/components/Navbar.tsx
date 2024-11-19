// components/Navbar.tsx

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import logo from "../../public/investherd-logo.png";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center h-20 px-6 md:px-12 ${
        isSticky ? "sticky-nav" : ""
      } ${isSticky ? "bg-white" : ""}`}
    >
      {/* Left side: Logo and Name */}
      <div className="flex flex-auto items-center space-x-3">
        <Image src={logo} alt="logo" width={70} height={50} className="mt-3" />
        <h1 className={clsx("text-4xl font-bold", inter.className)}>
          InvestHerd
        </h1>
      </div>

      {/* Right side: Buttons and Menu Toggle */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login">
          <Button text="Log in" variant="primary" />
        </Link>
        <Link href="/learn-more">
          <Button text="Learn More" variant="secondary" />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 60 }}
          className="fixed inset-y-0 left-0 w-1/2 bg-white text-black flex flex-col items-center space-y-6 py-8 z-50"
        >
          <Link href="/login" onClick={toggleMenu}>
            <Button text="Log in" variant="primary" />
          </Link>
          <Link href="/learn-more" onClick={toggleMenu}>
            <Button text="Learn More" variant="secondary" />
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
