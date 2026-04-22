"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Sprout, 
  ShoppingCart, 
  MessageSquare, 
  GlassWater,
  Layers,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/ui/SpotlightCard";

const projectIcons: Record<string, any> = {
  Sprout: Sprout,
  ShoppingCart: ShoppingCart,
  MessageSquare: MessageSquare,
  GlassWater: GlassWater,
};

const filterOptions = ["All", "AI", "Web", "Game"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = portfolioData.projects.filter(
    (project) => filter === "All" || project.type.includes(filter)
  );

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="text-primary" size={20} />
              <span className="text-primary font-mono text-xs uppercase tracking-widest">Showcase</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
          </div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  filter === opt 
                    ? "bg-primary text-black shadow-lg" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = projectIcons[project.icon] || Layers;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <SpotlightCard className="glass rounded-[32px] overflow-hidden border border-white/10 glass-hover h-full flex flex-col">
                    {/* Project Header/Icon Container */}
                    <div className="relative h-56 bg-[#0a0a0f] flex items-center justify-center overflow-hidden border-b border-white/5">
                      {/* Abstract Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                      
                      {/* Animated Glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Centered Icon Box */}
                      <div className="relative z-10 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_40px_-15px_rgba(0,229,255,0.3)]">
                        <Icon size={40} className="text-primary" />
                      </div>

                      {/* Floating Badges */}
                      <div className="absolute top-6 left-6 flex gap-2">
                        <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border-primary/20">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 flex items-center justify-between group-hover:text-primary transition-colors">
                        {project.title}
                        <ArrowTopRightIcon />
                      </h3>
                      <p className="text-primary/80 font-medium text-sm mb-4">{project.subtitle}</p>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {project.features.slice(0, 3).map((f, i) => (
                            <div key={i} className="w-8 h-8 rounded-full glass flex items-center justify-center border border-white/10" title={f}>
                              <Sparkles size={12} className="text-primary/50" />
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                              <GithubIcon size={20} />
                            </a>
                          )}
                          <button className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                            <ExternalLink size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowTopRightIcon() {
  return (
    <svg 
      width="24" height="24" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
    >
      <path d="M7 17l10-10M7 7h10v10" />
    </svg>
  );
}
