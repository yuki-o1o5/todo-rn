import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <KeyboardProvider>
        <Stack initialRouteName="index">
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerTitle: 'Home',
              headerLeft: () => <></>,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: true,
              headerTitle: 'TodoRN',
              headerLeft: () => <></>,
            }}
          />
          <Stack.Screen
            name="modal"
            options={{ presentation: 'modal', title: 'Modal' }}
          />
          <Stack.Screen
            name="+not-found"
            options={{
              headerShown: true,
              headerTitle: 'Not Found',
              headerLeft: () => <></>,
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </KeyboardProvider>
    </ThemeProvider>
  );
}
