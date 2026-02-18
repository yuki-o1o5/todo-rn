/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    white: 'white',
    gray: 'gray',

    warning: 'red',
    primary: '#72BF78',
    secondary: '#A0D683',
    tertiary: '#D3EE98',
    accent: '#FEFF9F',

    textPrimary: '#1F1F1F',
    textSecondary: '#355130',
    textTertiary: '#D1D1D1',
    textLink: '#007BFF',

    backgroundPrimary: '#EAEEE5',
    backgroundOverlay: 'rgba(0, 0, 0, 0.6)',

    buttonPrimary: '#007BFF',

    buttonTextPrimary: '#fff',
    tint: tintColorLight,

    icon: '#687076',
    plusIcon: '#fff',
    plusIconBackground: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    iconButton: '#000',
  },
  dark: {
    white: 'white',
    gray: 'gray',

    warning: 'red',
    primary: '#72BF78',
    secondary: '#A0D683',
    tertiary: '#D3EE98',
    accent: '#FEFF9F',

    textPrimary: '#1F1F1F',
    textSecondary: '#355130',
    textTertiary: '#D1D1D1',
    textLink: '#007BFF',

    backgroundPrimary: '#EAEEE5',
    backgroundOverlay: 'rgba(0, 0, 0, 0.6)',

    buttonPrimary: '#007BFF',

    buttonTextPrimary: '#fff',
    tint: tintColorDark,

    icon: '#687076',
    plusIcon: '#fff',
    plusIconBackground: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorDark,
    iconButton: '#000',
  },
};

export type ColorsType = keyof typeof Colors.light & keyof typeof Colors.dark;

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
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
