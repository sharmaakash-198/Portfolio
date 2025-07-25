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

  return (
    <section 
      ref={elementRef}
      className={`hero-section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center overflow-hidden ${isFading ? 'fading' : ''}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-max-width section-padding w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-yellow-300 drop-shadow-lg">
                Akash Sharma
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-8 font-light animate-slide-up">
              ECE Student & Full-Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Final year Electronics & Communication Engineering student at NIT Kurukshetra with expertise in 
              AI, Data Structures & Algorithms, and Web/Software development. Passionate about building 
              scalable applications and solving complex problems through innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <button
                onClick={scrollToContact}
                className="bg-white text-primary-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-white/20"
              >
                Get In Touch
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-transparent text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg border-2 border-white/30 hover:border-white transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
