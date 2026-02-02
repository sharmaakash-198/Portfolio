import React from 'react'
import useScrollFade from '../hooks/useScrollFade'

const Hero = () => {
  const { elementRef, isFading } = useScrollFade(0.5)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects') 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={elementRef}
      className={`hero-section bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex items-center overflow-hidden relative ${isFading ? 'fading' : ''}`}
    >
      {/* Animated Background Elements */}
      {/* ✨ Sparkles */}
      {Array.from({ length: 45 }).map((_, i) => (
        <span
          key={i}
          className={`sparkle ${i % 2 === 0 ? 'sparkle-slow' : 'sparkle-fast'}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-25 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full blur-3xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-float"></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>


      <div className="container-max-width section-padding w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <div className="animate-fade-in space-y-8">

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-yellow-300 drop-shadow-lg">
                Akash Sharma
              </span>
            </h1>

            {/* Role - gradient */}
            <h2 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Full-Stack Developer • AI Enthusiast • Problem Solver
            </h2>

            {/* Tagline */}
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Building scalable web applications and intelligent software solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">

              <button
                onClick={scrollToContact}
                className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Contact Me
              </button>

              <button
                onClick={scrollToProjects}
                className="border border-white/40 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </button>

            </div>

          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero
