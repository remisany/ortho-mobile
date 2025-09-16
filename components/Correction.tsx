import ButtonText from '@/components/ButtonText';
import { ThemedText } from '@/components/ThemedText';
import { btnHeight, fontSizeL, fontSizeText, marginL, marginM, marginS } from '@/constants/Common';
import { TUrl } from '@/constants/Definitions';
import { useProgression } from '@/lib/context';
import { button } from '@/locales/fr/button';
import { title } from '@/locales/fr/title';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

interface ICorrection {
  url: TUrl,
  instruction: string,
}

export default function Correction() {
  const router = useRouter();
  const [progression] = useProgression();

  const correction = useMemo(() => {
    const {correct, all} = progression;
    const correction = Math.round(correct/(all-1)*100);
    return `${correction}%`;
  }, [progression])

  
  return (
    <>
      <ThemedText style={styles.title}>
        {title.result}
      </ThemedText>
          
      <ThemedText style={styles.instruction}>
        {correction}
      </ThemedText>

      <ButtonText
        onPress={() => router.replace(`/`)}
        stylesPressable={styles.pressable}
        text={button.end}
      >
      </ButtonText>
    </>
  );
}

const styles = StyleSheet.create({
  instruction: {
    fontSize: fontSizeText,
    fontFamily: 'MPlus',
    marginBottom: marginL + btnHeight
  },
  pressable: {
    width: '70%',
    bottom: marginL,
    position: 'absolute',
  },
  title: {
    position: 'absolute',
    top: 0,
    left: marginS,
    padding: marginM,
    fontSize: fontSizeL,
    fontFamily: 'MPlusBold',
  }
});
