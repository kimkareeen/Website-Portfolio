import React, { useState } from 'react';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { useTheme, PRESET_PALETTES } from '../context/ThemeContext';

export const BrandPaletteBar: React.FC = () => {
  const { currentPalette, setPaletteById, setCustomColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customHex, setCustomHex] = useState('');

  const handleApplyCustomHex = (e: React.FormEvent) => {
    e.preventDefault();
    if (customHex && /^#([0-9A-F]{3}){1,2}$/i.test(customHex)) {
      setCustomColor(customHex);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 hover:bg-white text-[#1C1917] border border-[#E5DACB] shadow-lg backdrop-blur-md text-xs font-semibold hover:border-[#D6CDC0] transition-all hover:scale-105 cursor-pointer group"
          title="Customize Brand Colors & Aesthetic"
        >
          <span
            className="w-3.5 h-3.5 rounded-full ring-2 ring-[#E5DACB] transition-transform group-hover:scale-110"
            style={{ backgroundColor: currentPalette.primary }}
          />
          <Palette className="w-3.5 h-3.5 text-[#78716C]" />
          <span className="hidden sm:inline text-[#665E55]">Palette:</span>
          <span className="font-bold" style={{ color: currentPalette.primary }}>
            {currentPalette.name}
          </span>
        </button>
      )}

      {/* Expanded Palette Drawer / Card */}
      {isOpen && (
        <div className="relative w-80 sm:w-96 rounded-3xl bg-white/98 backdrop-blur-xl border border-[#E5DACB] shadow-2xl p-5 text-[#1C1917] animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE3D6]">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#8D5B32]" />
              <div>
                <h4 className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                  Clean Aesthetic Branding
                </h4>
                <p className="text-[10px] text-[#78716C]">
                  White & cream aesthetic palettes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
              aria-label="Close brand palette customizer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Palette Preset Swatches */}
          <div className="space-y-2 mb-4">
            <span className="text-[10px] font-bold text-[#78716C] uppercase tracking-wider block">
              Curated Aesthetic Variations:
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {PRESET_PALETTES.map((palette) => {
                const isSelected = currentPalette.id === palette.id;
                return (
                  <button
                    key={palette.id}
                    onClick={() => setPaletteById(palette.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FAF6F0] border border-[#E5DACB] shadow-xs'
                        : 'hover:bg-[#FAF8F5] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full ring-2 ring-[#E5DACB] shrink-0"
                        style={{ backgroundColor: palette.primary }}
                      />
                      <div>
                        <span className="text-xs font-bold text-[#1C1917] block">
                          {palette.name}
                        </span>
                        <span className="text-[10px] text-[#78716C] block">
                          {palette.description}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5" style={{ color: palette.primary }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Accent Hex Input */}
          <form onSubmit={handleApplyCustomHex} className="pt-3 border-t border-[#EAE3D6]">
            <span className="text-[10px] font-bold text-[#78716C] uppercase tracking-wider block mb-1.5">
              Or Custom Accent Color:
            </span>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="#8D5B32"
                  value={customHex}
                  onChange={(e) => setCustomHex(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5DACB] text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#8D5B32]"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-[#1C1917] hover:bg-[#292524] text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
