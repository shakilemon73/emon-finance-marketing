import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-800">
            Emon Finance Ltd.
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/partnerships" className="text-gray-700 hover:text-blue-600 font-medium">Partnerships</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium">Case Studies</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/partnerships" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Partnerships</Link>
            <Link to="/case-studies" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;