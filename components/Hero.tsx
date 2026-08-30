"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-max border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-light">Machine Learning Engineer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white">Abdelfattah</span>
            <span className="text-gradient block">Ahmed</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Machine Learning Engineer specializing in AI, NLP, Computer Vision, AI Agents, RAG Systems and Intelligent Automation.
          </p>

          <div className="flex flex-wrap items-center gap-8 py-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">AI Projects</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">5+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">AI Agents</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">3+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Years Learning AI</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </Link>
            <Link 
              href="/resume.pdf" 
              className="px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold transition-colors flex items-center gap-2 neon-glow"
            >
              <Download size={18} /> Resume
            </Link>
            <Link 
              href="#contact" 
              className="p-4 rounded-full glass-card hover:bg-white/10 text-white transition-colors"
            >
              <Mail size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image/Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden neon-glow neon-border border-2">
            <Image 
              src="/profile.jpg" 
              alt="Abdelfattah Ahmed" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
