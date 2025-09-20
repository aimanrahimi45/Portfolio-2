import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  // Professional experience data
  const experiences = [
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance optimization."
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed responsive user interfaces for enterprise applications. Collaborated with UX designers to implement intuitive user experiences and optimized applications for performance and accessibility."
    },
    {
      id: 3,
      position: "Web Developer",
      company: "Creative Agency Co.",
      period: "2016 - 2018",
      description: "Created custom websites and web applications for diverse clients. Worked with various CMS platforms and contributed to the development of internal tools for project management."
    },
    {
      id: 4,
      position: "Junior Developer",
      company: "StartUp Ventures",
      period: "2015 - 2016",
      description: "Assisted in the development of the company's flagship product. Gained experience in modern web technologies and agile development methodologies."
    }
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2013 - 2015",
      achievements: "Graduated with honors. Specialized in Human-Computer Interaction and Web Technologies."
    },
    {
      id: 2,
      degree: "Bachelor of Software Engineering",
      institution: "State University",
      period: "2009 - 2013",
      achievements: "Dean's List for academic excellence. Active member of the Computer Science Society."
    },
    {
      id: 3,
      degree: "Web Development Certification",
      institution: "Online Learning Platform",
      period: "2014",
      achievements: "Completed advanced courses in modern JavaScript frameworks and responsive design."
    }
  ];

  // Skills data
  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Webpack", level: 75 }
    ],
    softSkills: [
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Creative Thinking",
      "Effective Communication",
      "Adaptability",
      "Attention to Detail",
      "Time Management"
    ]
  };

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
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get to know me better - my journey, experiences, and what drives my passion for web development
            </p>
          </div>
        </div>
      </section>

      {/* Personal Introduction Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Personal Introduction</h2>
              <div className="divider"></div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 8 years of experience creating elegant digital solutions. My journey in web development began during my university studies, where I discovered my love for building intuitive user interfaces and robust backend systems.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Throughout my career, I've had the opportunity to work with diverse teams and clients across various industries, from startups to established enterprises. This experience has taught me the importance of adaptability, continuous learning, and user-centered design in creating successful digital products.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I believe that great software is not just about writing clean code, but about understanding the needs of users and stakeholders. My approach combines technical expertise with creative problem-solving to deliver solutions that are both functional and delightful to use.
              </p>
              
              <div className="card bg-blue-50 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Philosophy</h3>
                <p className="text-gray-700 italic">
                  "Technology should serve people, not the other way around. Every line of code I write is with the end user in mind, creating experiences that are intuitive, accessible, and meaningful."
                </p>
              </div>
            </div>
            
            <div className="flex justify-center fade-in">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl transition-all duration-500 group-hover:border-blue-400 group-hover:shadow-blue-500/20">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 group-hover:bg-blue-500 group-hover:shadow-xl">
                  <span className="font-semibold">Alex Johnson</span>
                  <span className="block text-sm">Full Stack Developer</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-16 fade-in">
            <div className="inline-flex rounded-md shadow-sm overflow-hidden" role="group">
              <button
                type="button"
                className={`px-8 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button
                type="button"
                className={`px-8 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>
          </div>
          
          {/* Experience Timeline */}
          {activeTab === 'experience' && (
            <div className="relative fade-in-up">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} fade-in-up`}>
                    {/* Circle on the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="card hover:shadow-xl transition-all duration-300 group">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{exp.position}</h3>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education Section */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
              {education.map((edu) => (
                <div key={edu.id} className="card hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-blue-600">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-700">{edu.achievements}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Technical Skills */}
            <div className="lg:col-span-2 fade-in-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Frontend</h3>
                  <div className="space-y-4">
                    {skills.frontend.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Backend Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Backend</h3>
                  <div className="space-y-4">
                    {skills.backend.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tools */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Tools</h3>
                  <div className="space-y-4">
                    {skills.tools.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="fade-in-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Soft Skills</h3>
              <div className="card bg-gray-50">
                <div className="flex flex-wrap gap-3">
                  {skills.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Personal Attributes</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Detail-oriented with a focus on quality</span>
                    </li>
                    <li className="flex items-start group">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Continuous learner passionate about new technologies</span>
                    </li>
                    <li className="flex items-start group">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Strong problem-solving abilities</span>
                    </li>
                    <li className="flex items-start group">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Excellent team player and communicator</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;