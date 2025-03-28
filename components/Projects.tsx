"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/consts';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl  hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 sm:h-40 md:h-48 bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain scale-120"
                  
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                <a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-sm hover:text-primary hover:bg-secondary transition-colors text-secondary bg-primary px-3 py-2 rounded-md border border-primary/80"
>
  <ExternalLink size={16} />
  Live Demo
</a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors hover:bg-primary/10 px-3 py-2 rounded-md border border-primary/80"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}