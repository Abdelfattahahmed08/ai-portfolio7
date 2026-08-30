"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed mx-auto md:mx-0">
            I build intelligent AI systems that automate workflows, improve business operations, and create real-world impact using modern AI technologies. My expertise spans across Machine Learning, Deep Learning, NLP, Computer Vision, AI Agents, RAG Systems, and Intelligent Automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            <p className="text-primary font-medium mb-4">Faculty of Artificial Intelligence</p>
            <p className="text-gray-400">
              Kafr El Sheikh University. Focused on advanced AI concepts, machine learning algorithms, and intelligent systems design.
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 text-accent relative z-10">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Experience</h3>
            <p className="text-accent font-medium mb-4 relative z-10">Machine Learning Engineer</p>
            <p className="text-gray-400 relative z-10">
              Hands-on experience in building AI agents, RAG systems, and automating intelligent workflows for business operations.
            </p>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
            <p className="text-blue-400 font-medium mb-4">Artificial Intelligence Diploma</p>
            <p className="text-gray-400">
              Comprehensive diploma covering Deep Learning, NLP, Computer Vision, and modern AI architectures.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
