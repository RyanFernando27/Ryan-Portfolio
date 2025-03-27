"use client";

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo } from '@/lib/consts';

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = projectsSection.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/hero-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/60 " />
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 md:mb-6 lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-muted-foreground mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {personalInfo.role}
        </motion.h2>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href={personalInfo.resumeUrl}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            download
          >
            <Download size={20} />
            Download CV
          </a>
          
          <a 
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#0077B5]/90 transition-colors"
          >
            <Linkedin size={20} />
       
          </a>
          
          <a 
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#333] text-white rounded-lg hover:bg-[#333]/90 transition-colors"
          >
            <Github size={20} />
          
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          onClick={handleScrollToProjects}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          View Projects
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}