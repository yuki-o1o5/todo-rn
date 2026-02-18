/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    white: '#FFFFFF',
    black: '#000000',

    brand: '#22C55E',
    brandDark: '#15803D',
    brandLight: '#86EFAC',

    text: '#1E293B',
    textSubtle: '#64748B',
    textInverse: '#FFFFFF',
    headerText: '#FFFFFF',

    background: '#F8FAFC',
    backgroundSoft: '#DCFCE7',
    headerBackground: '#22C55E',

    border: '#E2E8F0',

    button: '#22C55E',
    buttonHover: '#15803D',
    buttonDisabled: '#BBF7D0',

    success: '#16A34A',
    warning: '#FACC15',
    error: '#EF4444',

    focus: '#22C55E',
    shadow: 'rgba(0, 0, 0, 0.4)',
    shadowDark: '#000000',
    transparent: 'transparent',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',

    brand: '#16A34A',
    brandDark: '#166534',
    brandLight: '#4ADE80',

    text: '#E2E8F0',
    textSubtle: '#94A3B8',
    textInverse: '#0F172A',
    headerText: '#E2E8F0',

    background: '#0F172A',
    backgroundSoft: '#052E16',
    headerBackground: '#0F172A',

    border: '#334155',

    button: '#16A34A',
    buttonHover: '#22C55E',
    buttonDisabled: '#14532D',

    success: '#22C55E',
    warning: '#EAB308',
    error: '#DC2626',

    focus: '#4ADE80',
    shadow: 'rgba(255, 255, 255, 0.4)',
    shadowDark: '#FFFFFF',
    transparent: 'transparent',
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
