'use client'

import PremiumHero from '@/components/PremiumHero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Other Sections */}
      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="work">
        <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
