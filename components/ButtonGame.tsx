import ButtonCommon from '@/components/ButtonCommon';
import { Icon } from '@/components/ui/Icon';
import { White, worldColors } from '@/constants/Colors';
import { btnHeight } from '@/constants/Common';
import { TWorldColor } from '@/constants/Definitions';
import { useWorld } from '@/lib/context';
import React from 'react';
import { StyleSheet } from 'react-native';

interface IButtonGame {
  onPress: () => void
  color?: TWorldColor
}

export default function ButtonGame({ onPress, color }: IButtonGame) {
  const [world] = useWorld();
  
  return ( 
    <ButtonCommon
      onPress={onPress}
      color={color || worldColors[world]}
      stylesPressable={styles.pressable}
    >
      <Icon name='arrows-to-dot' type='fontAwesome' color={White}/>
    </ButtonCommon>
  )
}

const styles = StyleSheet.create({
  pressable: {
    width: btnHeight,
    height: btnHeight,
  }
});