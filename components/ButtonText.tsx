import ButtonCommon from '@/components/ButtonCommon';
import { ThemedText } from '@/components/ThemedText';
import { worldColors } from '@/constants/Colors';
import { btnHeight, fontSizeS } from '@/constants/Common';
import React, { useMemo } from 'react';
import { StyleSheet, useColorScheme, ViewStyle } from 'react-native';

interface IButtonText {
  onPress: () => void
  stylesPressable: ViewStyle,
  stylesFront?: ViewStyle,
  text: string
}

export default function ButtonText({ onPress, stylesPressable, text }: IButtonText) {
  const colorScheme = useColorScheme();
  
  const color = useMemo(() => worldColors[colorScheme ?? 'light'], [colorScheme]);
  
  return ( 
    <ButtonCommon
      onPress={onPress}
      color={color}
      stylesPressable={[styles.pressable, stylesPressable]}
      stylesFront={{borderColor: color.dark, borderWidth: 2}}
    >
      <ThemedText style={styles.text}>
        {text}
      </ThemedText>
    </ButtonCommon>
  )
}

const styles = StyleSheet.create({
  pressable: {
    height: btnHeight,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'MPlusBold',
    fontSize: fontSizeS,
  }
});