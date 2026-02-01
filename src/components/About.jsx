import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="about-section relative py-20 bg-white"
    >
      <div className="container-max-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="aspect-[2/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-xl">
                {/* Profile Image */}
                <img
                  src="/akash-photo.jpg"
                  alt="Akash Sharma - ECE Student & Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-200 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">

                <p>
                  I'm a Full-Stack Developer who enjoys building clean, scalable web applications and turning ideas
                  into reliable digital products. I focus on writing simple, maintainable code and delivering smooth user experiences.
                </p>

                <p>
                  I work primarily with React, JavaScript, Node.js, Express, MongoDB, and SQL — developing complete
                  end-to-end systems from frontend interfaces to backend APIs and databases.
                </p>

                <p>
                  Currently in my final year at NIT Kurukshetra, I’ve built strong foundations in Data Structures,
                  Algorithms, and system design, and I’m continuously improving my skills through real-world development.
                </p>

              </div>


              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What I Love Working With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'C++', 'Python', 'JavaScript', 'React',
                    'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind', 'SQL', 'MongoDB',
                    'Git', 'Data Structures', 'Algorithms', 'AI/ML'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  See My Work
                </button>
                <a
                  href="/resume.pdf"
                  download="Akash_Sharma_Resume.pdf"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-8 rounded-lg border-2 border-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
