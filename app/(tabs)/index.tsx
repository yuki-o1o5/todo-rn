import TextInputField from '@/components/text-input';
import { ThemedText } from '@/components/themed-text';
import { SPACER } from '@/constants/spacer';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const tabBarHeight = useBottomTabBarHeight();
  const { top } = useSafeAreaInsets();

  return (
    <KeyboardAwareScrollView
      bottomOffset={tabBarHeight}
      contentContainerStyle={{
        paddingTop: top,
        paddingBottom: SPACER.space16,
      }}
      style={{
        flex: 1,
        paddingHorizontal: SPACER.space16,
      }}
    >
      <ThemedText type="subtitle" style={{ marginBottom: SPACER.space16 }}>
        Hello
      </ThemedText>
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInputField
        value={name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
        errorMessage="This is an error message"
      />
    </KeyboardAwareScrollView>
  );
}
