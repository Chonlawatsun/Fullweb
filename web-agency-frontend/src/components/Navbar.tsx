"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Change text color based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change color when scrolled more than 50px
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "หน้าหลัก", href: "#home" },
    { name: "บริการ", href: "#services" },
    { name: "ตัวอย่างงาน", href: "#projects" },
    { name: "ขั้นตอนการสั่งทำ", href: "#process" },
    { name: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white border-b border-gray-800 backdrop-blur-md shadow-lg transition-all duration-300 ${
        isScrolled ? "bg-[#121212]" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Full Web Logo"
            className="h-auto max-h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ml-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative pb-1 transition duration-300 ${
                  isActive ? "text-yellow-400" : isScrolled ? "text-white" : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-yellow-400 transform origin-left transition-all duration-300 ease-in-out
                    ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] px-4 py-3 space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`block transition ${
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
