"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Github, Instagram, Linkedin, Mail, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 relative">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Have a project in mind or want to discuss opportunities? I’d love to hear from you.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="secondary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
          <CardContent className="p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-purple-300 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-sm text-muted-foreground hover:text-purple-300 transition-colors"
                  >
                    aniketpatel485772@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <Github className="h-6 w-6 text-purple-300 mt-1" />
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <a
                    href="https://github.com/aniketpatel4857"
                    className="text-sm text-muted-foreground hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/aniket4857
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <Linkedin className="h-6 w-6 text-purple-300 mt-1" />
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/aniket-patel-969b93299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-sm text-muted-foreground hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/Aniket Patel
                  </a>
                </div>
              </div>

              
              <div className="flex items-start gap-4 mt-6">
                <Instagram className="h-6 w-6 text-purple-300 mt-1" />
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/aniket-patel-969b93299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-sm text-muted-foreground hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aniket_patel__45
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <MessageSquare className="h-6 w-6 text-purple-300 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Availability</h4>
                  <p className="text-sm text-muted-foreground">Open to freelance and full-time opportunities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

  )
}
