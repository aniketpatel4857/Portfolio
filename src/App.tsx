"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <Router>
      <div
        className={`min-h-screen transition-all duration-500 ${
          darkMode ? "bg-black text-white" : "bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/projects" element={<ProjectsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
