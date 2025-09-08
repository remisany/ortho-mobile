import ButtonCommon from "@/components/ButtonCommon";
import { Icon } from "@/components/ui/Icon";
import { White } from "@/constants/Colors";
import { btnHeight } from "@/constants/common";
import { TWorldColor } from "@/constants/Definitions";
import React from "react";
import { StyleSheet } from "react-native";

interface IButtonGame {
  onPress: () => void
  color: TWorldColor
}

export default function ButtonGame({ onPress, color }: IButtonGame) {
  return ( 
    <ButtonCommon
      onPress={onPress}
      color={color}
      stylesPressable={styles.pressable}
      content={<Icon name="arrows-to-dot" type='fontAwesome' color={White}/>}
    />
  )
}

const styles = StyleSheet.create({
  pressable: {
    width: btnHeight,
    height: btnHeight,
  }
});