"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Smartphone,
  ArrowRight,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface HomePageProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function HomePage({ darkMode, setDarkMode }: HomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: darkMode ? "rgba(34, 197, 94, 0.2)" : "rgba(147, 51, 234, 0.2)",
      mixBlendMode: "multiply" as const,
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: darkMode ? "rgba(34, 197, 94, 0.8)" : "rgba(147, 51, 234, 0.8)",
    },
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  const buttonEnter = () => setCursorVariant("button")
  const buttonLeave = () => setCursorVariant("default")

  const techStack = [
    {
      icon: Database,
      name: "MongoDB",
      color: darkMode ? "text-green-400" : "text-green-600",
      bgColor: darkMode ? "bg-green-900/30" : "bg-green-50",
      description: "NoSQL Database",
    },
    {
      icon: Server,
      name: "Express.js",
      color: darkMode ? "text-gray-400" : "text-gray-600",
      bgColor: darkMode ? "bg-gray-800/30" : "bg-gray-50",
      description: "Backend Framework",
    },
    {
      icon: Code,
      name: "React",
      color: darkMode ? "text-blue-400" : "text-blue-600",
      bgColor: darkMode ? "bg-blue-900/30" : "bg-blue-50",
      description: "Frontend Library",
    },
    {
      icon: Smartphone,
      name: "Node.js",
      color: darkMode ? "text-green-500" : "text-green-700",
      bgColor: darkMode ? "bg-green-900/30" : "bg-green-50",
      description: "Runtime Environment",
    },
  ]

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className={`cursor fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 ${
          darkMode ? "bg-green-500" : "bg-purple-600"
        }`}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {darkMode ? (
          <>
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            {/* Animated stars */}
            {[...Array(50)].map((_, i) => (
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
        ) : (
          <>
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-40 right-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </>
        )}
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-40 backdrop-blur-md transition-all duration-500 ${
          darkMode ? "bg-black/80 border-b border-green-900/30" : "bg-white/80 border-b border-purple-100"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className={`text-2xl font-bold transition-all duration-500 ${
              darkMode
                ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Aniket Patel
          </motion.div>
          <div className="flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
              <Link
                to="/"
                className={`font-semibold transition-colors ${darkMode ? "text-green-400" : "text-purple-600"}`}
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
              <Link
                to="/about"
                className={`transition-colors ${
                  darkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
              <Link
                to="/projects"
                className={`transition-colors ${
                  darkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Projects
              </Link>
            </motion.div>
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-green-900/30 text-green-400 hover:bg-green-900/50"
                  : "bg-purple-100 text-purple-600 hover:bg-purple-200"
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div className="text-center z-10 max-w-6xl mx-auto px-6" style={{ y }}>
          {/* Welcome Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className={`inline-flex items-center px-6 py-3 rounded-full border font-medium text-lg transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30 text-green-300"
                  : "bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200 text-purple-700"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode ? "0 10px 30px rgba(34, 197, 94, 0.2)" : "0 10px 30px rgba(147, 51, 234, 0.2)",
              }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              <Sparkles className="mr-2 h-5 w-5" />👋 Hello, I'm a Junior Developer
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h1
              className={`text-7xl md:text-8xl lg:text-9xl font-black mb-4 leading-tight transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent"
              }`}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              whileHover={{ scale: 1.02 }}
            >
              MERN Stack
            </motion.h1>
            <motion.h2
              className={`text-4xl md:text-6xl font-bold mb-8 transition-all duration-500 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Developer
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-500 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Learning and building web applications with MongoDB, Express.js, React, and Node.js
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode ? "0 20px 40px rgba(34, 197, 94, 0.3)" : "0 20px 40px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              <Button
                size="lg"
                className={`px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-500 ${
                  darkMode
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                }`}
                asChild
              >
                <Link to="/projects" className="flex items-center">
                  View My Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode ? "0 20px 40px rgba(255, 255, 255, 0.1)" : "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              <Button
                variant="outline"
                size="lg"
                className={`px-10 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-500 ${
                  darkMode
                    ? "border-2 border-green-500/30 text-green-400 hover:bg-green-900/20 bg-black/20"
                    : "border-2 border-purple-300 text-purple-600 hover:bg-purple-50 bg-white/80"
                }`}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center group cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  y: -10,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Card
                  className={`backdrop-blur-sm border transition-all duration-500 ${
                    darkMode
                      ? "bg-gray-900/50 border-green-500/20 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10"
                      : "bg-white/80 border-gray-200 hover:border-purple-300 hover:shadow-xl"
                  }`}
                >
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 ${tech.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className={`h-8 w-8 ${tech.color}`} />
                    </motion.div>
                    <h3
                      className={`font-bold text-lg mb-1 transition-colors ${
                        darkMode
                          ? "text-gray-200 group-hover:text-green-400"
                          : "text-gray-800 group-hover:text-purple-600"
                      }`}
                    >
                      {tech.name}
                    </h3>
                    <p className={`text-sm transition-colors ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            initial={{ opacity: 0 }}
            style={{ animationDelay: "2s" }}
          >
            <ChevronDown className={`h-8 w-8 ${darkMode ? "text-green-400" : "text-purple-400"}`} />
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Sections */}
      <section
        className={`py-20 backdrop-blur-sm transition-all duration-500 ${darkMode ? "bg-gray-900/20" : "bg-white/50"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              }`}
            >
              My Learning Journey
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto transition-all duration-500 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Passionate about creating modern web applications and constantly learning new technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "3 Months",
                subtitle: "Learning Experience",
                description: "Dedicated to mastering MERN stack development",
                icon: "📚",
              },
              {
                title: "15+ Projects",
                subtitle: "Built & Learning",
                description: "Hands-on experience with real-world applications",
                icon: "🚀",
              },
              {
                title: "200+ Hours",
                subtitle: "Coding Practice",
                description: "Continuous learning and skill development",
                icon: "⏰",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Card
                  className={`backdrop-blur-sm border transition-all duration-500 h-full ${
                    darkMode
                      ? "bg-gray-900/50 border-green-500/20 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10"
                      : "bg-white/80 border-gray-200 hover:border-purple-300 hover:shadow-xl"
                  }`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors ${
                        darkMode ? "text-green-400" : "text-purple-600"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <h4
                      className={`text-lg font-semibold mb-3 transition-colors ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {item.subtitle}
                    </h4>
                    <p className={`transition-colors ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {[
          {
            icon: Github,
            href: "#",
            label: "GitHub",
            hoverColor: darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
          },
          {
            icon: Linkedin,
            href: "#",
            label: "LinkedIn",
            hoverColor: darkMode ? "hover:bg-blue-900/30" : "hover:bg-blue-100",
          },
          {
            icon: Mail,
            href: "#",
            label: "Email",
            hoverColor: darkMode ? "hover:bg-green-900/30" : "hover:bg-purple-100",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            className={`p-3 rounded-xl backdrop-blur-sm shadow-lg border transition-all duration-300 group ${
              darkMode ? "bg-gray-900/80 border-green-500/20" : "bg-white/80 border-gray-200"
            } ${social.hoverColor}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            title={social.label}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            <social.icon
              className={`h-5 w-5 transition-colors ${
                darkMode ? "text-gray-400 group-hover:text-green-400" : "text-gray-600 group-hover:text-purple-600"
              }`}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}
