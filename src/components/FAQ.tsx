import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, FAQItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const FAQ: React.FC = () => {
  const { faqs } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base">
            Everything you need to know about working together, communication, and getting started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq: FAQItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E8E0D5] transition-all duration-200 overflow-hidden shadow-xs"
                style={isOpen ? { borderColor: currentPalette.border } : {}}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1C1917] tracking-tight flex items-center gap-3">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: currentPalette.surface,
                        color: currentPalette.primary,
                      }}
                    >
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1C1917] text-white' : 'bg-[#FAF8F5] text-[#78716C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#57534E] leading-relaxed border-t border-[#EAE3D6] animate-in fade-in-50 duration-200">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E8E0D5] shadow-xs">
          <p className="text-xs sm:text-sm text-[#57534E] mb-2">
            Have a question that isn't answered here?
          </p>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Question%20for%20Kim%20Karen%20Ambong`}
            className="text-xs font-bold hover:underline inline-flex items-center gap-1"
            style={{ color: currentPalette.primary }}
          >
            <span>Send me a quick email directly at {PORTFOLIO_DATA.personal.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
