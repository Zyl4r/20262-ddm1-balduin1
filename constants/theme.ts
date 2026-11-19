/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

/** Paleta inspirada na interface de Overwatch: azul-marinho, laranja e azul claro. */
export const Palette = {
  orange: '#F99E1A',
  orangeSoft: '#FFB547',
  blue: '#4FC1E9',
  navy: '#0F1620',
  navyHeader: '#1A2433',
  surface: '#18222F',
  border: '#2A3647',
  tabBar: '#0B1119',
  text: '#E9EEF4',
  textMuted: '#9AA8B8',
  icon: '#6E7C8C',
};

const theme = {
  text: Palette.text,
  textMuted: Palette.textMuted,
  background: Palette.navy,
  surface: Palette.surface,
  border: Palette.border,
  tint: Palette.orange,
  icon: Palette.icon,
  tabIconDefault: Palette.icon,
  tabIconSelected: Palette.orange,
  tabBgColor: Palette.tabBar,
};

// O app usa o mesmo visual escuro em ambos os esquemas de cor.
export const Colors = {
  light: theme,
  dark: theme,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
