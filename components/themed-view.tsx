import { useThemeColor } from '@/hooks/use-theme-color';
import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  wrapper?: boolean;
  /** Skip bottom inset (use on tab screens where tab bar handles it). Default: false */
  skipBottomInset?: boolean;
};

export function ThemedView({
  style,
  wrapper,
  skipBottomInset,
  ...otherProps
}: ThemedViewProps) {
  const colors = useThemeColor();
  const { top, bottom } = useSafeAreaInsets();

  if (wrapper) {
    return (
      <View
        style={[
          {
            backgroundColor: colors.backgroundPrimary,
            paddingTop: top,
            paddingBottom: skipBottomInset ? 0 : bottom,
            flex: 1,
          },
          style,
        ]}
        {...otherProps}
      />
    );
  }

  return (
    <View
      style={[{ backgroundColor: colors.backgroundPrimary }, style]}
      {...otherProps}
    />
  );
}
