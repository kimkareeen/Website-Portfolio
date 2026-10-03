import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Calendar, 
  Copy, 
  Check, 
  ExternalLink, 
  Phone, 
  MapPin, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  onBookCallClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookCallClick }) => {
  const { personal } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-[#EAE3D6] transition-colors">
      {/* Background ambient lighting */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none -z-10 transition-all duration-500 opacity-60"
        style={{ backgroundColor: currentPalette.glow }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border text-xs font-semibold mb-4 shadow-xs"
            style={{ borderColor: currentPalette.border, color: currentPalette.primary }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: currentPalette.primary }}
            />
            <span>Ready for Immediate Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight mb-6">
            Let's Get Your Time Back & Scale Your Systems.
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl mx-auto">
            Whether you need a full GoHighLevel funnel built, a daily 100–500 email outreach engine, or an organized VA to take over your inbox—let's discuss how I can support your business.
          </p>
        </div>

        {/* Main Contact Card */}
        <div
          className="rounded-3xl bg-white border p-8 sm:p-12 shadow-lg relative overflow-hidden"
          style={{ borderColor: currentPalette.border }}
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left: Quick Actions & Pitch */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: currentPalette.primary }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Next Step</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1C1917] mb-4">
                Schedule a Free 15-Minute Discovery Chat
              </h3>
              <p className="text-sm text-[#665E55] leading-relaxed mb-6">
                No high-pressure sales pitch. Just a quick, friendly conversation to understand your workflow, audit current bottlenecks, and see if we're an ideal fit.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-[#44403C]">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-2xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      color: currentPalette.primary,
                    }}
                  >
                    ✓
                  </div>
                  <span>Audit of your current bottlenecks or upcoming launch</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#44403C]">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-2xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      color: currentPalette.primary,
                    }}
                  >
                    ✓
                  </div>
                  <span>Tailored package recommendation (no unnecessary retainers)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#44403C]">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-2xs"
                    style={{
                      backgroundColor: currentPalette.surface,
                      color: currentPalette.primary,
                    }}
                  >
                    ✓
                  </div>
                  <span>Quick 48-hour onboarding path if you decide to proceed</span>
                </div>
              </div>

              {/* Primary Book Call CTA */}
              <button
                onClick={onBookCallClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-[#E7DFD3]" />
                <span>Book a Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Direct Connection Channels */}
            <div className="space-y-4 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E7DFD3]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] block mb-2">
                Direct Contact Methods
              </span>

              {/* Email Block with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D5] hover:border-[#D6CDC0] transition-colors shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-[#78716C] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
                    Email Address
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    style={{ color: currentPalette.primary }}
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm sm:text-base font-bold text-[#1C1917] transition-colors break-all block hover:underline"
                >
                  {personal.email}
                </a>
              </div>

              {/* LinkedIn Block */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D5] hover:border-[#D6CDC0] transition-colors shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-[#78716C] flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
                    LinkedIn Profile
                  </span>
                  <span className="text-[11px] text-[#A8A29E]">Fast Messaging</span>
                </div>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#1C1917] transition-colors flex items-center justify-between group hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-[#78716C] group-hover:text-[#1C1917] transition-colors" />
                </a>
              </div>

              {/* Location & Timezone info */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D5] space-y-2 text-xs text-[#57534E] shadow-2xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: currentPalette.primary }} />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: currentPalette.primary }} />
                  <span>{personal.timezones}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: currentPalette.primary }} />
                  <span>{personal.phone}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
