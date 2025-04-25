import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar, Award } from 'lucide-react';

const ActivitiesPage = () => {
  const events = [
    {
      title: "Adobe GenSolve'24 Hackathon (GeeksforGeeks)",
      role: "Finalist – Top 50 (out of 1,00,000+ participants)",
      date: "Oct 2024",
      description: "Participated in the Adobe GenSolve hackathon hosted by GeeksforGeeks. I developed CURVETOPIA — an AI-powered 2D shape classification and curve analysis tool. The project focused on identifying symmetrical shapes, completing partial curves, and visualizing geometric patterns using Python and machine learning techniques. It was selected among the top 50 innovative ideas from across 400+ institutions.",
      achievement: "Top 50 Innovator"
    },
    {
      title: "Tech-a-thon by EY",
      role: "Participant",
      date: "Jan 2025",
      description: "Participated in a team-based competition and co-created 'Dhanamitra', a web application promoting financial literacy among illiterate individuals using regional languages.",
      achievement: "Participant"
    },
    {
      title: "Amdocs Hackathon (HackerEarth)",
      role: "Finalist – Top 20 (out of 10,000+ participants)",
      date: "Feb 2025",
      description: "Competed in the Amdocs hackathon on HackerEarth where I developed ElevateEd — a personalized AI-based learning platform. It leveraged real-time analytics to recommend study material, summarize large datasets, and track student progress efficiently, resulting in a 40% improvement in engagement and a 50% reduction in reading time.",
      achievement: "Top 20 Innovator"
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Hackathons & Activities"
            subtitle="Participation in tech events, hackathons, and competitions that fueled my creativity and technical problem-solving."
          />

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Events & Initiatives</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card p-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-navy">{event.title}</h4>
                    <span className="bg-gray-100 text-navy text-sm px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>

                  <p className="text-gold font-medium mt-1 mb-3">{event.role}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  {event.achievement && (
                    <div className="mt-auto">
                      <div className="flex items-center text-navy">
                        <Award size={16} className="mr-2 text-gold" />
                        <span className="font-medium">{event.achievement}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Participating in national-level hackathons and innovation challenges has helped me grow as a developer and problem-solver. These experiences allowed me to apply classroom concepts in real-world scenarios and collaborate under pressure.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ActivitiesPage;
