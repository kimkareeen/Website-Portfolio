import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Mail, 
  Linkedin, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const { personal } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const emailSubject = selectedPlan 
    ? encodeURIComponent(`Inquiry for ${selectedPlan} Package - Kim Karen Ambong`)
    : encodeURIComponent("Discovery Call Inquiry - Kim Karen Ambong");

  const emailBody = encodeURIComponent(
    `Hi Kim,\n\nI visited your portfolio and would like to schedule a free 15-minute discovery call to discuss working together.\n\nPackage/Services of interest: ${selectedPlan || 'General inquiry / Funnels / Lead Gen'}\nMy Timezone: \nTarget Start Date: \n\nLooking forward to speaking with you!`
  );

  const mailtoLink = `mailto:${personal.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E7DFD3] shadow-2xl p-6 sm:p-8 text-[#1C1917] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Soft Accent Glow */}
        <div
          className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-60"
          style={{ backgroundColor: currentPalette.glow }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mb-3 shadow-2xs"
            style={{
              backgroundColor: currentPalette.surface,
              borderColor: currentPalette.border,
              color: currentPalette.primary,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free 15-Min Discovery Call</span>
          </div>
          <h3 className="text-2xl font-bold text-[#1C1917] tracking-tight">
            Let's Connect with Kim
          </h3>
          <p className="text-xs sm:text-sm text-[#665E55] mt-1">
            {selectedPlan 
              ? `Interested in the "${selectedPlan}" package? Choose your preferred way to connect below:`
              : "Choose your preferred way to get in touch. I typically reply within a few hours on business days."}
          </p>
        </div>

        {/* Call Expectations */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] mb-6 text-xs text-[#44403C] space-y-2">
          <div className="flex items-center gap-2 text-[#1C1917] font-semibold">
            <Clock className="w-4 h-4" style={{ color: currentPalette.primary }} />
            <span>What to expect on our call:</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc text-[#665E55]">
            <li>Review your current business bottlenecks or funnel requirements</li>
            <li>Define exact scope, hours, and software workflows</li>
            <li>Zero pressure to commit — friendly fit exploration</li>
          </ul>
        </div>

        {/* Action Options */}
        <div className="space-y-3 mb-6">
          {/* Option 1: Direct Email Draft */}
          <a
            href={mailtoLink}
            className="w-full p-4 rounded-2xl bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-sm flex items-center justify-between shadow-md transition-all group hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#E7DFD3]" />
              </div>
              <div className="text-left">
                <div className="leading-tight">Send Pre-Filled Email</div>
                <div className="text-[11px] font-normal text-[#D6CDC0]">Opens in your mail client</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Option 2: Copy Email */}
          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] flex items-center justify-between">
            <div className="text-left">
              <span className="text-[11px] text-[#78716C] block font-medium">Or copy email manually:</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1C1917] break-all">{personal.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="shrink-0 ml-3 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F2ECE2] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#E7DFD3] text-[#1C1917]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#78716C]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Option 3: LinkedIn */}
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E8E0D5] text-xs sm:text-sm font-semibold text-[#1C1917] flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4" style={{ color: currentPalette.primary }} />
              <span>Connect & Message on LinkedIn</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#78716C] group-hover:text-[#1C1917] transition-colors" />
          </a>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#EAE3D6] flex items-center justify-between text-[11px] text-[#78716C]">
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentPalette.primary }}
            />
            Taguig, Philippines (GMT+8)
          </span>
          <span>US, AU & UK Hours Friendly</span>
        </div>

      </div>
    </div>
  );
};
