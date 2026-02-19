import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Not Found' }} />
      <ThemedView wrapper>
        <ThemedText type="title">Not Found</ThemedText>
        <Link href="/">
          <ThemedText type="link">Go to Home</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
