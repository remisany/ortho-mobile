//import components
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function IntruderScreen() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/intruder/pair")
  }, [])

  return (
    <ThemedView>
      <ThemedText>
        Intru  
      </ThemedText>
    </ThemedView>
  );
}
