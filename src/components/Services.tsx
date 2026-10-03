import React from 'react';
import { 
  Share2, 
  CalendarDays, 
  Layers, 
  MailCheck, 
  Cpu, 
  ShieldCheck, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ServicesProps {
  onBookCallClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookCallClick }) => {
  const { services } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    const iconStyle = { color: currentPalette.primary };
    switch (iconName) {
      case 'Share2':
        return <Share2 className={iconClass} style={iconStyle} />;
      case 'CalendarDays':
        return <CalendarDays className={iconClass} style={iconStyle} />;
      case 'Layers':
        return <Layers className={iconClass} style={iconStyle} />;
      case 'MailCheck':
        return <MailCheck className={iconClass} style={iconStyle} />;
      case 'Cpu':
        return <Cpu className={iconClass} style={iconStyle} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} style={iconStyle} />;
      default:
        return <Zap className={iconClass} style={iconStyle} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            Services Built to Free Up Your Time
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base">
            Not just task-checking. I deliver end-to-end systems that drive leads, organize your operations, and scale your business without you needing to micromanage.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl bg-white border border-[#E8E0D5] transition-all duration-300 hover:shadow-lg flex flex-col justify-between hover:-translate-y-1"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentPalette.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div>
                {/* Header with Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      border: `1px solid ${currentPalette.border}`,
                    }}
                  >
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#665E55] bg-[#F7F3EC] px-3 py-1 rounded-full border border-[#E8E0D5]">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1C1917] mb-2 transition-colors group-hover:text-[#8D5B32]">
                  {service.title}
                </h3>

                {/* Benefit One-Liner */}
                <p className="text-sm font-semibold text-[#44403C] mb-3 leading-snug">
                  {service.benefit}
                </p>

                {/* Description */}
                <p className="text-xs text-[#78716C] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tangible Deliverables */}
                <div className="pt-4 border-t border-[#EAE3D6] mb-6">
                  <span className="text-[11px] font-bold text-[#78716C] uppercase tracking-wider block mb-3">
                    What You Get:
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#44403C]">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button inside card */}
              <button
                onClick={onBookCallClick}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#1C1917] hover:text-white text-[#1C1917] text-xs font-bold border border-[#E8E0D5] transition-all cursor-pointer shadow-xs"
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#1C1917] mb-1">
              Need a blended package or specific software not listed?
            </h4>
            <p className="text-xs sm:text-sm text-[#665E55]">
              I frequently create customized packages combining funnels, outreach scripts, and daily inbox triage.
            </p>
          </div>
          <button
            onClick={onBookCallClick}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-105"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
