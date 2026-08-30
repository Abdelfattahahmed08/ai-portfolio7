"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// Github SVG Component
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const projects = [
  {
    title: "SmartANPR System",
    description: "Real-time Automatic Number Plate Recognition using YOLOv8, OCR, tracking and speed estimation.",
    tech: ["YOLOv8", "OpenCV", "Python", "OCR"],
    github: "https://github.com/a7medabdullah7",
  },
  {
    title: "Explainable RAG Technical Support System",
    description: "Explainable Retrieval-Augmented Generation system using vector search and LLMs.",
    tech: ["LangChain", "FAISS", "LlamaIndex", "OpenAI"],
    github: "https://github.com/a7medabdullah7",
  },
  {
    title: "AI Customer Support System",
    description: "AI-powered support platform with semantic search and automated responses.",
    tech: ["Python", "FAISS", "Sentence Transformers", "Ollama"],
    github: "https://github.com/a7medabdullah7",
  },
  {
    title: "AI Car Advisor",
    description: "Arabic NLP recommendation system for vehicle suggestions.",
    tech: ["NLP", "Python", "Transformers"],
    github: "https://github.com/a7medabdullah7",
  },
  {
    title: "Smart Agriculture System",
    description: "Agricultural monitoring and recommendations using AI and Computer Vision.",
    tech: ["YOLOv8", "OpenCV", "Flask"],
    github: "https://github.com/a7medabdullah7",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work in building advanced AI systems and intelligent applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="relative h-64 w-full bg-primary/10 overflow-hidden flex items-center justify-center">
                {/* Project Image Placeholder - abstract representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
                <div className="text-primary/30 group-hover:scale-110 transition-transform duration-700 font-mono text-xl">
                  {project.title.split(' ')[0]}_SYSTEM
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed min-h-[3rem]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors ml-auto"
                  >
                    View Details <ExternalLink size={18} />
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
