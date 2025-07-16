"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Star,
  Users,
  Coffee,
  Award,
  ArrowDown,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SpotlightCard from "@/ui/SpotlightCard/SpotlightCard";
import { useTheme } from "next-themes";
import Contact from "./about/Contact";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [muted, setmuted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setmuted(true);
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  if (!muted) return null;

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference" as const,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating stunning, responsive user interfaces with React.js and modern CSS frameworks",
      features: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust, scalable server-side applications with Node.js and Express",
      features: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for performance",
      features: ["MongoDB", "Database Optimization"],
    },
    {
      icon: Smartphone,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment",
      features: ["MERN Stack", "Cloud Deployment", "Performance Optimization"],
    },
  ];

  const achievements = [
    {
      icon: Star,
      number: "20+",
      label: "Projects Completed",
      color: "text-yellow-400",
    },
    {
      icon: Users,
      number: "10+",
      label: "Users",
      color: "text-blue-400",
    },
    {
      icon: Coffee,
      number: "200+",
      label: "Cups of Coffee",
      color: "text-orange-400",
    },
    {
      icon: Award,
      number: "3+",
      label: "Month Experience",
      color: "text-green-400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Aniket delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content:
        "Working with Aniket was a game-changer for our startup. He built our entire web application from scratch and it's performing flawlessly.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "The social media dashboard Aniket created has revolutionized how we manage our campaigns. Highly recommend his services!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#022827] via-[#022827] to-[#022827] text-white overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="cursor fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/10 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-light"
            whileHover={{ scale: 1.05 }}
          >
            Aniket Patel
          </motion.div>
          <div className="flex space-x-8">
            <Link href="/" className="text-stone-500">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-stone-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-stone-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/projects"
              className="hover:text-stone-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/1H8FWqDQ-jFYx54G3InZWVwXzmRtQ-aQI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-500 transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-0 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-stone-700">Full-Stack</span> Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building robust web applications from front to back
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="Space"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8"
        >
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </section>
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized services to bring your digital vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <SpotlightCard className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:shadow-lg hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardContent className="px-2 text-center flex flex-col  justify-between h-full">
                    {/* Icon with glow */}
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                        <service.icon className="h-8 w-8 text-purple-200" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-purple-500/10 text-purple-200 text-xs rounded-full border border-purple-400/20 hover:bg-purple-500/20 transition-all"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <achievement.icon
                      className={`h-8 w-8 ${achievement.color} mx-auto mb-4`}
                    />
                    <div className="text-4xl font-bold text-white mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-300">{achievement.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
              <CardContent className="p-12 text-center">
                <h3 className="text-4xl mb-6 text-white">
                  Let's Build Something Great Together
                </h3>
                <p className="text-md text-gray-300 mb-8 max-w-2xl mx-auto">
                  project in mind? I'm here to help turn your ideas into
                  impactful, high-quality digital experiences. Let’s collaborate
                  and bring your vision to life with clean, scalable code.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Link href="/projects">View My Work</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="Space"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {[
          {
            icon: Github,
            href: "https://github.com/aniketpatel4857",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/aniket-patel-969b93299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: "mailto:aniketpatel485772@gmail.com", // ✅ Use "mailto:" for email
            label: "Email",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            title={social.label}
          >
            <social.icon className="h-5 w-5 group-hover:text-purple-300 transition-colors" />
          </motion.a>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      <Contact />
    </div>
  );
}
