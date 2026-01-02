/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const colorPinkDark = '#F7ACD9';
const colorPinkLight = '#FFD9F0';
const colorDark = '#1E1E1E';
const colorWhite = '#FFFFFF';

const tintColorLight = colorPinkDark;
const tintColorDark = colorPinkDark;

export const Colors = {
  light: {
    text: colorDark,
    background: colorWhite,
    tint: tintColorLight,
    icon: colorDark,
    tabIconDefault: colorDark,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colorPinkLight,
    background: colorDark,
    tint: tintColorDark,
    icon: colorPinkLight,
    tabIconDefault: colorPinkLight,
    tabIconSelected: tintColorDark,
  },
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
