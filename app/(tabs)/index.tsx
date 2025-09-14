//import components
import ButtonGame from '@/components/ButtonGame';
import { ThemedView } from '@/components/ThemedView';
//import constants
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView>    

      <ButtonGame
        onPress={() => router.push("/intruder")}
      />

    </ThemedView>
  );
}
