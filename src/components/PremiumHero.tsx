'use client'

import { useEffect, useState } from 'react'
import SwiralBackground from './SwiralBackground'

export default function PremiumHero() {
  const [currentTime, setCurrentTime] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Handle scroll and active section detection
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setScrollY(currentScrollY)

          // Detect active section
          const sections = ['home', 'about', 'services', 'work', 'contact']
          const sectionElements = sections.map(id => document.getElementById(id))

          let currentSection = 'home'
          sectionElements.forEach((element, index) => {
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = sections[index]
              }
            }
          })

          setActiveSection(currentSection)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Swiral Animated Background */}
      <SwiralBackground />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Top Navbar - Mobile Responsive */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Centered Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="premium-name text-white text-lg sm:text-xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              <span className="hidden sm:inline">Lokesh Suryawanshi</span>
              <span className="sm:hidden">L. Suryawanshi</span>
            </span>
          </h1>
        </div>

        {/* Clock */}
        <div className="ml-auto">
          <div className="text-white/70 text-xs sm:text-sm font-mono tracking-wider">
            {currentTime}
          </div>
        </div>
      </nav>

      {/* Left Sidebar Navigation - Mobile Responsive */}
      <nav className="fixed left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2 sm:space-y-3">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-white/80 hover:text-white transition-all duration-300 ease-out transform hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Active indicator line */}
                <div
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 sm:w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                />

                {/* Pill background */}
                <div
                  className={`absolute inset-0 rounded-full backdrop-blur-sm border transition-all duration-300 transform ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/25 to-purple-500/25 border-blue-500/40 opacity-100 scale-100'
                      : 'bg-white/10 border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-105'
                  }`}
                />

                {/* Text */}
                <span
                  className={`relative text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  <span className="hidden sm:inline">{item.name}</span>
                  <span className="sm:hidden">{item.name.split(' ')[0]}</span>
                </span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm scale-110" />

                {/* Progress indicator dot */}
                <div
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 opacity-100 scale-100'
                      : 'bg-white/40 opacity-0 group-hover:opacity-70 scale-75 group-hover:scale-100'
                  }`}
                />

                {/* Subtle pulse animation for active item */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse" />
                )}
              </a>
            )
          })}

          {/* Scroll progress indicator */}
          <div className="mt-4 sm:mt-6 px-3 sm:px-6">
            <div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                style={{
                  width: `${(() => {
                    if (typeof window === 'undefined' || typeof document === 'undefined') return 0;
                    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                    return Math.min((scrollY / maxScroll) * 100, 100);
                  })()}%`
                }}
              />
            </div>
            <div className="text-xs text-white/60 mt-1 sm:mt-2 text-center font-mono">
              {(() => {
                if (typeof window === 'undefined' || typeof document === 'undefined') return 0;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                return Math.round(Math.min((scrollY / maxScroll) * 100, 100));
              })()}%
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Mobile Responsive */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          {/* Main Heading - Mobile Responsive */}
          <div className="space-y-6 sm:space-y-8 reveal-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight font-serif">
              I make
              <br />
              <span className="text-gradient-premium">
                websites
              </span>
            </h1>

            {/* Call to Action - Mobile Responsive */}
            <div className="pt-6 sm:pt-8">
              <a
                href="#work"
                className="group inline-flex items-center space-x-2 sm:space-x-3 text-white hover:text-blue-400 transition-all duration-300 btn-premium hover-lift"
              >
                <span className="text-base sm:text-lg font-medium tracking-wide">View my work</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 group-hover:border-blue-400 flex items-center justify-center transition-all duration-300 glass">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          

        </div>
      </div>

      {/* Scroll Indicator - Mobile Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-white/50">
          <span className="text-xs uppercase tracking-wider font-medium hidden sm:block">Scroll</span>
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </div>
  )
}
