"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
        isScrolled ? "top-4" : "top-0"
      )}
    >
      <div 
        className={cn(
          "w-full transition-all duration-500",
          isScrolled 
            ? "max-w-4xl mx-4 rounded-[2rem] glass-panel border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "container mx-auto"
        )}
      >
        <div className={cn(
          "flex justify-between items-center px-6 transition-all duration-500",
          isScrolled ? "py-3" : "py-6"
        )}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 relative group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-primary/50 transition-colors shadow-lg">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-bold text-gradient leading-tight">Navanath</span>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Dev</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group rounded-full hover:bg-white/10"
              >
                {link.name}
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass rounded-full hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all group"
            >
              <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 glass rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="flex flex-col p-6 space-y-4 bg-black/40 backdrop-blur-3xl rounded-b-[2rem]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors hover:translate-x-2 transform duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex space-x-4 pt-4 border-t border-white/10">
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full">
                    <GithubIcon size={20} className="text-gray-400 hover:text-primary" />
                  </a>
                  <a href={`mailto:${portfolioData.personal.email}`} className="p-3 glass rounded-full">
                    <Mail size={20} className="text-gray-400 hover:text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
