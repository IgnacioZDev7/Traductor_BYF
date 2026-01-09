"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (root.classList.contains("dark")) {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ML</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Traductor BYF</h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-border transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
