"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
      
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Agentic AI
        </Link>

      
        <div className="hidden md:flex space-x-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/contact" label="Contact" />
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none text-yellow-400 hover:text-yellow-300 transition-all"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-purple-900 transition-all overflow-hidden ${
          isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <NavItem href="/" label="Home" mobile />
        <NavItem href="/about" label="About" mobile />
        <NavItem href="/blog" label="Blog" mobile />
        <NavItem href="/contact" label="Contact" mobile />
      </div>
    </nav>
  );
}


function NavItem({ href, label, mobile }: { href: string; label: string; mobile?: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 ${
        mobile
          ? "text-lg text-gray-300 hover:text-yellow-300 transition-all"
          : "hover:text-yellow-300 transition-all duration-300"
      }`}
    >
      {label}
    </Link>
  );
}
