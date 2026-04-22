"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Milestones & <span className="text-accent">Awards</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group glass-hover"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors rotate-3 group-hover:rotate-0 duration-300">
                {index === 0 ? <Star className="text-accent" size={32} /> : 
                 index === 1 ? <Trophy className="text-accent" size={32} /> :
                 index === 2 ? <ShieldCheck className="text-accent" size={32} /> :
                 <Award className="text-accent" size={32} />}
              </div>
              <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">{achievement.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
