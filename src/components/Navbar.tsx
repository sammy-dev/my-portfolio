import React from 'react';
import { Menu, X, Home, User, Award, Briefcase, Mail, GraduationCap, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center font-bold text-xl text-gray-800 hover:text-indigo-600 transition-colors">
              <Code2 className="w-6 h-6 mr-2 text-indigo-600" />
              Sammy Mulandi
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Home className="w-5 h-5 mr-1" />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <User className="w-5 h-5 mr-1" />
              About
            </button>
            <button 
              onClick={() => scrollToSection('#achievements')}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Award className="w-5 h-5 mr-1" />
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('#experience')}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Briefcase className="w-5 h-5 mr-1" />
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('#education')}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <GraduationCap className="w-5 h-5 mr-1" />
              Education
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-1" />
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center w-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="flex items-center w-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <User className="w-5 h-5 mr-2" />
              About
            </button>
            <button
              onClick={() => scrollToSection('#achievements')}
              className="flex items-center w-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <Award className="w-5 h-5 mr-2" />
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('#experience')}
              className="flex items-center w-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Experience
            </button>
            <button
              onClick={() => scrollToSection('#education')}
              className="flex items-center w-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center w-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
