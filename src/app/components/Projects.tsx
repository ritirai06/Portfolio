import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Users, Brain, TrendingUp, HeartPulse, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "Panchayat",
      description: "AI-Powered Smart Society Management System with Admin & Resident modules, AI chatbot + RAG-based Bylaw Bot, and Voice-to-Ticket system for real-time complaint management",
      icon: Users,
      tech: ["React", "Node.js", "MongoDB", "LLM", "RAG", "Firebase", "Socket.IO"],
      gradient: "from-blue-400 to-purple-500",
      github: "https://github.com/ritirai06/Panchayat-Smart-Society-Management-System"
    },
    {
      title: "NeuroPilot",
      description: "AI Agent System for executing tasks via natural language commands with NLP-based intent detection and real-time decision-making pipeline",
      icon: Brain,
      tech: ["Python", "NLP", "AI Agents", "Automation"],
      gradient: "from-purple-400 to-pink-500",
      github: "https://github.com/ritirai06/NEUROAI-PILOT"
    },
    {
      title: "TradeMind AI",
      description: "Stock Market Prediction system using ML models for stock trend prediction with time-series forecasting and analytics visualization",
      icon: TrendingUp,
      tech: ["Python", "Machine Learning", "Time-Series", "Analytics","React"],
      gradient: "from-green-400 to-blue-500",
      github: "https://github.com/ritirai06/Trademind-AI"
    },
    {
      title: "SwasthMate",
      description: "Secure and intelligent medical report analysis system using OCR (Azure Form Recognizer), NLP, and AI chatbots (Gemini & Cohere) with voice interaction for clinical health insights",
      icon: HeartPulse,
      tech: ["Flask", "Python", "Azure OCR", "NLP", "Gemini API", "Cohere API", "Speech API"],
      gradient: "from-rose-400 to-pink-500",
      github: "https://github.com/ritirai06/SWASTHMATE"
    },
    {
      title: "Women Health Insight System",
      description: "AI-powered period tracker and menstrual health analysis platform using machine learning (Random Forest) for customized predictions and health analytics",
      icon: Heart,
      tech: ["Python", "Streamlit", "Random Forest", "Machine Learning", "Data Analysis"],
      gradient: "from-pink-400 to-rose-500",
      github: "https://github.com/ritirai06/Women-Health-Insight-System"
    }
  ];


  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      {(project as any).external && (
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" asChild>
                          <a href={(project as any).external} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}