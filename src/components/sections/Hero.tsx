"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-700 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-8 neon-border"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-xs font-mono text-white tracking-widest uppercase">
              Available for Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter"
          >
            Hi, I&apos;m <br className="md:hidden" />
            <span className="text-gradient drop-shadow-2xl">{portfolioData.personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-300 font-medium mb-8 h-12 flex items-center justify-center gap-3"
          >
            <Terminal className="text-secondary hidden md:block" />
            <TypeAnimation
              sequence={[
                "AI/ML Developer",
                2000,
                "Full Stack Web Developer",
                2000,
                "Agentic AI Specialist",
                2000,
                "RAG Pipeline Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient-static"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {portfolioData.personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Magnetic intensity={0.2}>
              <a
                href="#projects"
                className="relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group hover:scale-105"
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" />
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <a 
                href="/resume.pdf" 
                download
                className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105 neon-border group"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
