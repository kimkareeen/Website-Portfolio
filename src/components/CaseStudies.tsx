import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  HelpCircle, 
  Wrench, 
  Trophy, 
  Edit3
} from 'lucide-react';
import { PORTFOLIO_DATA, CaseStudyItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CaseStudiesProps {
  onBookCallClick: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onBookCallClick }) => {
  const { caseStudies } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            Recent Case Studies & Impact
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base">
            Real problems solved for real businesses. Structured in an honest, transparent Problem → What I Did → Result breakdown.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#57534E] bg-white px-3.5 py-1 rounded-full border border-[#E7DFD3] shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
            <span>Verified Launch Metrics • <span className="font-bold text-[#1C1917]">275+ Funnel Opt-Ins</span> & 34.8% Conversion Rate</span>
          </div>
        </div>

        {/* 3 Case Study Cards */}
        <div className="space-y-10">
          {caseStudies.map((study: CaseStudyItem) => (
            <div
              key={study.id}
              className="p-7 sm:p-9 lg:p-11 rounded-3xl bg-white border border-[#E7DFD3] transition-all duration-300 shadow-sm hover:shadow-md"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentPalette.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
              }}
            >
              {/* Top Banner with Category & Client Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#EAE3D6]">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="px-3.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border shadow-2xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      borderColor: currentPalette.border,
                      color: currentPalette.primary,
                    }}
                  >
                    {study.category}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#57534E]">
                    Client: <span className="text-[#1C1917]">{study.clientType}</span>
                  </span>
                </div>
                <div className="text-xs text-[#78716C] font-medium">
                  {study.timeline}
                </div>
              </div>

              {/* Title & Key Highlight Metric */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight leading-snug">
                  {study.title}
                </h3>

                {/* Metric pill */}
                <div
                  className="shrink-0 p-4 rounded-2xl bg-[#FAF8F5] border flex items-center gap-4 min-w-[220px] shadow-xs"
                  style={{ borderColor: currentPalette.border }}
                >
                  <div
                    className="w-11 h-11 rounded-xl border flex items-center justify-center shadow-xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      borderColor: currentPalette.border,
                      color: currentPalette.primary,
                    }}
                  >
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className="text-xl sm:text-2xl font-black font-mono block leading-tight"
                      style={{ color: currentPalette.primary }}
                    >
                      {study.highlightMetric}
                    </span>
                    <span className="text-xs text-[#78716C] font-medium">
                      {study.highlightLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Problem → What I Did → Result Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                
                {/* 1. Problem */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
                      <HelpCircle className="w-4 h-4 text-rose-700" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-sm text-[#44403C] leading-relaxed font-normal">
                      {study.problem}
                    </p>
                  </div>
                </div>

                {/* 2. What I Did */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                      <Wrench className="w-4 h-4 text-amber-700" />
                      <span>What I Did</span>
                    </div>
                    <ul className="space-y-2.5">
                      {study.whatIDid.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#44403C] leading-snug">
                          <span className="font-bold mt-0.5" style={{ color: currentPalette.primary }}>•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. The Result */}
                <div
                  className="p-6 rounded-2xl border flex flex-col justify-between"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3" style={{ color: currentPalette.primary }}>
                      <Trophy className="w-4 h-4" />
                      <span>The Result</span>
                    </div>
                    <ul className="space-y-2.5">
                      {study.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1C1917] leading-snug font-medium">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Tools Used Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#EAE3D6] text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#78716C] font-medium">Tools Deployed:</span>
                  {study.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#E7DFD3] text-[#44403C] font-mono text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onBookCallClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline transition-colors cursor-pointer"
                  style={{ color: currentPalette.primary }}
                >
                  <span>Build something similar for my business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
