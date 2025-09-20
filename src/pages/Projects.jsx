import { useState } from 'react';
import SmoothScrollLink from '../components/SmoothScrollLink';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Project categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: true,
      details: {
        challenge: 'Creating a scalable e-commerce solution that could handle high traffic volumes while maintaining performance and security.',
        solution: 'Implemented a microservices architecture with React for the frontend, Node.js for the backend, and MongoDB for data storage. Integrated Stripe for secure payment processing.',
        outcome: 'Successfully launched a platform that processes over 1,000 transactions daily with a 99.9% uptime and excellent user feedback.'
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile App',
      description: 'A mobile application for tracking fitness activities, nutrition, and health metrics with social features.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Health APIs'],
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: true,
      details: {
        challenge: 'Developing a cross-platform mobile app that could integrate with various health APIs and provide a seamless user experience.',
        solution: 'Used React Native for cross-platform compatibility, Redux for state management, and Firebase for backend services. Integrated with popular health APIs for data synchronization.',
        outcome: 'Launched an app with over 50,000 downloads, 4.5-star rating, and positive reviews for its intuitive interface and reliable performance.'
      }
    },
    {
      id: 4,
      title: 'Portfolio Website Design',
      description: 'A modern, responsive portfolio website design with creative animations and interactive elements.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX'],
      category: 'design',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform for property listings, virtual tours, and agent management.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Mapbox API'],
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Food Delivery App',
      description: 'A mobile application for food ordering and delivery with real-time tracking and payment integration.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Brand Identity Design',
      description: 'Complete brand identity design including logo, color scheme, typography, and brand guidelines.',
      technologies: ['Illustrator', 'Photoshop', 'Brand Strategy', 'Visual Design'],
      category: 'design',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Analytics Dashboard',
      description: 'A data visualization dashboard for business analytics with interactive charts and real-time updates.',
      technologies: ['React', 'D3.js', 'Express', 'WebSocket', 'Chart.js'],
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      demoLink: '#',
      codeLink: '#',
      featured: false
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work, accomplishments, and technical skills through various project examples
            </p>
          </div>
        </div>
      </section>

      {/* Project Filter Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card group overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300 flex items-center group"
                    >
                      View Demo
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    <a
                      href={project.codeLink}
                      className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-300 flex items-center group"
                    >
                      View Code
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Highlights</h2>
            <div className="divider mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              A closer look at some of my most significant projects, including the challenges, solutions, and outcomes
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative overflow-hidden h-64 lg:h-auto ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply"></div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className="ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured Project
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6 mb-10">
                      <div className="group">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-4s-.962 3-1.732 4L3.732 16c-.77 1.333.192 3 1.732 3z"></path>
                          </svg>
                          Challenge
                        </h4>
                        <p className="text-gray-700 pl-7 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors duration-300">{project.details.challenge}</p>
                      </div>
                      <div className="group">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Solution
                        </h4>
                        <p className="text-gray-700 pl-7 border-l-2 border-gray-200 group-hover:border-green-400 transition-colors duration-300">{project.details.solution}</p>
                      </div>
                      <div className="group">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                          Outcome
                        </h4>
                        <p className="text-gray-700 pl-7 border-l-2 border-gray-200 group-hover:border-purple-400 transition-colors duration-300">{project.details.outcome}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.demoLink}
                        className="btn btn-primary group"
                      >
                        View Live Demo
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                      <a
                        href={project.codeLink}
                        className="btn btn-secondary group"
                      >
                        Source Code
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;