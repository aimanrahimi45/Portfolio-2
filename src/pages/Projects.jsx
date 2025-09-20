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
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my work, accomplishments, and technical skills through various project examples
            </p>
          </div>
        </div>
      </section>

      {/* Project Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition duration-300 ease-in-out ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition duration-300 ease-in-out"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="text-gray-600 hover:text-gray-900 font-medium text-sm transition duration-300 ease-in-out"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Highlights</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              A closer look at some of my most significant projects, including the challenges, solutions, and outcomes
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden h-64 lg:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className="ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured Project
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Challenge</h4>
                        <p className="text-gray-600">{project.details.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Solution</h4>
                        <p className="text-gray-600">{project.details.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Outcome</h4>
                        <p className="text-gray-600">{project.details.outcome}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.demoLink}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 ease-in-out"
                      >
                        View Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-medium rounded-md transition duration-300 ease-in-out"
                      >
                        Source Code
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