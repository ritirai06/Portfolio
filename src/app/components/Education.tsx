import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Machine Learning",
      institution: "IIMT UNIVERSITY",
      period: "2022 - 2026",
      icon: GraduationCap
    },
    {
      degree: "Intermediate",
      field: "PCM (Physics, Chemistry, Mathematics)",
      institution: "G D Global School",
      period: "2020 - 2022",
      icon: Award
    }
  ];

  const certifications = [
    "Certificate of Acknowledgement - Bhartiya Antariksh Hackathon (ISRO)",
    "NSDC Certificate in Data Science (Skill India)",
    "DBMS Certificate by NPTEL (IIT Kharagpur)",
    "Machine Learning and Pattern Recognition - Samatrix",
    "Joy of Computing Using Python - NPTEL (IIT Madras)",
    "Foundation of AI Data Science & Data Analytics - Samatrix"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Academic achievements and professional certifications
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-full">
                    <edu.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-cyan-400 mb-2">{edu.field}</p>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-purple-300 text-sm">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
                <p className="text-gray-300 text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
