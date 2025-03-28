"use client";

import { motion } from 'framer-motion';

import { socialLinks} from '@/lib/consts';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold">RF</h1>
                <p className="text-muted-foreground">
                  Building digital experiences with passion and precision.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500" /> by Shalindu Ryan
              </p>
            </div>
          </div>
        </footer>
  );
}