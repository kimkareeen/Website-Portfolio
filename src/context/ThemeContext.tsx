import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BrandPalette {
  id: string;
  name: string;
  primary: string;
  hover: string;
  light: string;
  glow: string;
  surface: string;
  border: string;
  pageBg: string;
  cardBg: string;
  textMain: string;
  textMuted: string;
  description: string;
}

export const PRESET_PALETTES: BrandPalette[] = [
  {
    id: 'linen-mocha',
    name: 'Linen Cream & Mocha',
    primary: '#8D5B32',
    hover: '#734824',
    light: '#B28357',
    glow: 'rgba(141, 91, 50, 0.12)',
    surface: '#F5EFE6',
    border: '#E7DFD3',
    pageBg: '#FAF8F5',
    cardBg: '#FFFFFF',
    textMain: '#1C1917',
    textMuted: '#665E55',
    description: 'Clean, warm aesthetic linen & rich mocha',
  },
  {
    id: 'alabaster-camel',
    name: 'Alabaster & Camel',
    primary: '#A16207',
    hover: '#854D0E',
    light: '#CA8A04',
    glow: 'rgba(161, 98, 7, 0.12)',
    surface: '#FAF3E8',
    border: '#ECE0CF',
    pageBg: '#FDFBF7',
    cardBg: '#FFFFFF',
    textMain: '#1C1917',
    textMuted: '#6B6358',
    description: 'Sunlit warm camel & creamy alabaster',
  },
  {
    id: 'editorial-espresso',
    name: 'Editorial Noir & Ivory',
    primary: '#1C1917',
    hover: '#292524',
    light: '#44403C',
    glow: 'rgba(28, 25, 23, 0.08)',
    surface: '#F4EFE6',
    border: '#E4DDD2',
    pageBg: '#FAF7F2',
    cardBg: '#FFFFFF',
    textMain: '#1C1917',
    textMuted: '#57534E',
    description: 'Minimalist editorial ivory & crisp espresso',
  },
  {
    id: 'soft-terracotta',
    name: 'Terracotta & Sand',
    primary: '#9E5338',
    hover: '#834029',
    light: '#C4775D',
    glow: 'rgba(158, 83, 56, 0.12)',
    surface: '#F9F2ED',
    border: '#EBDCD3',
    pageBg: '#FBF8F5',
    cardBg: '#FFFFFF',
    textMain: '#1C1917',
    textMuted: '#6E615B',
    description: 'Boutique warm clay & soft warm cream',
  },
  {
    id: 'champagne-pearl',
    name: 'Champagne & Pearl',
    primary: '#967444',
    hover: '#7A5B32',
    light: '#B89766',
    glow: 'rgba(150, 116, 68, 0.12)',
    surface: '#F8F5EB',
    border: '#E8E1CF',
    pageBg: '#FCFAF6',
    cardBg: '#FFFFFF',
    textMain: '#1C1917',
    textMuted: '#686255',
    description: 'Understated champagne & warm pearl',
  },
];

interface ThemeContextType {
  currentPalette: BrandPalette;
  setPalette: (palette: BrandPalette) => void;
  setPaletteById: (id: string) => void;
  setCustomColor: (hex: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPalette, setCurrentPalette] = useState<BrandPalette>(PRESET_PALETTES[0]);

  // Apply CSS variables on root when palette changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', currentPalette.primary);
    root.style.setProperty('--brand-hover', currentPalette.hover);
    root.style.setProperty('--brand-light', currentPalette.light);
    root.style.setProperty('--brand-glow', currentPalette.glow);
    root.style.setProperty('--brand-surface', currentPalette.surface);
    root.style.setProperty('--brand-border', currentPalette.border);
    root.style.setProperty('--bg-main', currentPalette.pageBg);
    root.style.setProperty('--bg-card', currentPalette.cardBg);
    root.style.setProperty('--text-main', currentPalette.textMain);
    root.style.setProperty('--text-muted', currentPalette.textMuted);
    root.style.setProperty('--border-subtle', currentPalette.border);
  }, [currentPalette]);

  const setPaletteById = (id: string) => {
    const found = PRESET_PALETTES.find((p) => p.id === id);
    if (found) {
      setCurrentPalette(found);
    }
  };

  const setCustomColor = (hex: string) => {
    const customPalette: BrandPalette = {
      id: 'custom',
      name: 'Custom Accent',
      primary: hex,
      hover: hex,
      light: hex,
      glow: `${hex}22`,
      surface: '#F5EFE6',
      border: '#E5DACB',
      pageBg: '#FAF8F5',
      cardBg: '#FFFFFF',
      textMain: '#1C1917',
      textMuted: '#665E55',
      description: 'Your custom accent on cream & white',
    };
    setCurrentPalette(customPalette);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentPalette,
        setPalette: setCurrentPalette,
        setPaletteById,
        setCustomColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
