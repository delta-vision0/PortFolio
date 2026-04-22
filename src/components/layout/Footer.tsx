import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-gray-500 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-gray-500 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
          </div>
          <div className="text-gray-500 text-xs font-mono">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
