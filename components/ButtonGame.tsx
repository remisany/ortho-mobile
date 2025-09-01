//import components
import { Icon } from "@/components/ui/Icon";
//import constants
import { White } from "@/constants/Colors";
import { TWorldColor } from "@/constants/Definitions";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface IButtonGame {
  onPress: () => void
  color: TWorldColor
}

export default function ButtonGame({ onPress, color }: IButtonGame) {    
    const offset = useSharedValue(-4);

    const frontStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => offset.value = withTiming(0, { duration: 10 })}
            onPressOut={() => offset.value = withTiming(-4, { duration: 10 })}
            style={styles.pushable}
        >
            <Animated.View style={[styles.shadow]} />
            <View style={[styles.edge, {backgroundColor: color.dark}]} />
            <Animated.View style={[styles.front, frontStyle, {backgroundColor: color.light}]}>
                <Icon name="arrows-to-dot" type='fontAwesome' color={White}/>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  pushable: {
    position: "relative",
    width: 65,
    height: 65,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  edge: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  front: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
    height: "100%",
  }
});