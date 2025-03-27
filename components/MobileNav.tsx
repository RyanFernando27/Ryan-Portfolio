"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-secondary rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card shadow-xl z-50 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-6">
                <a
                  href="#hero"
                  className="block text-lg hover:text-primary transition-colors"
                  onClick={() => handleClick('hero')}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-lg hover:text-primary transition-colors"
                  onClick={() => handleClick('about')}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-lg hover:text-primary transition-colors"
                  onClick={() => handleClick('projects')}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-lg hover:text-primary transition-colors"
                  onClick={() => handleClick('contact')}
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-border">
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}