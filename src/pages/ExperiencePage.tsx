import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ExperienceCard from '@/components/ui/ExperienceCard';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "AWS Cloud Development Intern",
      company: "Technical Hub Pvt. Ltd.",
      duration: "May 2024 – July 2024",
      description:
        "As an AWS Cloud Development Intern, I built and managed scalable AWS cloud solutions, optimized system reliability, and explored serverless development. This internship strengthened my cloud architecture understanding and boosted my hands-on skills with AWS services.",
      responsibilities: [
        "Deployed and maintained cloud applications with 99.5% uptime on AWS.",
        "Improved API performance by 25% using better design strategies.",
        "Gained hands-on experience with EC2, S3, Lambda, and API Gateway.",
        "Completed Postman API Fundamentals Certification during internship.",
        "Worked on securing IAM roles and managing access policies.",
        "Collaborated on cloud-based microservice architecture and CI/CD workflows.",
      ],
      skills: ["AWS", "Lambda", "API Gateway", "EC2", "S3", "Postman", "Cloud Architecture"]
    },
    {
      title: "Java Intern",
      company: "Technical Hub Pvt. Ltd.",
      duration: "August 2024 – November 2024",
      description:
        "In this internship, I mentored peers in Java and Object-Oriented Programming, led code review sessions, and helped improve code efficiency. This experience shaped my problem-solving mindset and teaching capability.",
      responsibilities: [
        "Mentored 50+ students in Java fundamentals and OOP concepts.",
        "Led multiple code review sessions to improve code clarity and structure.",
        "Helped debug and optimize existing codebases to increase performance by 30%.",
        "Supported students in building mini Java-based projects using Swing and AWT.",
        "Improved documentation and presentation of key Java concepts.",
        "Engaged in collaborative sessions to solve real-world coding challenges."
      ],
      skills: ["Java", "OOP", "Mentorship", "Swing", "AWT", "Code Review"]
    }
  ];

  return (
    <PageLayout>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Work Experience"
            subtitle="My professional journey and internship experiences that have shaped my career path."
          />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Skills & Tools"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Technical Skills */}
            <div className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-navy">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">C, C++, Java, Python & OOP</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">HTML, CSS, JavaScript, React</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">MySQL & DBMS</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">AWS Cloud</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Web Development</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Machine Learning</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Deep Learning</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">AI Agents & Chatbots</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Data Structures & Algorithms</li>
              </ul>
            </div>

            {/* Software Tools */}
            <div className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-navy">Software & Tools</h3>
              <ul className="space-y-2">
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Git & GitHub</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Postman</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">VS Code</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Linux (Redhat)</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">AWS CLI & Console</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Jupyter Notebook</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-navy">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Mentoring & Teaching</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Debugging & Problem Solving</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Communication</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Code Review</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExperiencePage;
