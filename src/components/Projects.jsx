import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'AI Finance Manager',
      description: 'Built an AI-powered personal finance management application using React, Node.js, and Prisma. Features personalized spending insights, budget tracking, and intelligent financial recommendations with secure user authentication.',
      tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
      link: '#',
      category: 'AI Development'
    },
    {
      title: 'AI Recipe Generator',
      description: 'Developed an AI-powered recipe generation app using Cohave AI for natural language understanding. Built with React frontend and integrated responsive design for optimal user experience across devices.',
      tags: ['React', 'Cohave AI', 'JavaScript', 'CSS'],
      link: '#',
      category: 'AI Development'
    },
    {
      title: 'Web Development Frontend',
      description: 'Collaborated with web development teams to design and develop responsive web applications. Implemented interactive user interfaces and optimized performance for enhanced user experiences.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: '#',
      category: 'Web Development'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Extensive practice and implementation of core computer science concepts including arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming solutions.',
      tags: ['C++', 'Python', 'Algorithms', 'Problem Solving'],
      link: '#',
      category: 'Programming'
    },
    {
      title: 'Database Management Systems',
      description: 'Designed and implemented relational database systems with focus on efficient data storage, retrieval, and management. Experience with SQL queries and database optimization.',
      tags: ['SQL', 'Database Design', 'MySQL', 'PostgreSQL'],
      link: '#',
      category: 'Database'
    },
    {
      title: 'Academic Projects',
      description: 'Various academic projects during ECE curriculum including circuit design, signal processing, and embedded systems. Achieved 98.54 percentile in JEE Mains 2022.',
      tags: ['Electronics', 'Circuit Design', 'Signal Processing'],
      link: '#',
      category: 'Electronics'
    }
  ];

  return (
    <section 
      id="projects" 
      className="projects-section relative py-20 bg-slate-50"
    >
      <div className="container-max-width section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Featured Work
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-slide-up">
            A curated selection of projects that showcase my approach to solving 
            complex design and development challenges across various industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-500/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/30">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

