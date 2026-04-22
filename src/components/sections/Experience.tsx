"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Work <span className="text-secondary">Experience</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-secondary rounded-full mt-2" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-2 md:-translate-x-2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass p-8 rounded-3xl relative glass-hover overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <Briefcase size={48} className="text-secondary" />
                    </div>
                    
                    <div className="flex flex-col gap-1 mb-4">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-secondary font-semibold text-lg">{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{exp.period || "Present"}</span>
                      </div>
                      {exp.period === "On-site" && (
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>Pune, India</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty spacer for desktop layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
