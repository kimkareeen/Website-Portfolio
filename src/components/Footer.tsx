import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { personal, footer } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4EFE6] border-t border-[#E5DACB] py-14 text-[#665E55] text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E7DFD3]">
          
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center font-bold text-[#1C1917] text-sm shadow-2xs"
              style={{ borderColor: currentPalette.border }}
            >
              <span style={{ color: currentPalette.primary }}>K</span>A
            </div>
            <div>
              <div className="font-bold text-[#1C1917] text-sm">
                {personal.fullName}
              </div>
              <div className="text-[11px] text-[#78716C]">
                {footer.tagline} • {footer.location}
              </div>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#665E55] font-medium">
            <a href="#about" className="hover:text-[#1C1917] transition-colors">About</a>
            <a href="#services" className="hover:text-[#1C1917] transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-[#1C1917] transition-colors">Case Studies</a>
            <a href="#client-hub" className="hover:text-[#1C1917] transition-colors">Client Hub</a>
            <a href="#pricing" className="hover:text-[#1C1917] transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-[#1C1917] transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-[#1C1917] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#1C1917] transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 px-3.5 rounded-xl bg-white border border-[#E7DFD3] hover:border-[#D6CDC0] text-[#1C1917] transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
            aria-label="Back to top"
          >
            <span className="text-[11px] font-semibold hidden sm:inline">Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#78716C]" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <div>
            © {footer.copyrightYear} {personal.fullName}. All rights reserved. Built for founders seeking reliable remote execution.
          </div>
          <div className="text-[#665E55] flex items-center gap-1.5 font-medium">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentPalette.primary }}
            />
            <span>{footer.notice}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
