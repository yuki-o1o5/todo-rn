import { SPACER } from '@/constants/spacer';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { HorizontalSpacer } from './horizontal-spacer';
import { ThemedView } from './themed-view';

type TextInputFieldProps = {
  value: string;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
} & Omit<TextInput['props'], 'value' | 'onChangeText'>;

export default function TextInputField({
  value,
  label,
  errorMessage,
  placeholder,
  style,
  onChangeText,
  autoCapitalize = 'none',
  ...rest
}: TextInputFieldProps) {
  return (
    <>
      {label ? (
        <>
          <Text>{label}</Text>
          <View style={styles.spacer4} />
        </>
      ) : null}

      <ThemedView style={[styles.wrapper, style]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={autoCapitalize}
          {...rest}
        />
      </ThemedView>

      {errorMessage ? (
        <>
          <HorizontalSpacer height="SS" />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </>
      ) : (
        <View style={styles.errorMessageSpacer} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
  },
  input: {
    padding: 16,
  },
  spacer2: {
    height: 2,
  },
  spacer4: {
    height: 4,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
  errorMessageSpacer: {
    height: SPACER.space20,
  },
});
