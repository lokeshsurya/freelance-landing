'use client'

export default function Portfolio() {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '🛒',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      image: '📋',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full-Stack'
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features.',
      image: '💪',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile Development'
    }
  ]

  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-8 overflow-hidden bg-black">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated liquid shapes */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl liquid-bg" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-blue-500/10 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '11s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-full blur-xl liquid-bg" style={{ animationDelay: '16s' }}></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-bl from-indigo-500/12 to-blue-600/12 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '21s' }}></div>
        <div className="absolute top-10 right-10 w-56 h-56 bg-gradient-to-tr from-purple-600/10 to-pink-500/10 rounded-full blur-xl liquid-bg" style={{ animationDelay: '13s' }}></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 reveal-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Here are some of my recent projects that showcase my skills and expertise
            in creating innovative digital solutions.
          </p>
        </div>

        {/* Projects Grid - Mobile Responsive */}
        <div className="portfolio-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-dark rounded-2xl shadow-premium hover:shadow-premium-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-white/10 hover:border-white/20"
              >
                  {/* Project Image/Icon */}
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {project.image}
                  </div>

                  {/* Project Content - Mobile Responsive */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Category */}
                    <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-blue-500/30">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-serif">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 text-white/70 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links - Mobile Responsive */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-3 px-4 rounded-lg text-center text-sm sm:text-base font-medium transition-all duration-300 btn-premium"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 py-2.5 sm:py-3 px-4 rounded-lg text-center text-sm sm:text-base font-medium transition-all duration-300"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* View More Button & GitHub Link - Mobile Responsive */}
        <div className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 btn-premium"
          >
            View All Projects
          </a>

          {/* GitHub Profile Link */}
          <div>
            <a
              href="https://github.com/lokeshsurya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 sm:space-x-3 text-white/80 hover:text-white transition-all duration-300 group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm sm:text-base font-medium">
                View on GitHub
              </span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
