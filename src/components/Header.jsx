import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change header color immediately after scrolling even slightly
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary-100'
          : 'bg-transparent'
        }`}
    >
      <div className="container-max-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className={`text-2xl font-bold transition-colors duration-300 flex items-center justify-center ${isScrolled ? 'text-secondary-900' : 'text-white'
              }`}
          >
            <img src="/icon.svg" alt="Logo" className="w-20 h-20" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 font-medium ${isScrolled
                  ? 'text-secondary-600 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-300 font-medium ${isScrolled
                  ? 'text-secondary-600 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                }`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 font-medium ${isScrolled
                  ? 'text-secondary-600 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled
                ? 'text-secondary-600 hover:text-primary-600'
                : 'text-white/90 hover:text-white'
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 transition-colors duration-300 ${isScrolled ? 'border-t border-secondary-100' : 'border-t border-white/20'
            }`}>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-left transition-colors duration-300 font-medium ${isScrolled
                    ? 'text-secondary-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                  }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`text-left transition-colors duration-300 font-medium ${isScrolled
                    ? 'text-secondary-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                  }`}
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-left transition-colors duration-300 font-medium ${isScrolled
                    ? 'text-secondary-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                  }`}
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header;
