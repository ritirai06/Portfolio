import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "AI/ML Trainee",
      company: "Benthon Labs",
      period: "October 2025 - May 2026",
      description: "Developing scalable Machine Learning and Generative AI solutions. Built predictive models, recommendation systems, and AI-powered automation tools. Working on NLP, Computer Vision, Deep Learning, and Transformer-based architectures while developing LLM-based applications using LangChain and LangGraph.",
      icon: TrendingUp,
      skills: ["Python","AI","Machine Learning","Deep Learning","NLP","Open-CV","GEN AI","MCP","Langchain","Langgraph","React","TensorFlow","PyTorch","Streamlit"]
    },
    {
      title: "AI Software Developer",
      company: "IIMT Business Incubator Foundation",
      period: "May 2025 - August 2025",
      description: "Developed Medical Analyzer - an AI-powered healthcare system using OCR, NLP, and predictive modeling. Built AI/NLP models with 92%+ accuracy for analyzing medical reports. Reduced report interpretation time by over 60% through intelligent automation.",
      icon: GraduationCap,
      skills: ["AI","Machine Learning","Deep Learning","NLP","Open-CV","GEN AI","Scikit-learn","OpenCV","Flask","React.js","HTML","CSS"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            My journey in data science and AI engineering
          </p>
        </motion.div>

        {/* Mobile: simple vertical stack | Desktop: alternating timeline */}
        <div className="relative">
          {/* Center line - desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          <div className="flex flex-col gap-8 md:gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative md:flex md:items-center"
              >
                {/* Desktop timeline node */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10" />

                {/* Card — full width mobile, half width desktop alternating */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5 sm:p-6 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start sm:items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-full shrink-0">
                        <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400 text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300 text-sm sm:text-base mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
