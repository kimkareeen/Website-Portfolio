import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, PricingPlan } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface PricingProps {
  onBookCallClick: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBookCallClick }) => {
  const { pricing } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Straightforward Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            Transparent, Value-Focused Rates
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base">
            No bloated overhead or locked contracts. Choose a flexible monthly retainer or request a custom project quote tailored to your exact tech stack.
          </p>
          <div className="inline-block mt-3 px-3.5 py-1 rounded-full bg-white border border-[#E7DFD3] text-[11px] text-[#78716C] shadow-xs">
            Rates are estimated placeholders and adjustable based on project scope & hours.
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {pricing.map((plan: PricingPlan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 bg-white ${
                  isPopular
                    ? 'shadow-xl lg:-translate-y-2'
                    : 'border border-[#E8E0D5] hover:border-[#D6CDC0] shadow-sm'
                }`}
                style={
                  isPopular
                    ? {
                        border: `2px solid ${currentPalette.primary}`,
                        boxShadow: `0 14px 34px -10px ${currentPalette.glow}, 0 4px 12px rgba(28, 25, 23, 0.05)`,
                      }
                    : {}
                }
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm"
                    style={{ backgroundColor: currentPalette.primary }}
                  >
                    {plan.badge || 'Most Popular'}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#1C1917] mb-2">{plan.name}</h3>
                    <p className="text-xs text-[#78716C] leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-[#EAE3D6]">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#78716C] font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] block">
                      Includes:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#44403C] leading-snug">
                          <Check
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: currentPalette.primary }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-5 border-t border-[#EAE3D6]">
                  <button
                    onClick={() => onBookCallClick(plan.name)}
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:scale-[1.02]"
                    style={
                      isPopular
                        ? {
                            backgroundColor: '#1C1917',
                            color: '#FFFFFF',
                          }
                        : {
                            backgroundColor: '#FAF8F5',
                            color: '#1C1917',
                            border: '1px solid #E8E0D5',
                          }
                    }
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#78716C] mt-2">
                    Zero lock-in • 14-day trial period available
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-[#E7DFD3] text-center text-xs text-[#665E55] flex items-center justify-center gap-2 shadow-xs">
          <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: currentPalette.primary }} />
          <span>Every package includes standard NDA protection, daily progress reports, and secure credential handling.</span>
        </div>

      </div>
    </section>
  );
};
