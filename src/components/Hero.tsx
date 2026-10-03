import React from 'react';
import { ArrowRight, Calendar, ChevronRight, Globe, Mail, Sparkles, TrendingUp, Zap, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onBookCallClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCallClick }) => {
  const { personal, hero } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors bg-[#FAF8F5]">
      {/* Background soft ambient cream glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10 transition-all duration-500 opacity-70"
        style={{ backgroundColor: currentPalette.glow }}
      />
      <div
        className="absolute top-1/3 left-10 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none -z-10 opacity-50"
        style={{ backgroundColor: currentPalette.surface }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border text-xs font-medium text-[#57534E] shadow-sm mb-6 animate-fade-in transition-all"
            style={{ borderColor: currentPalette.border }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: currentPalette.primary }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: currentPalette.primary }}
              />
            </span>
            <span className="text-[#1C1917] font-semibold">{hero.badge}</span>
            <span className="text-[#D6CDC0]">•</span>
            <span className="text-[#78716C] hidden sm:inline">Flexible US / AU / UK Hours</span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-[1.18] mb-6">
            Helping busy founders reclaim their time with{' '}
            <span
              className="font-serif-accent italic font-normal text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${currentPalette.primary}, ${currentPalette.light})`,
              }}
            >
              high-converting funnels
            </span>{' '}
            & automated systems.
          </h1>

          {/* Hero Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#57534E] leading-relaxed max-w-3xl mb-10 font-normal">
            {hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={onBookCallClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#1C1917] hover:bg-[#292524] rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              style={{
                boxShadow: `0 8px 24px ${currentPalette.glow}`,
              }}
            >
              <Calendar className="w-4 h-4 text-[#E7DFD3]" />
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#case-studies"
              onClick={scrollToWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-[#1C1917] hover:text-black bg-white hover:bg-[#FAF8F5] border border-[#E7DFD3] rounded-2xl transition-all shadow-sm hover:border-[#D6CDC0]"
            >
              <span>{hero.secondaryCta}</span>
              <ChevronRight className="w-4 h-4 text-[#78716C]" />
            </a>
          </div>

          {/* Trust Mini-Bar */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#665E55] mb-14 border-y border-[#EBE4D8] py-3.5 w-full max-w-3xl">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
              <span className="font-medium">Taguig, Philippines</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
              <span className="font-medium">AEST, EST & PST Timezone Aligned</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
              <span className="font-medium">400 Mbps Fiber + 5G Mobile Backup</span>
            </div>
          </div>

          {/* 3 Main Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full text-left">
            {hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-7 rounded-2xl bg-white border border-[#EBE4D8] hover:border-[#D8CEBE] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  borderColor: undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = currentPalette.border;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight transition-colors"
                  >
                    {stat.value}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      color: currentPalette.primary,
                    }}
                  >
                    {idx === 0 && <Clock className="w-4 h-4" />}
                    {idx === 1 && <Mail className="w-4 h-4" />}
                    {idx === 2 && <TrendingUp className="w-4 h-4" />}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#1C1917] mb-1">{stat.label}</h3>
                <p className="text-xs text-[#78716C] leading-relaxed">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
