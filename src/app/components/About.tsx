import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart, FileText, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '../../imports/WhatsApp_Image_2026-03-31_at_5.37.20_PM.jpeg';
import resumePDF from '../../imports/Riti_MainResume.pdf';
import profilePDF from '../../imports/Profile.pdf';

export function About() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <ImageWithFallback 
                  src={profileImage} 
                  alt="Riti Rai" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              AI/ML Engineer Specializing in Intelligent, Scalable AI solutions
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm an AI/ML Engineer specializing in building intelligent, scalable, and real-world AI solutions. My expertise lies in Machine Learning, Deep Learning, 
              Natural Language Processing (NLP), and Computer Vision, where I design systems that transform raw data 
              into meaningful insights and automation.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I have hands-on experience developing end-to-end AI pipelines — from data preprocessing and model building 
              to deployment and optimization. I've worked on LLM-based applications using LangChain and LangGraph, 
              and integrated cloud-based deployment solutions with AWS, FastAPI, Flask, and Streamlit.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>Fluent in algorithms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>Powered by AI Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>Passionate about AI</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "I enjoy solving complex problems and working on innovative projects that create real impact."
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={resumePDF}
                download="Riti_MainResume.pdf"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FileText size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}