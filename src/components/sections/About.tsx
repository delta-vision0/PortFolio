"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Code, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[150px] -z-10 rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 blur-[150px] -z-10 rounded-full mix-blend-screen" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="rounded-[3rem] glass-panel border border-white/10 overflow-hidden flex items-center justify-center relative group neon-border bg-[#020205] shadow-2xl">
              <img 
                src="/banner.png" 
                alt="Navanath Bhosale Banner" 
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
            </div>
            
            {/* Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 glass-panel p-6 rounded-3xl border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl border border-white/10">
                  <Rocket className="text-primary animate-pulse" size={28} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Current Status</p>
                  <p className="font-bold text-lg text-white">Active Intern</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="inline-block px-4 py-2 glass rounded-full mb-6 border border-white/5">
              <span className="text-primary text-sm font-mono tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Engineering <span className="text-gradient drop-shadow-lg">Intelligence</span>,<br /> 
              Crafting <span className="text-gradient drop-shadow-lg" style={{ animationDelay: '2s' }}>Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
              {portfolioData.personal.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AboutCard 
                icon={<GraduationCap className="text-white" size={24} />}
                title="Education"
                description={portfolioData.education.degree}
                sub={portfolioData.education.institution}
                delay={0.2}
              />
              <AboutCard 
                icon={<Code className="text-white" size={24} />}
                title="Specialization"
                description="Agentic AI & Full Stack"
                sub="RAG Pipelines, LLMs"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, description, sub, delay }: { icon: React.ReactNode, title: string, description: string, sub: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <SpotlightCard className="glass-panel p-6 rounded-[2rem] glass-hover group relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-300 font-medium mb-1">{description}</p>
          <p className="text-xs text-primary/80 font-mono">{sub}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
