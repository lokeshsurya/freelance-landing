'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/yourusername',
      icon: '🏀'
    },
    {
      name: 'Email',
      url: 'mailto:lokesh.suryawanshi@example.com',
      icon: '📧'
    }
  ]

  return (
    <footer className="relative bg-black text-white py-16 px-6 lg:px-8 overflow-hidden">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated liquid shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl liquid-bg" style={{ animationDelay: '10s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-purple-500/8 to-blue-500/8 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '15s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/6 to-blue-400/6 rounded-full blur-xl liquid-bg" style={{ animationDelay: '20s' }}></div>

        {/* Mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif">
              <a href="#home" className="hover:text-white/90 transition-colors" aria-label="Go to Home">
                Lokesh Suryawanshi
              </a>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Full-Stack Developer & Digital Craftsman creating beautiful,
              functional digital experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-white/70 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#work" className="text-white/70 hover:text-white transition-colors duration-300">
                Work
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-white/70">
              <p>lokesh.suryawanshi@example.com</p>
              <p>+91 (555) 123-4567</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-110 border border-white/20"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-white/70 text-center md:text-right">
              <p>&copy; {currentYear} Lokesh Suryawanshi. All rights reserved.</p>
              <p className="text-sm mt-1">
                Built with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
