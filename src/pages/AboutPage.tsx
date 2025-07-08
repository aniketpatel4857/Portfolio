"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Code2, Database, Server, Globe, Zap, ArrowLeft, Sparkles, Moon, Sun } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface AboutPageProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function AboutPage({ darkMode, setDarkMode }: AboutPageProps) {
  const [cursorVariant, setCursorVariant] = useState("default")

  const buttonEnter = () => setCursorVariant("button")
  const buttonLeave = () => setCursorVariant("default")

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  const skills = [
    {
      name: "React.js",
      level: 75,
      icon: Code2,
      color: darkMode ? "text-blue-400" : "text-blue-600",
      bg: darkMode ? "bg-blue-900/30" : "bg-blue-50",
    },
    {
      name: "Node.js",
      level: 70,
      icon: Server,
      color: darkMode ? "text-green-400" : "text-green-600",
      bg: darkMode ? "bg-green-900/30" : "bg-green-50",
    },
    {
      name: "MongoDB",
      level: 65,
      icon: Database,
      color: darkMode ? "text-emerald-400" : "text-emerald-600",
      bg: darkMode ? "bg-emerald-900/30" : "bg-emerald-50",
    },
    {
      name: "Express.js",
      level: 68,
      icon: Globe,
      color: darkMode ? "text-gray-400" : "text-gray-600",
      bg: darkMode ? "bg-gray-800/30" : "bg-gray-50",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: Code2,
      color: darkMode ? "text-yellow-400" : "text-yellow-600",
      bg: darkMode ? "bg-yellow-900/30" : "bg-yellow-50",
    },
    {
      name: "HTML/CSS",
      level: 85,
      icon: Code2,
      color: darkMode ? "text-orange-400" : "text-orange-600",
      bg: darkMode ? "bg-orange-900/30" : "bg-orange-50",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {darkMode && (
          <>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Back Button and Theme Toggle */}
      <div className="fixed top-8 left-8 right-8 z-40 flex justify-between">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: darkMode ? "0 10px 30px rgba(34, 197, 94, 0.2)" : "0 10px 30px rgba(147, 51, 234, 0.2)",
            }}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            <Button
              variant="outline"
              size="lg"
              className={`backdrop-blur-sm border transition-all duration-500 ${
                darkMode
                  ? "bg-gray-900/80 border-green-500/30 hover:bg-green-900/20 hover:shadow-lg text-green-400"
                  : "bg-white/80 border-purple-200 hover:bg-purple-50 hover:shadow-lg text-purple-600"
              }`}
              asChild
            >
              <Link to="/">
                <ArrowLeft className="h-5 w-5 mr-3" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={toggleTheme}
          className={`p-3 rounded-lg transition-all duration-300 ${
            darkMode
              ? "bg-green-900/30 text-green-400 hover:bg-green-900/50"
              : "bg-purple-100 text-purple-600 hover:bg-purple-200"
          }`}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={buttonEnter}
          onMouseLeave={buttonLeave}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.button>
      </div>

      <div className="pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className={`text-5xl md:text-7xl font-black mb-8 transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className={`text-xl max-w-3xl mx-auto transition-all duration-500 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Junior MERN stack developer passionate about creating amazing web experiences
            </motion.p>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: darkMode ? "0 20px 40px rgba(34, 197, 94, 0.1)" : "0 20px 40px rgba(147, 51, 234, 0.1)",
                }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Card
                  className={`backdrop-blur-sm border shadow-lg h-full transition-all duration-500 ${
                    darkMode ? "bg-gray-900/50 border-green-500/20" : "bg-white/80 border-purple-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl flex items-center transition-colors ${
                        darkMode ? "text-green-400" : "text-purple-600"
                      }`}
                    >
                      <Sparkles className="mr-3 h-6 w-6" />
                      My Journey
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className={`space-y-4 text-lg transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    <p>
                      Hello! I'm Aniket Patel, a passionate junior MERN stack developer based in India. I started my web
                      development journey 3 months ago and have been completely immersed in learning and building
                      projects.
                    </p>
                    <p>
                      I'm focused on mastering MongoDB, Express.js, React, and Node.js to create amazing full-stack web
                      applications. Every day brings new challenges and discoveries that fuel my passion for coding.
                    </p>
                    <p>
                      When I'm not coding, I enjoy exploring cutting-edge technologies, watching development tutorials,
                      and connecting with the incredible developer community online.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: darkMode ? "0 20px 40px rgba(59, 130, 246, 0.1)" : "0 20px 40px rgba(59, 130, 246, 0.1)",
                }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Card
                  className={`backdrop-blur-sm border shadow-lg h-full transition-all duration-500 ${
                    darkMode ? "bg-gray-900/50 border-blue-500/20" : "bg-white/80 border-blue-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl flex items-center transition-colors ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      <Zap className="mr-3 h-6 w-6" />
                      What I'm Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        icon: Code2,
                        title: "Frontend Development",
                        desc: "Creating beautiful user interfaces with React.js",
                        color: darkMode ? "text-blue-400" : "text-blue-600",
                        bg: darkMode ? "bg-blue-900/30" : "bg-blue-50",
                      },
                      {
                        icon: Server,
                        title: "Backend Development",
                        desc: "Building robust APIs with Node.js and Express",
                        color: darkMode ? "text-green-400" : "text-green-600",
                        bg: darkMode ? "bg-green-900/30" : "bg-green-50",
                      },
                      {
                        icon: Database,
                        title: "Database Management",
                        desc: "Working with MongoDB for data storage",
                        color: darkMode ? "text-purple-400" : "text-purple-600",
                        bg: darkMode ? "bg-purple-900/30" : "bg-purple-50",
                      },
                      {
                        icon: Zap,
                        title: "Problem Solving",
                        desc: "Learning to debug and optimize applications",
                        color: darkMode ? "text-orange-400" : "text-orange-600",
                        bg: darkMode ? "bg-orange-900/30" : "bg-orange-50",
                      },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`p-3 rounded-xl ${service.bg}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <service.icon className={`h-5 w-5 ${service.color}`} />
                        </motion.div>
                        <div>
                          <h3
                            className={`font-semibold text-lg transition-colors ${
                              darkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p className={`transition-colors ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {service.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Technical Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: darkMode ? "0 10px 30px rgba(34, 197, 94, 0.1)" : "0 10px 30px rgba(147, 51, 234, 0.1)",
                  }}
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                >
                  <Card
                    className={`backdrop-blur-sm border transition-all duration-500 ${
                      darkMode
                        ? "bg-gray-900/50 border-green-500/20 hover:border-green-500/40 hover:shadow-lg"
                        : "bg-white/80 border-gray-200 hover:border-purple-300 hover:shadow-lg"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className={`p-2 rounded-lg ${skill.bg}`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <skill.icon className={`h-5 w-5 ${skill.color}`} />
                          </motion.div>
                          <span
                            className={`font-semibold text-lg transition-colors ${
                              darkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          className={`font-bold text-xl transition-colors ${
                            darkMode ? "text-green-400" : "text-purple-600"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
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
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Learning Journey
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: darkMode ? "0 20px 40px rgba(34, 197, 94, 0.1)" : "0 20px 40px rgba(147, 51, 234, 0.1)",
                }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Card
                  className={`backdrop-blur-sm border shadow-lg transition-all duration-500 ${
                    darkMode ? "bg-gray-900/50 border-green-500/20" : "bg-white/80 border-purple-200"
                  }`}
                >
                  <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3
                          className={`text-2xl font-bold mb-2 transition-colors ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          Learning MERN Stack Development
                        </h3>
                        <p
                          className={`font-semibold text-lg transition-colors ${
                            darkMode ? "text-green-400" : "text-purple-600"
                          }`}
                        >
                          Self-Taught & Online Courses
                        </p>
                      </div>
                      <span
                        className={`text-lg mt-4 md:mt-0 transition-colors ${
                          darkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        2024 - Present (3 months)
                      </span>
                    </div>
                    <p
                      className={`text-lg leading-relaxed transition-colors ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Currently learning and building web applications using MERN stack, focusing on understanding core
                      concepts and implementing real-world projects. Every day is a new adventure in code!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
