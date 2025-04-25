import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { FileText } from 'lucide-react';

const RecommendationsPage = () => {
  const email = 'venkateshgolthi07@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/golthi-venkatacharyulu/';
  const phone = '7995775401';

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Reach Out to Me"
            subtitle="I'd love to connect, collaborate, or hear your feedback."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Contact Form */}
            <form
              action={`mailto:${email}`}
              method="POST"
              encType="text/plain"
              className="bg-gray-50 rounded-lg p-6 shadow-md space-y-4"
            >
              <div>
                <label className="block font-semibold mb-1 text-navy">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-navy">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-navy">Your Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary px-6 py-2 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>

            {/* Google Maps */}
            <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
              <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128940.13748715854!2d81.72378475789174!3d16.98744625441374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2440c9fff%3A0x86b24503e305ca21!2sRajamahendravaram%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1745596819152!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Request a Recommendation Block */}
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-gold">
                <FileText size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Request a Recommendation</h3>
                <p className="text-gray-700 mb-4">
                  If we've worked together and you'd like to leave a recommendation, I’d be honored to hear from you.
                  Please contact me via email or LinkedIn.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`mailto:${email}`} 
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Contact via Email
                  </a>
                  <a 
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent inline-flex items-center justify-center"
                  >
                    Connect on LinkedIn
                  </a>
                </div>

                <p className="mt-4 text-gray-700">
                  📞 <strong>Contact Number:</strong> {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RecommendationsPage;
