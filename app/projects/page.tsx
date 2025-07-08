"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Contact from "../about/Contact";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sundown Studio",
      description:
        "Inspired by Sundown Studio – This frontend rebuild focuses on interactive UI/UX, GSAP animations, and responsive design patterns.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "Locomotive Scroll",
        "ScrollTrigger",
        "Shery.js",
      ],
      github: "https://github.com/aniketpatel4857/sundown",
      live: "https://aniketpatel4857.github.io/sundown/",
      category: "Frontend",
    },
    {
      title: "Interactive 3D Website",
      description:
        "A visually stunning 3D website featuring smooth animations, scroll-based transitions, and immersive GSAP + Three.js experiences to showcase modern web design skills.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "Three.js",
        "ScrollTrigger",
      ],
      github: "https://github.com/aniketpatel4857/3d-website",
      live: "https://aniketpatel4857.github.io/3d-website/",
      category: "Frontend",
    },
    {
      title: "Modern Scroll-Based Web Experience",
      description:
        "A clean and efficient multipage website built with HTML, CSS, and JavaScript, featuring smooth scroll animations, responsive layout, and interactive transitions to enhance user engagement.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      github: "https://github.com/aniketpatel4857/final-project",
      live: "https://aniketpatel4857.github.io/final-project/",
      category: "Frontend",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A full-stack real-time chat app inspired by WhatsApp, featuring private and group messaging, real-time updates using Socket.io, typing indicators, seen status, and persistent chat history with MongoDB.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Html",
        "Css",
        "Js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Express",
      ],
      github: "https://github.com/aniketpatel4857/chat",
      live: "https://chat-oxnk.onrender.com/chat.html",
      category: "Full Stack",
    },

    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Express", "MongoDB", "JWT", "Socket.io"],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      title: "Interactive Dice Game",
      description:
        "A fun and engaging browser-based dice game where two players roll dice to compete for the highest score. Built with vanilla JavaScript, featuring dynamic DOM updates and responsive design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aniketpatel4857/dice-game",
      live: "https://dice-game-aniket.netlify.app/",
      category: "Full Stack",
    },
    {
      title: "Khaatabook - Expense Tracker",
      description:
        "A digital expense and ledger management application inspired by Khaatabook. Users can create accounts, track transactions with customers, and manage their business finances efficiently. Includes authentication, dynamic hisaab tracking, and a clean dashboard UI.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "EJS",
        "Socket.io",
        "Tailwind CSS",
      ],
      github: "https://github.com/aniketpatel4857/khaatabook",
      live: "https://app-eheb.onrender.com/",
      category: "Full Stack",
    },
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return Code;
      case "node.js":
        return Server;
      case "mongodb":
        return Database;
      case "express":
        return Server;
      default:
        return Smartphone;
    }
  };

  return (
    <div className="min-h-screen bg-[#022827]  text-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/10 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">Aniket Patel</Link>
          </motion.div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-purple-300 transition-colors"
            >
              About
            </Link>
            <Link href="/projects" className="text-purple-300">
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
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my work in MERN stack development, featuring
              full-stack applications and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-stone-700/80 text-white"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <motion.div
                            key={techIndex}
                            className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded-full text-xs"
                            whileHover={{ scale: 1.05 }}
                          >
                            <IconComponent className="h-3 w-3" />
                            <span>{tech}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="Space"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4 text-purple-300">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 mb-8">
                  Have a project in mind? I'd love to help bring your ideas to
                  life with modern web technologies.
                </p>
                <Button
                  size="lg"
                  variant="Space"
                  className=""
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
