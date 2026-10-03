import React from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Wifi, 
  Monitor, 
  Headphones, 
  GraduationCap, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import kimPhoto from '../assets/images/regenerated_image_1790944739001.png';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            {about.heading}
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base">
            Proactive execution, psychological insights into buyer behavior, and airtight systems.
          </p>
        </div>

        {/* Bio & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Avatar / Profile Graphic Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl p-7 bg-white border border-[#E7DFD3] shadow-md overflow-hidden group">
              {/* Soft decorative background accent */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-all duration-500 opacity-60"
                style={{ backgroundColor: currentPalette.surface }}
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Clean Professional Avatar with Real Photo */}
                <div
                  className="relative w-36 h-36 rounded-full bg-[#F5EFE6] p-1.5 shadow-md mb-4 transition-colors border-2"
                  style={{ borderColor: currentPalette.border }}
                >
                  <div className="w-full h-full rounded-full bg-[#FAF8F5] relative overflow-hidden group/avatar">
                    <img
                      src={kimPhoto}
                      alt={personal.fullName}
                      className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover/avatar:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Status pill inside avatar */}
                    <div
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm backdrop-blur-md whitespace-nowrap bg-white/90 text-[#1C1917]"
                      style={{
                        borderColor: currentPalette.border,
                      }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ backgroundColor: currentPalette.primary }} />
                      ONLINE
                    </div>
                  </div>
                  <div
                    className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white shadow-xs"
                    style={{ backgroundColor: currentPalette.primary }}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#1C1917] mb-0.5">{personal.fullName}</h3>
                <p className="text-xs font-bold mb-2 tracking-wide" style={{ color: currentPalette.primary }}>
                  {personal.subtitle}
                </p>
                <p className="text-xs text-[#78716C] mb-4">{personal.location} • Ready to Assist</p>

                {/* Micro Badges */}
                <div className="w-full grid grid-cols-2 gap-2 text-left pt-4 border-t border-[#EAE3D6]">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3]">
                    <span className="text-[10px] text-[#78716C] block font-medium">Remote Since</span>
                    <span className="text-xs font-bold text-[#1C1917]">June 2020 (4+ Yrs)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3]">
                    <span className="text-[10px] text-[#78716C] block font-medium">Bilingual</span>
                    <span className="text-xs font-bold text-[#1C1917]">English & Filipino</span>
                  </div>
                </div>

                <div
                  className="w-full mt-3 p-3 rounded-xl border text-left flex items-center gap-2.5 shadow-xs"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                  }}
                >
                  <GraduationCap className="w-4 h-4 shrink-0" style={{ color: currentPalette.primary }} />
                  <span className="text-[11px] font-semibold text-[#1C1917] leading-tight">
                    {personal.education}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* First-person Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-[#44403C]">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal">
              {about.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-[#44403C]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Remote Readiness Specs */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" style={{ color: currentPalette.primary }} />
                Remote Work Readiness & Reliability
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7DFD3] shadow-xs">
                  <Wifi className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                  <div>
                    <span className="font-bold text-[#1C1917] block">High-Speed Internet</span>
                    <span className="text-[#78716C]">400 Mbps Converge Fiber + 5G mobile backup</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7DFD3] shadow-xs">
                  <Monitor className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                  <div>
                    <span className="font-bold text-[#1C1917] block">Dedicated Dual Monitors</span>
                    <span className="text-[#78716C]">AMD Ryzen 5, 2x 24" screens for multitasking</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7DFD3] shadow-xs">
                  <Headphones className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                  <div>
                    <span className="font-bold text-[#1C1917] block">Professional Call Setup</span>
                    <span className="text-[#78716C]">1080p webcam + noise-cancelling headset</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7DFD3] shadow-xs">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                  <div>
                    <span className="font-bold text-[#1C1917] block">Timezone Adaptability</span>
                    <span className="text-[#78716C]">Scheduled overlap with US (EST/PST), AU & UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Row */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Tools & Software I Use Daily
            </h3>
            <span className="text-xs text-[#78716C]">GoHighLevel Certified & Experienced</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {about.tools.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-xl bg-white border border-[#E7DFD3] hover:border-[#D6CDC0] transition-all text-center group hover:-translate-y-0.5 shadow-xs"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = currentPalette.border;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <span className="text-sm font-bold text-[#1C1917] block transition-colors group-hover:text-[#8D5B32]">
                  {tool.name}
                </span>
                <span className="text-[11px] text-[#78716C] block mt-0.5">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* "How I Work" Strip */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: currentPalette.primary }}>
              Work Ethic & Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              How I Work With Founders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.howIWork.map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl bg-white border border-[#E7DFD3] transition-all group shadow-sm hover:shadow-md"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = currentPalette.border;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <div
                  className="text-4xl font-black text-[#E8E1D5] transition-colors mb-4 font-mono group-hover:text-[#D6CDC0]"
                >
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" style={{ color: currentPalette.primary }} />
                  <span>{item.title}</span>
                </h4>
                <p className="text-sm text-[#665E55] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
