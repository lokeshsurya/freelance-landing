'use client'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated liquid shapes */}
      <div className="absolute inset-0">
        {/* Large flowing shape */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl liquid-bg"
          style={{ animationDelay: '0s' }}
        />
        
        {/* Medium flowing shape */}
        <div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/15 to-blue-500/15 rounded-full blur-2xl liquid-bg"
          style={{ animationDelay: '5s' }}
        />
        
        {/* Small accent shape */}
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl liquid-bg"
          style={{ animationDelay: '10s' }}
        />
        
        {/* Additional flowing elements */}
        <div 
          className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-bl from-indigo-500/20 to-blue-600/20 rounded-full blur-2xl liquid-bg"
          style={{ animationDelay: '15s' }}
        />
        
        <div 
          className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-purple-600/15 to-pink-500/15 rounded-full blur-xl liquid-bg"
          style={{ animationDelay: '7s' }}
        />
      </div>
      
      {/* Mesh overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
