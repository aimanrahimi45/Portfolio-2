import { Link } from 'react-router-dom';
import SmoothScrollLink from '../components/SmoothScrollLink';
import GradientBlinds from '../components/GradientBlinds';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 pb-20 md:pt-24 md:pb-32 bg-black text-white relative overflow-hidden">
        <GradientBlinds 
          className="absolute inset-0 z-20"
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={21}
          noise={0.0}
          blindCount={16}
          blindMinWidth={50}
          mouseDampening={0.15}
          spotlightRadius={0.3}
          spotlightSoftness={1}
          spotlightOpacity={0.6}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Hello, I'm <span className="text-white">Alex Johnson</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-100 max-w-lg">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-xl leading-relaxed">
                I create elegant solutions through code and design, specializing in modern web applications that provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <SmoothScrollLink
                  to="/projects"
                  className="btn btn-primary group"
                >
                  View My Work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </SmoothScrollLink>
                <SmoothScrollLink
                  to="/resume"
                  className="btn btn-outline"
                >
                  Download Resume
                </SmoothScrollLink>
              </div>
            </div>
            <div className="flex justify-center fade-in">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl transition-all duration-500 group-hover:border-blue-400 group-hover:shadow-blue-500/20">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-3 rounded-lg shadow-lg transition-all duration-300 group-hover:bg-gray-200 group-hover:shadow-xl">
                  <span className="font-semibold">5+ Years</span>
                  <span className="block text-sm">Experience</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="divider"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a commitment to creating exceptional digital experiences. With over 5 years of experience in the industry, I've had the privilege of working with diverse teams and clients to bring innovative ideas to life.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, ensuring that every project not only meets functional requirements but also delivers intuitive and engaging user interfaces.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'Tailwind CSS', 'UI/UX Design', 'Responsive Design'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="card fade-in-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Industry Recognition</h4>
                    <p className="text-gray-600">Recipient of the "Developer of the Year" award in 2022 for innovative solutions and exceptional code quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Project Success</h4>
                    <p className="text-gray-600">Successfully delivered 50+ projects for clients across various industries, maintaining a 98% client satisfaction rate.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Technical Expertise</h4>
                    <p className="text-gray-600">Specialized in creating responsive, accessible, and performant web applications using modern technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <SmoothScrollLink
                to="/contact"
                className="btn btn-primary group"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </SmoothScrollLink>
              <SmoothScrollLink
                to="/projects"
                className="btn btn-secondary group"
              >
                View Projects
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </SmoothScrollLink>
            </div>
            
            <div className="fade-in">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {[
                  { name: 'GitHub', url: 'https://github.com' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Twitter', url: 'https://twitter.com' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{social.name.charAt(0)}</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;