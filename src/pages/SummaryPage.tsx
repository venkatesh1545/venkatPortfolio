
import PageLayout from '@/components/layout/PageLayout';
import SocialIcons from '@/components/ui/SocialIcons';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const SummaryPage = () => {
  return (
    <PageLayout>
      <section className="min-h-screen relative flex items-center bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-navy block">Hello, I'm</span>
                <span className="text-gold">Golthi Venkatacharyulu</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                <h4>Software Developer & Cloud Engineer</h4>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Download Resume
                </a>
              </div>
              
              <SocialIcons />
            </div>
            
            <div className="lg:w-1/2 flex justify-center animate-slide-in">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold">
                <img 
                  src="/assets/pic4.png" 
                  alt="Golthi Venkatacharyulu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <a 
            href="#statement" 
            className="text-navy hover:text-gold transition-colors flex flex-col items-center"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>


      </section>
      
      <section id="statement" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">The Mind Behind the Code</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <p className="text-lg text-gray-700 mb-4">
                Hello! I’m Golthi Venkatacharyulu, a tech enthusiast from Rajahmundry — a city that shaped my curiosity, dedication, and love for structured learning. I’m currently pursuing my B.Tech in Computer Science Engineering at Aditya College of Engineering and Technology.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                Over the years, I’ve immersed myself in the world of programming, problem-solving, and full-stack development. From mastering Data Structures and Algorithms to exploring the depths of Machine Learning and Deep Learning, I’ve always been driven to turn complex challenges into meaningful solutions. Tools like Java, Python, AWS, and HTML/CSS/JS/React are part of my everyday toolkit.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                I’ve worked on some exciting projects — like ElevateEd, an AI-powered learning platform; CURVETOPIA, an intelligent shape analyzer; and a full-stack Financial Tracker using AWS. Each project taught me something new, and pushed me to code cleaner, design better, and think bigger.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Outside of building projects, I actively compete in platforms like LeetCode, GeeksforGeeks, and HackerRank — where I've solved 700+ problems combined. I’ve also been a part of top-tier hackathons like Adobe GenSolve’24, where I ranked in the top 50 among 1,00,000+ participants. Teaching, mentoring, and helping others debug is something I genuinely enjoy.
              </p>

              <p className="text-lg text-gray-700">
                This portfolio isn’t just a collection of projects — it’s a reflection of the hours spent learning, the joy of solving problems, and my constant drive to grow as a developer and creator. It's a digital snapshot of who I am and where I’m headed. Thanks for stopping by!
              </p>
            </div>
            
            <div className="mt-10">
              <Link to="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default SummaryPage;
