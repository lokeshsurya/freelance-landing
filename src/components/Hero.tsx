'use client'

import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const headlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background with Smooth Transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-50/80 to-transparent"></div>
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-100/30 via-primary-100/20 to-accent-alt-100/30 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-purple-100/20 via-transparent to-blue-100/20 animate-pulse"></div>

        {/* Large background shapes */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-primary-200/25 to-accent-alt-200/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-accent-alt-200/20 to-accent-200/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 -right-40 w-88 h-88 bg-gradient-to-tl from-primary-300/20 to-purple-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Smooth floating elements with optimized parallax */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-accent-300/50 to-accent-500/30 rounded-full opacity-60 animate-float shadow-lg will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.15}px, 0) rotate(${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-bl from-primary-400/40 to-primary-600/25 rounded-full opacity-50 animate-float shadow-md will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.1}px, 0) rotate(${-scrollY * 0.03}deg)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '1s'
          }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-tr from-accent-alt-400/50 to-accent-alt-600/30 rounded-full opacity-60 animate-float shadow-lg will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.12}px, 0) rotate(${scrollY * 0.04}deg)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '2s'
          }}
        ></div>
        <div
          className="absolute bottom-20 right-32 w-24 h-24 bg-gradient-to-tl from-purple-300/30 to-indigo-400/20 rounded-full opacity-40 animate-float shadow-xl will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.08}px, 0) rotate(${scrollY * 0.02}deg)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '0.5s'
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary-500 rounded-full opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-accent-alt-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '2s' }}></div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-50/30 to-primary-50/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className={`space-y-12 ultra-smooth gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Badge/Label */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-accent-200 shadow-premium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Available for new projects</span>
          </div>

          {/* Smooth Headline with Optimized Scroll Animation */}
          <div ref={headlineRef} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight">
              <span
                className="block bg-gradient-to-r from-primary-700 via-accent-600 to-primary-800 bg-clip-text text-transparent font-display will-change-transform"
                style={{
                  transform: `translate3d(${scrollY * 0.3}px, 0, 0) rotate(${scrollY * 0.01}deg)`,
                  opacity: Math.max(0.4, 1 - scrollY * 0.0015),
                  transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                }}
              >
                Freelance
              </span>
              <span
                className="block text-primary-900 mt-1 font-display will-change-transform"
                style={{
                  transform: `translate3d(${-scrollY * 0.2}px, 0, 0) rotate(${-scrollY * 0.008}deg)`,
                  opacity: Math.max(0.4, 1 - scrollY * 0.0015),
                  transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                }}
              >
                Web Developer
              </span>
            </h1>
          </div>

          {/* Smooth Tagline with Optimized Scroll Effects */}
          <div
            className="max-w-4xl mx-auto space-y-6 will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
              opacity: Math.max(0.5, 1 - scrollY * 0.0008),
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-700 leading-relaxed font-medium font-display">
              I build <span className="text-accent-600 font-semibold">fast</span>,
              <span className="text-primary-600 font-semibold"> clean</span>, and
              <span className="text-accent-alt-600 font-semibold"> modern</span> websites.
            </p>
            <p className="text-lg sm:text-xl text-primary-600 leading-relaxed max-w-2xl mx-auto font-body">
              Transforming ideas into exceptional digital experiences with cutting-edge technology and thoughtful design.
            </p>
          </div>

          {/* Smooth CTA Section */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.03}px, 0)`,
              opacity: Math.max(0.6, 1 - scrollY * 0.0006),
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            <a
              href="#portfolio"
              className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-accent-600 hover:bg-accent-700 text-white rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-premium hover:shadow-premium-xl focus:outline-none focus:ring-4 focus:ring-accent-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-primary-200 hover:border-primary-400 text-primary-700 hover:text-primary-900 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-premium hover:shadow-premium-lg"
            >
              <span className="flex items-center">
                Get In Touch
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Smooth Stats Section */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.04}px, 0) scale(${Math.max(0.95, 1 - scrollY * 0.00008)})`,
              opacity: Math.max(0.4, 1 - scrollY * 0.001),
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">50+</div>
              <div className="text-muted-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-600 mb-2">5+</div>
              <div className="text-muted-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-alt-600 mb-2">100%</div>
              <div className="text-muted-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
