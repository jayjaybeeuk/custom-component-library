import { DefaultTheme } from './types';
import { useTheme } from './hooks';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: DefaultTheme;
  scopedName?: string;
}

export const ThemeProvider = ({
  children,
  theme,
  scopedName,
}: ThemeProviderProps) => {
  const defaultTheme = useTheme();

  const themeToUse: DefaultTheme = theme
    ? { ...theme, ...defaultTheme }
    : defaultTheme;

  const scopedNameToUse = scopedName ? `.${scopedName}` : ':root';

  const themeStyles = `
    ${scopedNameToUse} {
      --scaling: ${themeToUse.scaling};
      --default-font-family: ${themeToUse.defaultFontFamily};
      --default-font-size: ${themeToUse.defaultFontSize};
      --font-size-1: ${themeToUse.fontSize1};
      --font-size-2:${themeToUse.fontSize2};
      --font-size-3: ${themeToUse.fontSize3};
      --font-size-4: ${themeToUse.fontSize4};
      --font-size-5: ${themeToUse.fontSize5};
      --font-size-6: ${themeToUse.fontSize6};
      --font-size-7: ${themeToUse.fontSize7};

      --space-1: ${themeToUse.space1};
      --space-2: ${themeToUse.space2};
      --space-3: ${themeToUse.space3};
      --space-4: ${themeToUse.space4};

      --lg-width: ${themeToUse.lgWidth};
      --md-height: ${themeToUse.mdHeight};

      --black-20-solid: ${themeToUse.black20Solid};
      --black-40-solid: ${themeToUse.black40Solid};
      --black-60-solid: ${themeToUse.black60Solid};
      --black-80-solid: ${themeToUse.black80Solid};
      --black-86-solid: ${themeToUse.black86Solid};
      --black-90-solid: ${themeToUse.black90Solid};
      --black-92-solid: ${themeToUse.black92Solid};
      --black-94-solid: ${themeToUse.black94Solid};
      --black-96-solid: ${themeToUse.black96Solid};
      --black-97-solid: ${themeToUse.black97Solid};
      --black-98-solid: ${themeToUse.black98Solid};
      --black-99-solid: ${themeToUse.black99Solid};
      --black-8-opac: ${themeToUse.black8Opac};
      --black-6-opac: ${themeToUse.black6Opac};
      --black-4-opac: ${themeToUse.black4Opac};
      --black-2-opac: ${themeToUse.black2Opac};
      --purple: ${themeToUse.purple};
      --logo-1: ${themeToUse.logo1};
      --logo-2: ${themeToUse.logo2};
      --logo-3: ${themeToUse.logo3};
      --orange-dark: ${themeToUse.orangeDark};
      --orange: ${themeToUse.orange};
      --orange-12-opac: ${themeToUse.orange12Opac};
      --orange-4-opac: ${themeToUse.orange4Opac};
      --orange-80-solid: ${themeToUse.orange80Solid};
      --blue-dark: ${themeToUse.blueDark};
      --blue: ${themeToUse.blue};
      --blue-12-opac: ${themeToUse.blue12Opac};
      --blue-4-opac: ${themeToUse.blue4Opac};
      --blue-80-solid: ${themeToUse.blue80Solid};
      --green-dark: ${themeToUse.greenDark};
      --green: ${themeToUse.green};
      --green-4-opac: ${themeToUse.green4Opac};
      --pink-dark: ${themeToUse.pinkDark};
      --pink: ${themeToUse.pink};
      --pink-8-opac: ${themeToUse.pink8Opac};
      --pink-4-opac: ${themeToUse.pink4Opac};
      --red: ${themeToUse.red};
      --red-16-opac: ${themeToUse.red16Opac};
      --red-4-opac: ${themeToUse.red4Opac};
      --white: ${themeToUse.white};
      --white-6-opac: ${themeToUse.white6Opac};
      --white-20-opac: ${themeToUse.white20Opac};
      --white-80-opac: ${themeToUse.white80Opac};
      --white-96-opac: ${themeToUse.white96Opac};
      --transparent: ${themeToUse.transparent};
      --hm-red: ${themeToUse.hmRed};
      --guide-100: ${themeToUse.guide100};
      --guide-50: ${themeToUse.guide50};
      --guide-25: ${themeToUse.guide25};
      --hm-orange: ${themeToUse.hmOrange};
      --hm-yellow: ${themeToUse.hmYellow};
      --hm-light-green: ${themeToUse.hmLightGreen};
      --hm-dark-green: ${themeToUse.hmDarkGreen};

      --shadow-1: ${themeToUse.shadow1};
      --shadow-2: ${themeToUse.shadow2};
      --shadow-2-hover: ${themeToUse.shadow2Hover};
      --shadow-3: ${themeToUse.shadow3};
      --shadow-3-hover: ${themeToUse.shadow3Hover};

      --base-menu-content-padding: ${themeToUse.baseMenuContentPadding};
      --color-focus-root: ${themeToUse.colorFocusRoot};
      --radius-4: ${themeToUse.radius4};
      --radius-5: ${themeToUse.radius5};
      --gray-a5: ${themeToUse.grayA5};
      --gray-12: ${themeToUse.gray12};
      --pink-a11: ${themeToUse.pinkA11};

      --focus-8: ${themeToUse.focus8};

      --red-1: ${themeToUse.red1};
      --red-2: ${themeToUse.red2};
      --red-3: ${themeToUse.red3};
      --red-4: ${themeToUse.red4};
      --red-5: ${themeToUse.red5};
      --red-6: ${themeToUse.red6};
      --red-7: ${themeToUse.red7};
      --red-8: ${themeToUse.red8};
      --red-9: ${themeToUse.red9};
      --red-10: ${themeToUse.red10};
      --red-11: ${themeToUse.red11};
      --red-12: ${themeToUse.red12};

      --red-a1: ${themeToUse.redA1};
      --red-a2: ${themeToUse.redA2};
      --red-a3: ${themeToUse.redA3};
      --red-a4: ${themeToUse.redA4};
      --red-a5: ${themeToUse.redA5};
      --red-a6: ${themeToUse.redA6};
      --red-a7: ${themeToUse.redA7};
      --red-a8: ${themeToUse.redA8};
      --red-a9: ${themeToUse.redA9};
      --red-a10: ${themeToUse.redA10};
      --red-a11: ${themeToUse.redA11};
      --red-a12: ${themeToUse.redA12};

      --red-contrast: ${themeToUse.redContrast};
      --red-surface: ${themeToUse.redSurface};
      --red-indicator: ${themeToUse.redIndicator};
      --red-track: ${themeToUse.redTrack};

      --red-1: ${themeToUse.red1Oklch};
      --red-2: ${themeToUse.red2Oklch};
      --red-3: ${themeToUse.red3Oklch};
      --red-4: ${themeToUse.red4Oklch};
      --red-5: ${themeToUse.red5Oklch};
      --red-6: ${themeToUse.red6Oklch};
      --red-7: ${themeToUse.red7Oklch};
      --red-8: ${themeToUse.red8Oklch};
      --red-9: ${themeToUse.red9Oklch};
      --red-10: ${themeToUse.red10Oklch};
      --red-11: ${themeToUse.red11Oklch};
      --red-12: ${themeToUse.red12Oklch};

      --red-a1: ${themeToUse.redA1Color};
      --red-a2: ${themeToUse.redA2Color};
      --red-a3: ${themeToUse.redA3Color};
      --red-a4: ${themeToUse.redA4Color};
      --red-a5: ${themeToUse.redA5Color};
      --red-a6: ${themeToUse.redA6Color};
      --red-a7: ${themeToUse.redA7Color};
      --red-a8: ${themeToUse.redA8Color};
      --red-a9: ${themeToUse.redA9Color};
      --red-a10: ${themeToUse.redA10Color};
      --red-a11: ${themeToUse.redA11Color};
      --red-a12: ${themeToUse.redA12Color};

      --accent-contrast: ${themeToUse.accentContrast};
      --cursor-button: ${themeToUse.cursorButton};

    }
  `;

  return (
    <>
      <style>{themeStyles}</style>
      <div className={scopedName}>{children}</div>
    </>
  );
};
