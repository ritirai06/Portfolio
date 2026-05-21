import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Atom,
  BarChart3,
  Brain,
  Cpu,
  Network,
  MessageSquare,
  Sparkles,
  Bot,
  GitFork,
  Plug,
  Eye,
  Search,
  Zap,
  Server,
  Globe,
  Table,
  Cloud,
  Coins,
  Code,
  Paintbrush,
  Braces
} from 'lucide-react';

export function TechStack() {
  const techCategories = [
    {
      category: "AI/ML & Generative AI",
      skills: [
        { name: "AI", level: 90, icon: <Brain className="w-5 h-5 text-purple-400" /> },
        { name: "Machine Learning", level: 90, icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
        { name: "Deep Learning", level: 85, icon: <Network className="w-5 h-5 text-pink-400" /> },
        { name: "NLP", level: 85, icon: <MessageSquare className="w-5 h-5 text-teal-400" /> },
        { name: "GEN-AI", level: 85, icon: <Sparkles className="w-5 h-5 text-yellow-400" /> },
        { name: "Agentic AI", level: 85, icon: <Bot className="w-5 h-5 text-orange-400" /> },
        { name: "LangChain", level: 90, icon: <GitFork className="w-5 h-5 text-lime-400" /> },
        { name: "LangGraph", level: 85, icon: <Network className="w-5 h-5 text-emerald-400" /> },
        { name: "MCP", level: 85, icon: <Plug className="w-5 h-5 text-cyan-400" /> },
        { name: "Open-CV", level: 85, icon: <Eye className="w-5 h-5 text-red-400" /> },
        { name: "RAG", level: 88, icon: <Search className="w-5 h-5 text-violet-400" /> }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: <Code2 className="w-5 h-5 text-blue-400" /> },
        { name: "JavaScript", level: 90, icon: <Braces className="w-5 h-5 text-yellow-400" /> },
        { name: "SQL", level: 90, icon: <Database className="w-5 h-5 text-amber-400" /> },
        { name: "React", level: 80, icon: <Atom className="w-5 h-5 text-sky-400" /> },
        { name: "HTML", level: 90, icon: <Code className="w-5 h-5 text-orange-500" /> },
        { name: "CSS", level: 85, icon: <Paintbrush className="w-5 h-5 text-blue-500" /> },
        { name: "R", level: 80, icon: <BarChart3 className="w-5 h-5 text-indigo-400" /> }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "FastAPI", level: 90, icon: <Zap className="w-5 h-5 text-emerald-400" /> },
        { name: "Flask", level: 88, icon: <Server className="w-5 h-5 text-slate-400" /> },
        { name: "REST API", level: 90, icon: <Globe className="w-5 h-5 text-blue-400" /> }
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 95, icon: <Table className="w-5 h-5 text-green-500" /> },
        { name: "PostgreSQL", level: 85, icon: <Database className="w-5 h-5 text-blue-500" /> },
        { name: "MySQL", level: 88, icon: <Database className="w-5 h-5 text-orange-500" /> },
        { name: "AWS", level: 80, icon: <Cloud className="w-5 h-5 text-orange-400" /> },
        { name: "DynamoDB", level: 90, icon: <Coins className="w-5 h-5 text-purple-500" /> }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-xl"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}