import ButtonText from '@/components/ButtonText';
import { ThemedText } from '@/components/ThemedText';
import { btnHeight, fontSizeL, fontSizeText, marginL, marginM, marginS } from '@/constants/Common';
import { TUrl } from '@/constants/Definitions';
import useBack from '@/hooks/useBack';
import { button } from '@/locales/fr/button';
import { title } from '@/locales/fr/title';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

interface IInstruction {
  url: TUrl,
  instruction: string,
}

export default function Instruction({ url, instruction }: IInstruction) {
  useBack();
  const router = useRouter();
  
  return (
    <>
      <ThemedText style={styles.title}>
        {title.instruction}
      </ThemedText>
          
      <ThemedText style={styles.instruction}>
        {instruction}
      </ThemedText>

      <ButtonText
        onPress={() => router.replace(`${url}/game`)}
        stylesPressable={styles.pressable}
        text={button.begin}
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
