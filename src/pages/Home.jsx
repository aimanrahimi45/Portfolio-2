import { Link } from 'react-router-dom';
import SmoothScrollLink from '../components/SmoothScrollLink';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello, I'm <span className="text-blue-400">Alex Johnson</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-300">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg mb-8 text-gray-400 max-w-lg">
                I create elegant solutions through code and design, specializing in modern web applications that provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <SmoothScrollLink
                  to="/projects"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  View My Work
                </SmoothScrollLink>
                <SmoothScrollLink
                  to="/resume"
                  className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium rounded-md transition duration-300 ease-in-out"
                >
                  Download Resume
                </SmoothScrollLink>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                  <img 
                    src="https://via.placeholder.com/400" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">5+ Years</span>
                  <span className="block text-sm">Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a commitment to creating exceptional digital experiences. With over 5 years of experience in the industry, I've had the privilege of working with diverse teams and clients to bring innovative ideas to life.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                My approach combines technical expertise with creative problem-solving, ensuring that every project not only meets functional requirements but also delivers intuitive and engaging user interfaces.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'Tailwind CSS', 'UI/UX Design', 'Responsive Design'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Industry Recognition</h4>
                    <p className="text-gray-600">Recipient of the "Developer of the Year" award in 2022 for innovative solutions and exceptional code quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Project Success</h4>
                    <p className="text-gray-600">Successfully delivered 50+ projects for clients across various industries, maintaining a 98% client satisfaction rate.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Technical Expertise</h4>
                    <p className="text-gray-600">Specialized in creating responsive, accessible, and performant web applications using modern technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <SmoothScrollLink
                to="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Get In Touch
              </SmoothScrollLink>
              <SmoothScrollLink
                to="/projects"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-medium rounded-md transition duration-300 ease-in-out"
              >
                View Projects
              </SmoothScrollLink>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                    aria-label={social}
                  >
                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                      <span className="font-medium text-sm">{social.charAt(0)}</span>
                    </div>
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