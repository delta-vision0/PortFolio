"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [formState, setFormState] = React.useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const whatsappNumber = portfolioData.personal.phone.replace(/[^0-9]/g, "");
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Mock submission delay for visual feedback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setFormState("success");
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let&apos;s <span className="text-primary">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              I&apos;m always open to discussing new projects, internship opportunities, or creative ideas.
            </p>

            <div className="space-y-8">
              <ContactInfoItem
                icon={<Mail className="text-primary" />}
                label="Email"
                value={portfolioData.personal.email}
                link={`mailto:${portfolioData.personal.email}`}
              />
              <ContactInfoItem
                icon={<Phone className="text-primary" />}
                label="Phone"
                value={portfolioData.personal.phone}
                link={`tel:${portfolioData.personal.phone.replace(/\+/g, "")}`}
              />
              <ContactInfoItem
                icon={<GithubIcon className="text-primary" size={24} />}
                label="GitHub"
                value="delta-vision0"
                link={portfolioData.personal.github}
              />
              <ContactInfoItem
                icon={<MapPin className="text-primary" />}
                label="Location"
                value="Kolhapur / Pune, India"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. Redirecting to WhatsApp...</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project Inquiry"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                    <textarea
                      name="message"
                      required
                      placeholder="How can I help you?"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-4 bg-primary text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <Send size={18} />
                        </motion.div>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value, link }: { icon: React.ReactNode, label: string, value: string, link?: string }) {
  const content = (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</p>
        <p className="text-lg font-bold group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{content}</a> : content;
}
