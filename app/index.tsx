import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView wrapper>
      <ThemedText type="title">Welcome to TodoRN</ThemedText>
      <Link href="/(tabs)">
        <ThemedText type="link">Get Started</ThemedText>
      </Link>
      <Link href="/+not-found">
        <ThemedText type="link">Go to Not Found</ThemedText>
      </Link>
    </ThemedView>
  );
}
