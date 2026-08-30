"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Bot, SearchCode, Eye, MessageSquareText, Workflow } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit size={32} />,
    title: "Machine Learning Solutions",
    description: "End-to-end ML model development, from data preprocessing to model training and deployment for predictive analytics."
  },
  {
    icon: <Bot size={32} />,
    title: "AI Agents Development",
    description: "Building autonomous and semi-autonomous AI agents capable of reasoning, planning, and executing complex tasks."
  },
  {
    icon: <SearchCode size={32} />,
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation systems using advanced vector search to provide LLMs with proprietary context."
  },
  {
    icon: <Eye size={32} />,
    title: "Computer Vision Solutions",
    description: "Real-time object detection, image classification, and OCR systems using state-of-the-art models like YOLOv8."
  },
  {
    icon: <MessageSquareText size={32} />,
    title: "NLP Applications",
    description: "Text classification, semantic search, sentiment analysis, and intelligent chatbots utilizing Transformers and LLMs."
  },
  {
    icon: <Workflow size={32} />,
    title: "Workflow Automation",
    description: "Intelligent automation of business operations utilizing tools like n8n combined with custom AI scripts."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering cutting-edge AI solutions tailored to solve complex business challenges and drive innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
