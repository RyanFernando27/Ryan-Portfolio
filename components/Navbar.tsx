"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-5xl font-bold hover:text-primary transition-colors"
            onClick={(e) => handleClick(e, 'hero')}
          >
            
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <a 
              href="#about" 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleClick(e, 'about')}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleClick(e, 'projects')}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact
            </a>
            <ThemeToggle />
          </div>

          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}