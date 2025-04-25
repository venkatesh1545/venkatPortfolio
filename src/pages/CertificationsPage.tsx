import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import CertificationCard from '@/components/ui/CertificationCard';

const CertificationsPage = () => {
  const certifications = [
    {
      title: "IT Specialist in HTML & CSS",
      issuer: "Certiport (Pearson)",
      date: "2024",
      description: "Credential that validates proficiency in designing and styling responsive web pages using HTML and CSS standards. Covers semantic markup, layout techniques, and best practices in front-end development.",
      badgeUrl: "/assets/HTML_CSS.jpg", // Replace with your actual image
      verificationUrl: "https://drive.google.com/file/d/1QEzEfLYJB0TW4IW87bPIrpNeD3go6Iw0/view?usp=sharing"
    },
    {
      title: "GitHub Administration",
      issuer: "GitHub",
      date: "2024",
      description: "Certification focused on version control, repository management, and collaborative development using GitHub’s advanced features and best practices for project management and CI/CD integration.",
      badgeUrl: "/assets/Github.jpg",
      verificationUrl: "https://drive.google.com/file/d/1dSJ-grKABW-lU5dRZ8iK0J4ZLoEgCYMD/view?usp=sharing"
    },
    {
      title: "Redhat System Administration (RHCSA)",
      issuer: "Red Hat",
      date: "2024",
      description: "Validated skills in Linux system administration including user management, file permissions, networking, system processes, and shell scripting on Red Hat-based systems.",
      badgeUrl: "/assets/RHCSA.jpg",
      verificationUrl: "https://drive.google.com/file/d/1CzetFoKzw8B5NK1cIxFEg7Pp5mFBP36o/view?usp=sharing"
    },
    {
      title: "IT Specialist in Python",
      issuer: "Certiport (Pearson)",
      date: "2024",
      description: "Credential confirming expertise in Python programming covering core syntax, control structures, functions, data types, file handling, and problem-solving.",
      badgeUrl: "/assets/python.jpg",
      verificationUrl: "https://drive.google.com/file/d/1LaK8eD_-c41pCLyydSNQNtY23rB8v3bx/view?usp=sharing"
    },
    {
      title: "Oracle Certified Java Programmer",
      issuer: "Oracle",
      date: "2024",
      description: "Industry-recognized Java certification covering Java fundamentals, OOP, collections, exception handling, and best practices in software development.",
      badgeUrl: "/assets/certiport_java.jpg",
      verificationUrl: "https://drive.google.com/file/d/17wx1BODUqGCnrECFuVothqcSxRoXzUXO/view?usp=sharing" 
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Certifications & Credentials"
            subtitle="Professional certifications that validate my skills and expertise."
          />
          
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* 
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Continuing Education"
            subtitle="My commitment to ongoing learning and professional development."
            centered={true}
          />
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-navy">Learning Journey</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-navy">Currently Learning</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Deep Learning Specialization</p>
                      <p className="text-gray-600 text-sm">Advancing my machine learning skills with neural networks and deep learning techniques.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Advanced Financial Modeling</p>
                      <p className="text-gray-600 text-sm">Enhancing my financial analysis capabilities with complex modeling techniques.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-navy">Future Learning Goals</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">○</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Cloud Computing Certification</p>
                      <p className="text-gray-600 text-sm">Planning to gain expertise in cloud platforms for data science applications.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">○</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Big Data Technologies</p>
                      <p className="text-gray-600 text-sm">Expanding knowledge in Hadoop, Spark, and other big data frameworks.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-700 italic">
                "Learning is not attained by chance, it must be sought for with ardor and diligence." — Abigail Adams
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

    </PageLayout>
  );
};

export default CertificationsPage;
