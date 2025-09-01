import { StyleSheet } from 'react-native';
//import components
import ButtonGame from '@/components/ButtonGame';
import { ThemedView } from '@/components/ThemedView';
//import constants
import { worldColors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>    

      <ButtonGame
        onPress={() => {}}
        color={worldColors.beach}
      />

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
