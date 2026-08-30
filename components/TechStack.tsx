"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", 
  "Scikit-Learn", "OpenCV", "YOLOv8", "NLP", "Transformers", 
  "LangChain", "LlamaIndex", "FAISS", "Qdrant", "Weaviate", 
  "FastAPI", "Flask", "Streamlit", "OpenAI", "Gemini", 
  "Ollama", "Docker", "Git", "GitHub", "Linux", "n8n"
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive arsenal of modern tools and frameworks used to build premium AI solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card px-6 py-3 rounded-full text-sm font-medium text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
