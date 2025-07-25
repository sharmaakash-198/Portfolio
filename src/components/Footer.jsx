import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 text-white py-12 z-40">
      <div className="container-max-width section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-300">
              © {currentYear} Akash Sharma. All rights reserved.
            </p>
            {/* <p className="text-gray-400 text-sm mt-1">
              Designed & built with ❤️ using React & Tailwind CSS
            </p> */}
          </div>

          {/* Center - Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Right side - Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
          >
            <span className="text-sm">Back to top</span>
            <svg 
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>


        {/* <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            {/* <div className="mb-4 sm:mb-0">
              <span>Built with modern web technologies for optimal performance</span>
            </div> */}
            {/* <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                Terms of Service
              </a>
            </div> */}
          {/* </div>
        </div> */} 
      </div>
    </footer>
  )
}

export default Footer
