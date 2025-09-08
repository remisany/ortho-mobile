import ButtonCommon from '@/components/ButtonCommon';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { worldColors } from '@/constants/Colors';
import { btnHeight, margin } from '@/constants/common';
import { TUrl } from '@/constants/Definitions';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IInstruction {
  url: TUrl
  instruction: string
}

export default function Instruction({ url, instruction }: IInstruction) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const router = useRouter();

  const color = useMemo(() => worldColors[colorScheme ?? 'light'], [colorScheme])

  const content = useMemo(() => (
    <ThemedText style={styles.text}>
      commencer
    </ThemedText>
  ), [])
  
  return (
    <ThemedView>
      <Header
        href='/'
      />

      <ThemedText>
        {instruction}
      </ThemedText>

      <ButtonCommon
        color={color}
        onPress={() => router.push(`${url}/game`)}
        content={content}
        stylesPressable={[styles.pressable, {bottom: insets.bottom + margin}]}
        stylesFront={{borderColor: color.dark, borderWidth: 2}}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    width: '100%'
  },
  pressable: {
    width: '70%',
    height: btnHeight,
    position: 'absolute',
  }
});
