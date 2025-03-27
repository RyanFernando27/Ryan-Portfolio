"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/consts';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 md:p-8 rounded-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 md:p-8 rounded-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Connect with me</h3>
            <div className="space-y-4 md:space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-base md:text-lg hover:text-primary transition-colors"
              >
                <Mail size={24} />
                {personalInfo.email}
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base md:text-lg hover:text-primary transition-colors"
              >
                <Github size={24} />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base md:text-lg hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base md:text-lg hover:text-primary transition-colors"
              >
                <Twitter size={24} />
                Twitter
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base md:text-lg hover:text-primary transition-colors"
              >
                <Instagram size={24} />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}