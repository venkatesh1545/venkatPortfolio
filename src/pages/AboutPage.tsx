import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import SocialIcons from '@/components/ui/SocialIcons';
import { FileText, Linkedin } from 'lucide-react';

const AboutPage = () => {
  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="About Me"
            subtitle="Get to know my background, skills, and journey in the world of tech."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Columns: Education + Technical Focus */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-navy">My Education Background</h3>

                <div className="mb-6 border border-gray-200 rounded-lg p-4">
                  <div className="text-blue-700 font-bold text-lg mb-1">2022 – Present</div>
                  <div className="text-lg font-semibold">B.Tech in Computer Science Engineering</div>
                  <div className="text-sm text-gray-600 mb-2">Aditya College of Engineering and Technology, Surampalem</div>
                  <p className="text-gray-700 mt-2">
                    Currently pursuing my B.Tech in CSE with a CGPA of 7.9. My coursework has deepened my understanding in core areas like programming, software design, and system architecture.
                    <ul className="list-disc list-inside mt-2">
                      <li>Worked on real-world software projects like CURVETOPIA and ElevateEd.</li>
                      <li>Built scalable cloud-based apps using AWS, Flask, JavaScript, and MySQL.</li>
                      <li>Participated in technical hackathons and online contests (Leetcode, GFG, HackerRank).</li>
                    </ul>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-blue-700 font-bold text-lg mb-1">2020 – 2022</div>
                  <div className="text-lg font-semibold">Intermediate (MPC Stream)</div>
                  <div className="text-sm text-gray-600 mb-2">Sasi Junior College, Rajahmundry</div>
                  <p className="text-gray-700 mt-2">
                    Focused on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundations for engineering studies.
                    <ul className="list-disc list-inside mt-2">
                      <li>Achieved excellent academic scores and ranked among top performers.</li>
                      <li>Participated in entrance preparation programs and national-level mock tests.</li>
                    </ul>
                  </p>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a href="/assets/resume.pdf" className="btn-primary inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2" size={18} />
                    Download Resume
                  </a>
                  <a href="https://www.linkedin.com/in/golthi-venkatacharyulu/" className="btn-accent inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={18} />
                    LinkedIn Profile
                  </a>
                </div>

                <h3 className="text-xl font-bold text-navy mt-10">Key Technical Focus Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Data Structures & Algorithms (C++, Java, Python)'},
                    { title: 'Object-Oriented Programming (OOP)'},
                    { title: 'Web Development (HTML, CSS, JS, React)'},
                    { title: 'AWS Cloud & API Gateway'},
                    { title: 'Python & Flask (Backend Dev)'},
                    { title: 'Machine Learning & Deep Learning'},
                    { title: 'AI Agents & Chatbots'},
                    { title: 'Database Management (MySQL, MongoDB)'},
                    { title: 'Version Control (Git & GitHub)'},
                    { title: 'Agile Methodologies & Team Collaboration'},
                  ].map((subject, idx) => (
                    <div key={idx} className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-base font-semibold text-navy mb-1">{subject.title}</h4>
    
                    </div>
                  ))}
                </div>

                
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden mb-8 group relative">
                <img 
                  src="/assets/pic5.jpg" 
                  alt="Golthi Venkatacharyulu" 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-navy hover:text-gold transition-colors">
            Video Introduction
          </h3>
          <p className="text-gray-700 mb-4">
            A short video about my tech journey and goals will be added here soon.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto pb-6 px-4 flex justify-center items-center h-40">
          <span className="text-xl font-semibold text-gray-700 animate-blink">
            🚧 Coming Soon...
          </span>
        </div>
      </div>

    </PageLayout>
  );
};

export default AboutPage;
