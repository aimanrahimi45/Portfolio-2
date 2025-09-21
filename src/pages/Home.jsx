import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScrollLink from '../components/SmoothScrollLink';
import GradientBlinds from '../components/GradientBlinds';
import ProfileCard from '../components/ProfileCard';
import AnimatedProgressBar from '../components/AnimatedProgressBar';
import CircularProgressIndicator from '../components/CircularProgressIndicator';
import ModernHighlightCard from '../components/ModernHighlightCard';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const aboutSectionRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger animations
    const initAnimations = () => {
      // About section animations
      if (aboutSectionRef.current) {
        // Fade in animation for the about section title
        gsap.fromTo(
          aboutSectionRef.current.querySelector('h2'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: aboutSectionRef.current.querySelector('h2'),
              start: 'top 100%',
              end: 'bottom 60%',
              scrub: 0.5,
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true,
              anticipatePin: 1
            }

          }
        );

        // Fade in animation for the about section content
        gsap.fromTo(
          aboutSectionRef.current.querySelectorAll('.fade-in-left, .fade-in-right'),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Professional highlights animations
      if (highlightsRef.current) {
        // Staggered animation for highlight cards
        gsap.fromTo(
          highlightsRef.current.querySelectorAll('.space-y-6 > div'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: {
              each: 0.15,
              from: "start"
            },
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: 'top 100%',
              end: 'bottom 100%',
              scrub: 0,
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true,
              anticipatePin: 1
            }
          }
        );

        // Parallax effect for the professional highlights section
        gsap.to(highlightsRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Individual card animations with enhanced effects
        const highlightCards = highlightsRef.current.querySelectorAll('.space-y-6 > div');
        highlightCards.forEach((card, index) => {
          // Add hover effect preparation
          card.style.transformOrigin = 'center bottom';
          
          // Create entrance animation
          gsap.fromTo(card, 
            { 
              opacity: 0, 
              y: 50,
              rotationX: 15,
              transformPerspective: 1000
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 80%',
                scrub: 0,
                toggleActions: 'play none none reverse',
                invalidateOnRefresh: true
              }
            }
          );
          
          // Add subtle scale animation on scroll
          gsap.to(card, {
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 50%",
              end: "bottom 50%",
              scrub: true
            }
          });
        });

        // Create a progress indicator for the highlights section
        const highlightsProgress = document.createElement('div');
        highlightsProgress.className = 'highlights-progress';
        highlightsProgress.style.cssText = `
          position: absolute;
          top: -2px;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          z-index: 10;
          transition: width 0.1s ease;
        `;
        if (highlightsRef.current.querySelector('h3')) {
          highlightsRef.current.querySelector('h3').style.position = 'relative';
          highlightsRef.current.querySelector('h3').appendChild(highlightsProgress);
        }

        // Update progress indicator based on scroll position
        ScrollTrigger.create({
          trigger: highlightsRef.current,
          start: "top center",
          end: "bottom center",
          onUpdate: (self) => {
            highlightsProgress.style.width = `${self.progress * 100}%`;
          }
        });

        // Add scroll-based opacity changes for the highlights section
        gsap.to(highlightsRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onUpdate: (self) => {
              // Calculate opacity based on scroll position
              const opacity = 1 - Math.abs(self.progress - 0.5) * 0.2;
              gsap.set(highlightsRef.current, { opacity });
            }
          }
        });
      }
    };

    // Initialize animations
    initAnimations();

    // Cleanup function
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 pb-20 md:pt-24 md:pb-32 bg-black text-white relative overflow-hidden">
        <GradientBlinds
          className="absolute inset-0 z-10"
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fly-in-left">
                Hello, I'm <span className="text-white opacity-0 animate-fly-in-right" style={{animationDelay: '0.3s'}}>Aiman</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-100 max-w-lg opacity-0 animate-fly-in-left" style={{animationDelay: '0.6s'}}>
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-xl leading-relaxed opacity-0 animate-fly-in-up" style={{animationDelay: '0.9s'}}>
                I create elegant solutions through code and design, specializing in modern web applications that provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fly-in-up" style={{animationDelay: '1.2s'}}>
                <SmoothScrollLink
                  to="/projects"
                  className="btn btn-primary group pointer-events-auto"
                >
                  View My Work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </SmoothScrollLink>
                <SmoothScrollLink
                  to="/resume"
                  className="btn btn-outline pointer-events-auto"
                >
                  Download Resume
                </SmoothScrollLink>
              </div>
            </div>
            <div className="flex justify-center fade-in pointer-events-auto">
              <ProfileCard
                name="Aiman"
                title="Full Stack Developer & UI/UX Designer"
                handle="aimancodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/avatar.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                className="absolute right-8 md:right-16 top-1 bottom-7"
              />
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
      <section ref={aboutSectionRef} className="py-20 md:py-28 bg-white">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  <AnimatedProgressBar skill="React" level={90} color="from-blue-500 to-blue-600" />
                  <AnimatedProgressBar skill="JavaScript" level={95} color="from-yellow-500 to-yellow-600" />
                  <AnimatedProgressBar skill="TypeScript" level={85} color="from-blue-600 to-blue-700" />
                  <AnimatedProgressBar skill="Node.js" level={85} color="from-green-500 to-green-600" />
                  <AnimatedProgressBar skill="UI/UX Design" level={80} color="from-purple-500 to-purple-600" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Competencies</h3>
                <div className="grid grid-cols-3 gap-6">
                  <CircularProgressIndicator skill="Frontend" level={90} color="#3b82f6" />
                  <CircularProgressIndicator skill="Backend" level={85} color="#10b981" />
                  <CircularProgressIndicator skill="Design" level={80} color="#8b5cf6" />
                </div>
              </div>
            </div>
            
            <div ref={highlightsRef} className="fade-in-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Highlights</h3>
              <div className="space-y-6">
                <ModernHighlightCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  }
                  title="Industry Recognition"
                  description="Recipient of the 'Developer of the Year' award in 2022 for innovative solutions and exceptional code quality."
                  color="blue"
                />
                
                <ModernHighlightCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  }
                  title="Project Success"
                  description="Successfully delivered 50+ projects for clients across various industries, maintaining a 98% client satisfaction rate."
                  color="purple"
                />
                
                <ModernHighlightCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  }
                  title="Technical Expertise"
                  description="Specialized in creating responsive, accessible, and performant web applications using modern technologies and best practices."
                  color="teal"
                />
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