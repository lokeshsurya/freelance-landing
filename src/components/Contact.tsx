'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Compose a mailto link using the form data
    const to = 'lokeshsurya818@protonmail.com'
    const subject = encodeURIComponent(`${formData.subject} — Inquiry from ${formData.name}`)
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`

    // Open the user's default mail client
    window.location.href = mailtoUrl

    // Optional UX: reset form shortly after triggering the mail client
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 300)
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated liquid shapes */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-bl from-blue-600/15 to-purple-600/15 rounded-full blur-3xl liquid-bg" style={{ animationDelay: '8s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '13s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-cyan-400/8 to-blue-400/8 rounded-full blur-xl liquid-bg" style={{ animationDelay: '18s' }}></div>
        <div className="absolute top-20 left-20 w-56 h-56 bg-gradient-to-bl from-indigo-500/12 to-blue-600/12 rounded-full blur-2xl liquid-bg" style={{ animationDelay: '23s' }}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tr from-purple-600/10 to-pink-500/10 rounded-full blur-xl liquid-bg" style={{ animationDelay: '15s' }}></div>

        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif px-2">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? I&apos;d love to hear about your project
            and discuss how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-serif">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 text-lg sm:text-xl border border-blue-500/30 flex-shrink-0">
                    📧
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white text-sm sm:text-base">Email</p>
                    <p className="text-white/70 text-sm sm:text-base break-all">
                      <a href="mailto:lokeshsurya818@protonmail.com" className="hover:text-white underline-offset-4 hover:underline">
                        lokeshsurya818@protonmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 text-lg sm:text-xl border border-blue-500/30 flex-shrink-0">
                    📱
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                    <p className="text-white/70 text-sm sm:text-base">+91 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 text-lg sm:text-xl border border-blue-500/30 flex-shrink-0">
                    📍
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white text-sm sm:text-base">Location</p>
                    <p className="text-white/70 text-sm sm:text-base">Pune, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="glass-dark p-4 sm:p-6 rounded-2xl border border-white/10">
              <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Quick Response</h4>
              <p className="text-white/80 text-sm sm:text-base">
                I typically respond to all inquiries within 24 hours.
                For urgent projects, feel free to call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-dark p-6 sm:p-8 rounded-2xl shadow-premium border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-white/50"
                  placeholder="Project inquiry, consultation, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-white placeholder-white/50"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-premium hover:shadow-premium-lg btn-premium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
