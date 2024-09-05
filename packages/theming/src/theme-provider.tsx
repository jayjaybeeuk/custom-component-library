import React, { useEffect } from 'react';
import { Theme } from '@jayjaybeeuk/types';
import defaultTheme from './template.module.css';

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  useEffect(() => {
    const root = document.documentElement;

    const themeToUse = theme || defaultTheme;

    Object.entries(themeToUse).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    return () => {
      // Reset to original values when the theme is removed
      Object.keys(themeToUse).forEach(key => {
        root.style.removeProperty(key);
      });
    };
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
