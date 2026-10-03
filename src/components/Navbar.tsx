import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onBookCallClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCallClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { currentPalette } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section detection
      const sections = ['home', 'about', 'services', 'case-studies', 'client-hub', 'pricing', 'testimonials', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Client Hub', href: '#client-hub' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#EAE3D6] shadow-sm py-3'
          : 'bg-[#FAF8F5]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Kim Karen Ambong Portfolio"
          >
            <div
              className="relative w-10 h-10 rounded-xl bg-white border border-[#E7DFD3] flex items-center justify-center font-bold text-[#1C1917] text-sm tracking-wider shadow-sm transition-all group-hover:border-[#8D5B32]"
              style={{ borderColor: currentPalette.border }}
            >
              <span style={{ color: currentPalette.primary }}>K</span>A
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white animate-pulse"
                style={{ backgroundColor: currentPalette.primary }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#1C1917] tracking-tight group-hover:text-[#8D5B32] transition-colors flex items-center gap-1.5">
                {PORTFOLIO_DATA.personal.fullName}
              </span>
              <span className="text-xs text-[#78716C] font-medium tracking-wide">
                Virtual Assistant & Funnel Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'font-bold'
                      : 'text-[#665E55] hover:text-[#1C1917] hover:bg-[#F2ECE2]'
                  }`}
                  style={
                    isActive
                      ? {
                          color: currentPalette.primary,
                          backgroundColor: currentPalette.surface,
                        }
                      : {}
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookCallClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#1C1917] hover:bg-[#292524] rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{
                boxShadow: `0 4px 14px ${currentPalette.glow}`,
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: currentPalette.light }} />
              <span>Book a Free Call</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2ECE2] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE3D6] bg-[#FAF8F5]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EAE3D6] px-2 text-xs text-[#78716C]">
            <span className="flex items-center gap-1.5 font-medium" style={{ color: currentPalette.primary }}>
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: currentPalette.primary }}
              />
              Available for new projects
            </span>
            <span>Taguig, PH</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2ECE2] transition-colors"
                style={{ color: activeSection === link.href.replace('#', '') ? currentPalette.primary : undefined }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCallClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#1C1917] hover:bg-[#292524] rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Book a Free 15-Min Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
