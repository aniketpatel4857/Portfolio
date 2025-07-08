"use client"

import { motion } from "framer-motion"
import { Code2, Database, Server, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
 const skills = [
  { name: "HTML", level: 98, icon: Server },
  { name: "CSS", level: 95, icon: Globe },
  { name: "React.js", level: 90, icon: Code2 },
  { name: "Node.js", level: 81, icon: Server },
  { name: "MongoDB", level: 62, icon: Database },
  { name: "Express.js", level: 74, icon: Globe },
  { name: "JavaScript", level: 88, icon: Code2 },
  { name: "TypeScript", level: 80, icon: Code2 },
  { name: "Shadcn", level: 90, icon: Code2 },
  { name: "Next.js", level: 85, icon: Code2 },
  { name: "Tailwind CSS", level: 93, icon: Globe },
  { name: "Redux Toolkit", level: 87, icon: Code2 },
  { name: "Git & GitHub", level: 92, icon: Server }
];


  const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Lincpay Solutions",
    period: "2025 – Present",
    description:
      "Leading the development of scalable web applications using the MERN stack, mentoring junior developers, and enforcing best coding practices.",
  },
  {
    title: "Full Stack Developer",
    company: "Sheryians Coding School",
    period: "2024 – 2025",
    description:
      "Designed and maintained client-facing applications with a focus on React.js (frontend) and Node.js (backend) to deliver full-stack solutions.",
  },
  {
    title: "Frontend Developer",
    company: "Sheryians Coding School",
    period: "2023 – 2024",
    description:
      "Built responsive, accessible web interfaces using React.js, and collaborated closely with designers to deliver high-fidelity UIs.",
  },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#022827] via-[#022827] to-[#022827] text-white">
      <motion.nav
        className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/10 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            <Link href="/">Aniket Patel</Link>
          </motion.div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-purple-300">
              About
            </Link>
            <Link href="/projects" className="hover:text-purple-300 transition-colors">
              Projects
            </Link>
          </div>
        </div>
      </motion.nav>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate MERN stack developer with 3+ month of experience creating innovative web solutions
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-300">My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>
                    Hello! I'm Aniket Patel, a passionate MERN stack developer based in India. My journey into web
                    development started during my computer science studies, where I discovered my love for creating
                    digital experiences.
                  </p>
                  <p>
                    I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                    My goal is to create efficient, scalable, and user-friendly applications that solve real-world
                    problems.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge with the developer community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-300">What I Do</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: Code2,
                      title: "Frontend Development",
                      desc: "Creating responsive and interactive user interfaces with React.js",
                    },
                    {
                      icon: Server,
                      title: "Backend Development",
                      desc: "Building robust APIs and server-side logic with Node.js and Express",
                    },
                    {
                      icon: Database,
                      title: "Database Design",
                      desc: "Designing efficient database schemas with MongoDB",
                    },
                    {
                      icon: Zap,
                      title: "Performance Optimization",
                      desc: "Optimizing applications for speed and scalability",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-2 rounded-lg bg-purple-600/20">
                        <service.icon className="h-6 w-6 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="h-6 w-6 text-purple-300" />
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-purple-300 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
