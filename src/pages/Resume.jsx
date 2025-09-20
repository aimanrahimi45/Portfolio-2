import { Link } from 'react-router-dom';
import SmoothScrollLink from '../components/SmoothScrollLink';

const Resume = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">My Resume</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A comprehensive overview of my professional experience, education, skills, and achievements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <SmoothScrollLink
                to="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              >
                Contact Me
              </SmoothScrollLink>
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto card p-8 lg:p-10 fade-in-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Results-driven Full Stack Developer with 5+ years of experience designing, developing, and deploying high-quality web applications. 
              Adept at both front-end and back-end development, with a strong focus on creating intuitive user experiences and scalable solutions.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Qualifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Full Stack Development',
                  'UI/UX Design Principles',
                  'Responsive Web Design',
                  'API Development & Integration',
                  'Database Design & Management',
                  'Agile/Scrum Methodologies',
                  'Performance Optimization',
                  'Cross-functional Team Leadership'
                ].map((qualification, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Experience 1 */}
            <div className="card p-8 lg:p-10 border-l-4 border-blue-600 fade-in-left hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Senior Full Stack Developer</h3>
                  <p className="text-lg text-blue-600 font-medium">Tech Innovations Inc.</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-700 font-medium">Jan 2021 - Present</p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Led a team of 5 developers in creating a customer management system that increased client retention by 25%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Optimized application performance, reducing page load times by 40% through code refactoring and implementation of best practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%</span>
                </li>
              </ul>
            </div>
            
            {/* Experience 2 */}
            <div className="card p-8 lg:p-10 border-l-4 border-blue-600 fade-in-left hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Full Stack Developer</h3>
                  <p className="text-lg text-blue-600 font-medium">Digital Solutions Ltd.</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-700 font-medium">Mar 2018 - Dec 2020</p>
                  <p className="text-gray-600">New York, NY</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Developed and maintained multiple web applications using React, Node.js, and MongoDB</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Collaborated with UX/UI designers to implement responsive designs that improved user engagement by 35%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Participated in code reviews and mentored junior developers on best practices and coding standards</span>
                </li>
              </ul>
            </div>
            
            {/* Experience 3 */}
            <div className="card p-8 lg:p-10 border-l-4 border-blue-600 fade-in-left hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Junior Web Developer</h3>
                  <p className="text-lg text-blue-600 font-medium">WebCraft Studios</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-700 font-medium">Jun 2016 - Feb 2018</p>
                  <p className="text-gray-600">Boston, MA</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Built responsive websites using HTML, CSS, JavaScript, and jQuery for various clients</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Assisted in the development of e-commerce platforms using PHP and MySQL</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Performed website maintenance, updates, and troubleshooting to ensure optimal performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education 1 */}
            <div className="card p-8 lg:p-10 fade-in-right hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Master of Science in Computer Science</h3>
                  <p className="text-lg text-blue-600 font-medium">Stanford University</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-700 font-medium">2014 - 2016</p>
                  <p className="text-gray-600">Stanford, CA</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Advanced Algorithms, Web Technologies, Software Engineering, Database Systems, Human-Computer Interaction, Machine Learning
                </p>
              </div>
            </div>
            
            {/* Education 2 */}
            <div className="card p-8 lg:p-10 fade-in-right hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Software Engineering</h3>
                  <p className="text-lg text-blue-600 font-medium">University of California, Berkeley</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-700 font-medium">2010 - 2014</p>
                  <p className="text-gray-600">Berkeley, CA</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Data Structures and Algorithms, Object-Oriented Programming, Web Development, Software Design, Computer Networks, Operating Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Programming Languages */}
                <div className="card p-6 fade-in-left">
                  <h4 className="font-medium text-gray-900 mb-4">Programming Languages</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'JavaScript', level: 95 },
                      { name: 'TypeScript', level: 90 },
                      { name: 'Python', level: 85 },
                      { name: 'Java', level: 80 },
                      { name: 'PHP', level: 75 }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Frameworks & Libraries */}
                <div className="card p-6 fade-in-left">
                  <h4 className="font-medium text-gray-900 mb-4">Frameworks & Libraries</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'React', level: 95 },
                      { name: 'Node.js', level: 90 },
                      { name: 'Express.js', level: 85 },
                      { name: 'Angular', level: 70 },
                      { name: 'Vue.js', level: 65 }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tools & Technologies */}
                <div className="card p-6 fade-in-right">
                  <h4 className="font-medium text-gray-900 mb-4">Tools & Technologies</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Git', level: 90 },
                      { name: 'Docker', level: 85 },
                      { name: 'AWS', level: 80 },
                      { name: 'MongoDB', level: 85 },
                      { name: 'MySQL', level: 80 }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Design & Other */}
                <div className="card p-6 fade-in-right">
                  <h4 className="font-medium text-gray-900 mb-4">Design & Other</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'UI/UX Design', level: 80 },
                      { name: 'Figma', level: 75 },
                      { name: 'Adobe Creative Suite', level: 70 },
                      { name: 'Responsive Design', level: 90 },
                      { name: 'SEO', level: 75 }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'English', proficiency: 'Native' },
                  { name: 'Spanish', proficiency: 'Professional Working' },
                  { name: 'French', proficiency: 'Limited Working' }
                ].map((language, index) => (
                  <div key={index} className="card p-6 fade-in-up hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-medium text-gray-900 mb-2">{language.name}</h4>
                    <p className="text-gray-600">{language.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Developer of the Year 2022',
                      organization: 'Tech Innovations Inc.',
                      description: 'Recognized for outstanding contributions to product development and team leadership.'
                    },
                    {
                      title: 'Best Innovation Award 2020',
                      organization: 'Digital Solutions Ltd.',
                      description: 'Awarded for developing an innovative solution that improved client efficiency by 40%.'
                    },
                    {
                      title: 'Hackathon Winner 2019',
                      organization: 'TechCrunch Disrupt',
                      description: 'First place in a 48-hour hackathon for creating a sustainable tech solution.'
                    }
                  ].map((achievement, index) => (
                    <div key={index} className="card p-6 fade-in-left hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                      <p className="text-blue-600 font-medium mb-2">{achievement.organization}</p>
                      <p className="text-gray-700">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'AWS Certified Solutions Architect',
                      organization: 'Amazon Web Services',
                      date: '2021',
                      description: 'Professional certification for designing distributed systems on AWS.'
                    },
                    {
                      title: 'Google Professional Cloud Developer',
                      organization: 'Google Cloud',
                      date: '2020',
                      description: 'Certification for building scalable and reliable applications using Google Cloud technologies.'
                    },
                    {
                      title: 'MongoDB Certified Developer',
                      organization: 'MongoDB University',
                      date: '2019',
                      description: 'Certification for developing applications using MongoDB.'
                    }
                  ].map((certification, index) => (
                    <div key={index} className="card p-6 fade-in-right hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-bold text-gray-900 mb-1">{certification.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{certification.organization}</p>
                      <p className="text-gray-600 text-sm mb-2">{certification.date}</p>
                      <p className="text-gray-700">{certification.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;