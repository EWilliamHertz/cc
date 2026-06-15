"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Residential", href: "/consumer", description: "Energy savings for your home." },
    { name: "Commercial", href: "/retail", description: "Industrial efficiency solutions." },
    { name: "Investor", href: "/invest", description: "Series A funding & growth." },
    { name: "Blog", href: "/blog", description: "Latest green-tech updates." },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-green-900/20">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-gray-900 leading-none">
                CLIMATE<span className="text-green-600">CURTAINS</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] leading-none mt-1">
                Global Patent
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors flex items-center gap-1"
                >
                  {link.name}
                </Link>
                <div className="absolute top-full left-0 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/consumer/product"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-sm"
            >
              Order
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-900 hover:text-green-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/consumer/product"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-xl font-semibold"
              >
                Order
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
