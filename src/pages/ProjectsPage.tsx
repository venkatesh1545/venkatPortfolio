import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const ProjectsPage = () => {
  const otherProjects = [
    {
      title: "Disaster Management and Rescuing People",
      description: "An intelligent system that uses geospatial data and crowd-sourced reports to identify affected zones and coordinate rescue efforts in real-time. Uses AI models to prioritize high-risk zones and deploy resources efficiently. Includes mapping interfaces and alert systems for first responders.",
      techStack: ["Python", "Flask", "AWS", "HTML", "CSS", "JavaScript", "GeoJSON", "OpenStreetMap API"],
      imageUrl: "/assets/disaster.jpg", // Use a placeholder for now
      githubUrl: "https://github.com/venkatesh1545/dronex-rescue-network", // Placeholder: add GitHub repo when ready
      liveUrl: "https://dronex-rescue-network.vercel.app/" // Optional: deploy link if hosted
    },
    {
      title: "ElevateEd - AI-Based Interactive Learning Platform",
      description: "A personalized learning platform enhanced by AI. Boosts engagement by 40% using learning analytics and summarization. Summarized 10,000+ documents to reduce reading time by 50%.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AWS", "XAMPP"],
      imageUrl: "/assets/ElevateEd.webp",
      githubUrl: "https://github.com/venkatesh1545/ElevateEd08",
      liveUrl: "#"
    },
    {
      title: "CURVETOPIA - Advanced 2D Shape Classification & Curve Analysis",
      description: "AI-powered curve analysis tool that detects symmetry and completes curves with 90% accuracy. Processes over 10,000 CSV and PNG files with advanced shape classification and visual insights.",
      techStack: ["Python", "Flask", "Machine Learning", "Data Visualization", "HTML", "CSS"],
      imageUrl: "/assets/curvetopia.webp",
      githubUrl: "https://github.com/venkatesh1545/curvetopia",
      liveUrl: "https://curvetopia-jko6.onrender.com/"
    },
    {
      title: "Inventory Management System with AI Agents",
      description: "An intelligent Java-based inventory system powered by 6 autonomous agents that monitor stock levels, trigger reorder alerts, automate sales decisions, and manage restocking efficiently. Each agent handles specialized tasks, including threshold tracking, predictive ordering, and notification services, helping businesses maintain seamless inventory flow.",
      techStack: ["Python", "Flask", "AWT", "MySQL", "AI Agent-Based Modeling", "AI Agents"],
      imageUrl: "/assets/inventory.webp", // Replace with actual image if available
      githubUrl: "https://github.com/venkatesh1545/Inventory-Management-System-AI-Agents", // Update this when you upload
      liveUrl: "#" // Optional
    },
    {
      title: "Financial Expenses Tracker",
      description: "A full-stack application to track and visualize personal income and expenses with real-time data using AWS. Features include user authentication and dynamic charts.",
      techStack: ["HTML", "CSS", "JavaScript", "AWS", "DynamoDB", "API Gateway", "Lambda"],
      imageUrl: "/assets/finance.jpg",
      githubUrl: "https://github.com/venkatesh1545/ExpenceTracker",
      liveUrl: "https://venkatesh1545.github.io/ExpenceTracker/"
    },
    {
      title: "Personal Portfolio Website",
      description: "A professional and interactive portfolio website built using React and TypeScript. It serves as a central space to showcase my profile, including a summary, detailed about me section, experience, certifications, personal projects, activities, and recommendations. The portfolio features a clean UI, responsive design, and smooth navigation to give recruiters and peers a comprehensive view of my journey.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Component-Based Design"],
      imageUrl: "/assets/portfolio.jpg", // Replace with your actual screenshot
      githubUrl: "https://github.com/yourusername/portfolio-site", // Update when repo is live
      liveUrl: "https://yourportfolio.live" // Replace with your actual deployed URL
    }
        
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Projects & Research"
            subtitle="Explore my academic and professional projects showcasing my skills and interests."
          />

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
