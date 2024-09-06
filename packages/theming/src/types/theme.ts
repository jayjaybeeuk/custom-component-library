import { defaultTheme } from '../constants';

type Theme = {
  [key: string]: string;
};

type BaseTheme = typeof defaultTheme;

type OptionalTheme<T extends BaseTheme> = {
  [K in keyof T]?: T[K];
};

type DefaultTheme = OptionalTheme<BaseTheme>;

export type { Theme, DefaultTheme };
