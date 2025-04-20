// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "หน้าหลัก", href: "/" },
    { name: "บริการ", href: "/services" },
    { name: "ตัวอย่างงาน", href: "/portfolio" },
    { name: "ติดต่อเรา", href: "/contact" },
    { name: "ขั้นตอนการสั่งทำ", href: "/order-process" },
  ];

  return (
    <header className="bg-[#121212] text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-medium">FULL WEB</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
  {navItems.map((item) => {
    const isActive = pathname === item.href;
    return (
      <a
        key={item.name}
        href={item.href}
        className={`group relative pb-1 transition duration-300 ${
          isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
        }`}
      >
        {item.name}
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-yellow-400 transform origin-left transition-all duration-300 ease-in-out
            ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}
          `}
        />
      </a>
    );
  })}
</nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
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
