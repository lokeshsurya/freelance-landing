'use client'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
      icon: '🌐',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Modern Frameworks']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
      icon: '📱',
      features: ['iOS & Android', 'React Native', 'App Store Deployment', 'Push Notifications']
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions, APIs, and database design that power your applications reliably.',
      icon: '⚙️',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security Implementation']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your digital projects.',
      icon: '💡',
      features: ['Technology Strategy', 'Code Review', 'Performance Audit', 'Team Mentoring']
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly and up-to-date.',
      icon: '🔧',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support']
    }
  ]

  return (
    <section id="services" className="relative py-24 px-6 lg:px-8 overflow-hidden bg-black">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated liquid shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-blue-600/15 rounded-full blur-3xl liquid-bg" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '9s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-full blur-xl liquid-bg" style={{ animationDelay: '14s' }}></div>
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-bl from-blue-600/12 to-indigo-500/12 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '19s' }}></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-tr from-pink-500/10 to-purple-600/10 rounded-full blur-xl liquid-bg" style={{ animationDelay: '11s' }}></div>

        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>

        {/* Mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Services Offered
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive digital solutions tailored to your specific needs,
            from initial concept to final deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-dark p-8 rounded-2xl shadow-premium hover:shadow-premium-xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10 hover:border-white/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-white/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
