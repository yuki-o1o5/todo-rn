import { StyleSheet, View } from 'react-native';

export interface HorizontalSpacerProps {
  height: 'SS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
}

export function HorizontalSpacer({ height }: HorizontalSpacerProps) {
  let spacer;
  switch (height) {
    case 'SS':
      spacer = styles.spacer4;
      break;
    case 'S':
      spacer = styles.spacer8;
      break;
    case 'M':
      spacer = styles.spacer16;
      break;
    case 'L':
      spacer = styles.spacer24;
      break;
    case 'XL':
      spacer = styles.spacer32;
      break;
    case 'XXL':
      spacer = styles.spacer64;
      break;
  }
  return <View style={spacer} />;
}

const styles = StyleSheet.create({
  spacer4: {
    height: 4,
  },
  spacer8: {
    height: 8,
  },
  spacer16: {
    height: 16,
  },
  spacer24: {
    height: 24,
  },
  spacer32: {
    height: 32,
  },
  spacer64: {
    height: 64,
  },
});
