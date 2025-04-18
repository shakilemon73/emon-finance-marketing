import { FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Emon Finance Ltd.</h3>
            <p className="mb-4">
              Performance-driven marketing solutions for the financial sector and advertising platforms.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/emon-finance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/emonfinance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/partnerships" className="hover:text-white transition-colors">Partnerships</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services#ppc" className="hover:text-white transition-colors">PPC Campaign Management</a></li>
              <li><a href="/services#traffic" className="hover:text-white transition-colors">Traffic Monetization</a></li>
              <li><a href="/services#leadgen" className="hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="/services#programmatic" className="hover:text-white transition-colors">Programmatic Advertising</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <address className="not-italic">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <span>
                  123 Business Avenue<br />
                  London, UK<br />
                  EC2A 4ST
                </span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="w-5 h-5 mr-3 flex-shrink-0 text-blue-400" />
                <a href="mailto:support@emonfinanceltd.com" className="hover:text-white transition-colors">
                  support@emonfinanceltd.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 flex-shrink-0 text-blue-400" />
                <a href="tel:+442045678901" className="hover:text-white transition-colors">
                  +44 20 4567 8901
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Emon Finance Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
              <a href="/compliance" className="text-sm hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;