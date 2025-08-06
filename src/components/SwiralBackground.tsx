'use client'

import { useEffect, useRef } from 'react'

export default function SwiralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Swiral animation variables
    let time = 0
    const particles: Array<{
      x: number
      y: number
      angle: number
      radius: number
      speed: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create particles
    const createParticles = () => {
      const particleCount = 150
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          angle: Math.random() * Math.PI * 2,
          radius: Math.random() * 200 + 50,
          speed: Math.random() * 0.02 + 0.005,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${220 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      particles.forEach((particle, index) => {
        // Update particle position in spiral motion
        particle.angle += particle.speed
        particle.x = canvas.width / 2 + Math.cos(particle.angle + time) * particle.radius
        particle.y = canvas.height / 2 + Math.sin(particle.angle + time) * particle.radius

        // Create spiral effect
        particle.radius += Math.sin(time * 2 + index * 0.1) * 0.5

        // Wrap particles around screen
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity * (0.5 + 0.5 * Math.sin(time * 3 + index * 0.1))
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connecting lines for spiral effect
        if (index > 0) {
          const prevParticle = particles[index - 1]
          const distance = Math.sqrt(
            Math.pow(particle.x - prevParticle.x, 2) + 
            Math.pow(particle.y - prevParticle.y, 2)
          )
          
          if (distance < 100) {
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 0.5
            ctx.globalAlpha = particle.opacity * 0.3
            ctx.beginPath()
            ctx.moveTo(prevParticle.x, prevParticle.y)
            ctx.lineTo(particle.x, particle.y)
            ctx.stroke()
          }
        }
        ctx.restore()
      })

      // Add central spiral glow
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300)
      gradient.addColorStop(0, `hsla(240, 100%, 50%, ${0.1 + 0.05 * Math.sin(time * 2)})`)
      gradient.addColorStop(0.5, `hsla(260, 80%, 60%, ${0.05 + 0.03 * Math.sin(time * 1.5)})`)
      gradient.addColorStop(1, 'hsla(280, 60%, 70%, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        zIndex: 0
      }}
    />
  )
}
