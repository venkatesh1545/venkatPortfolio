import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">G. Venkatacharyulu</h3>
            <p className="text-gray-300 text-sm">
              Showcasing my journey, skills, and innovations through projects and contributions.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://github.com/venkatesh1545" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/golthi-venkatacharyulu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:venkateshgolthi07@gmail.com" className="text-white hover:text-gold transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:+917995775401" className="text-white hover:text-gold transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-gold">Projects</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-gold">Certifications</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-gold">Activities</Link></li>
              <li><Link to="/recommendations" className="text-gray-300 hover:text-gold">Recommendations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
            <address className="not-italic text-gray-300 text-sm space-y-1">
              <p>Golthi Venkatacharyulu</p>
              <p>Rajahmundry</p>
              <p>
                <a href="mailto:venkateshgolthi07@gmail.com" className="hover:text-gold">venkateshgolthi07@gmail.com</a>
              </p>
              <p>
                <a href="tel:+917995775401" className="hover:text-gold">+91 7995775401</a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-3 pt-2 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Golthi Venkatacharyulu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
