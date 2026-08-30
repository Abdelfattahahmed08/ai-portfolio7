"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance AI Engineer",
    period: "2023 - Present",
    description: "Developing intelligent automation systems, bespoke LLM applications, and RAG solutions for various clients. Designing custom agents to optimize business workflows."
  },
  {
    role: "Artificial Intelligence Diploma",
    period: "2023",
    description: "Intensive program covering the fundamentals and advanced topics of Deep Learning, Natural Language Processing, and Computer Vision architectures."
  },
  {
    role: "Machine Learning Intern",
    period: "2022",
    description: "Gained hands-on experience in data preprocessing, model evaluation, and building predictive analytics models utilizing Scikit-Learn and TensorFlow."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:ml-0" : "md:pl-16 md:ml-auto"}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(168,85,247,0.8)] 
                -left-[39px] md:-left-[8px] md:translate-x-0
                ${index % 2 === 0 ? "md:left-auto md:-right-[8px]" : ""}`} 
              />
              
              <div className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-colors">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-4">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{exp.role}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
