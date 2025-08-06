'use client'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden bg-black">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated liquid shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl liquid-bg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-blue-500/10 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-xl liquid-bg" style={{ animationDelay: '12s' }}></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-bl from-indigo-500/12 to-blue-600/12 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '17s' }}></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-purple-600/10 to-pink-500/10 rounded-full blur-xl liquid-bg" style={{ animationDelay: '9s' }}></div>

        {/* Mesh overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Premium Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif tracking-tight reveal-up">
              About Me
            </h2>

            {/* Enhanced Paragraph with Dark Theme */}
            <div className="glass-dark rounded-2xl p-8 shadow-premium border border-white/10 reveal-up">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
                I&apos;m a passionate web developer with over 5 years of experience creating
                modern, responsive websites and applications. I specialize in React,
                Next.js, and TypeScript, with a strong focus on clean code and exceptional
                user experiences.
              </p>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal mt-4">
                My background in both design and development allows me
                to bridge the gap between beautiful interfaces and robust functionality.
                I love collaborating with clients to bring their digital visions to life
                through thoughtful, scalable solutions that drive real business results.
              </p>
            </div>
          </div>

          {/* Premium Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 reveal-up">
              <div className="w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-blue-800/30 rounded-2xl flex items-center justify-center shadow-premium-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 glass-dark border border-white/10">
                <div className="text-8xl sm:text-9xl">💻</div>
              </div>
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/40 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/40 rounded-full opacity-40 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
