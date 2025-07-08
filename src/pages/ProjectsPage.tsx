"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ExternalLink, Github, Code, Database, Server, Smartphone, ArrowLeft, Star, Moon, Sun } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface ProjectsPageProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function ProjectsPage({ darkMode, setDarkMode }: ProjectsPageProps) {
  const [cursorVariant, setCursorVariant] = useState("default")

  const buttonEnter = () => setCursorVariant("button")
  const buttonLeave = () => setCursorVariant("default")

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with user authentication, product management, and shopping cart functionality.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      category: "Full Stack",
      gradient: darkMode ? "from-green-500 to-emerald-500" : "from-purple-500 to-blue-500",
    },
    {
      title: "Real-Time Chat App",
      description: "A dynamic chat application with Socket.io for instant messaging and real-time notifications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      category: "Full Stack",
      gradient: darkMode ? "from-teal-500 to-green-500" : "from-green-500 to-blue-500",
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management app with CRUD operations and user authentication.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Express", "MongoDB", "JWT"],
      github: "#",
      live: "#",
      category: "Full Stack",
      gradient: darkMode ? "from-emerald-500 to-teal-500" : "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application with location-based forecasts and beautiful animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "CSS"],
      github: "#",
      live: "#",
      category: "Frontend",
      gradient: darkMode ? "from-green-600 to-emerald-600" : "from-orange-500 to-red-500",
    },
    {
      title: "Blog Platform",
      description: "A feature-rich blog platform with post creation, editing, and user comment system.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      category: "Full Stack",
      gradient: darkMode ? "from-teal-600 to-green-600" : "from-teal-500 to-green-500",
    },
    {
      title: "Portfolio Showcase",
      description: "A stunning portfolio website with modern animations and responsive design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "#",
      live: "#",
      category: "Frontend",
      gradient: darkMode ? "from-green-500 to-teal-500" : "from-indigo-500 to-purple-500",
    },
  ]

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return Code
      case "node.js":
        return Server
      case "mongodb":
        return Database
      case "express":
        return Server
      default:
        return Smartphone
    }
  }

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {darkMode && (
          <>
            {[...Array(40)].map((_, i) => (
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
        <div className="max-w-7xl mx-auto px-6">
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
              My Projects
            </motion.h1>
            <motion.p
              className={`text-xl max-w-3xl mx-auto transition-all duration-500 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A showcase of my journey in MERN stack development
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group cursor-pointer"
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Card
                  className={`backdrop-blur-sm border transition-all duration-500 h-full overflow-hidden ${
                    darkMode
                      ? "bg-gray-900/50 border-green-500/20 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10"
                      : "bg-white/80 border-gray-200 hover:border-purple-300 hover:shadow-xl"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                    />
                    <div className="absolute top-4 right-4">
                      <motion.div whileHover={{ scale: 1.05, rotate: 5 }}>
                        <Badge
                          className={`font-semibold ${
                            darkMode ? "bg-green-600 text-white" : "bg-purple-600 text-white"
                          }`}
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle
                      className={`text-xl transition-colors ${
                        darkMode
                          ? "text-gray-200 group-hover:text-green-400"
                          : "text-gray-800 group-hover:text-purple-600"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className={`leading-relaxed transition-colors ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => {
                        const IconComponent = getTechIcon(tech)
                        return (
                          <motion.div
                            key={techIndex}
                            className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                              darkMode
                                ? "bg-gray-800/50 text-gray-300 hover:bg-green-900/30"
                                : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <IconComponent className="h-3 w-3" />
                            <span>{tech}</span>
                          </motion.div>
                        )
                      })}
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className={`w-full transition-all duration-300 ${
                            darkMode
                              ? "border-green-500/30 text-green-400 hover:bg-green-900/20 hover:border-green-500/50 bg-gray-900/20"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white"
                          }`}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          boxShadow: darkMode
                            ? "0 10px 20px rgba(34, 197, 94, 0.3)"
                            : "0 10px 20px rgba(147, 51, 234, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white`}
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: darkMode ? "0 20px 40px rgba(34, 197, 94, 0.2)" : "0 20px 40px rgba(147, 51, 234, 0.2)",
              }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              <Card
                className={`border max-w-4xl mx-auto transition-all duration-500 ${
                  darkMode
                    ? "bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30"
                    : "bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200"
                }`}
              >
                <CardContent className="p-12 text-center">
                  <motion.div
                    className="flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star className={`h-12 w-12 ${darkMode ? "text-green-400" : "text-purple-600"}`} />
                  </motion.div>
                  <motion.h3
                    className={`text-3xl md:text-4xl font-bold mb-6 transition-colors ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    Ready to Collaborate?
                  </motion.h3>
                  <p
                    className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed transition-colors ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    I'm always excited to work on new projects and learn from experienced developers. Let's create
                    something incredible together!
                  </p>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: darkMode
                        ? "0 20px 40px rgba(34, 197, 94, 0.3)"
                        : "0 20px 40px rgba(147, 51, 234, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className={`px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-500 ${
                        darkMode
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      }`}
                    >
                      <Star className="mr-3 h-5 w-5" />
                      Get In Touch
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
