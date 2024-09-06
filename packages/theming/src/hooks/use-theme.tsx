import { createContext, useContext } from 'react';
import { defaultTheme } from '../constants';

const ThemeContext = createContext({ ...defaultTheme });

export const useTheme = () => useContext(ThemeContext);
