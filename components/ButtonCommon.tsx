import { TWorldColor } from "@/constants/Definitions";
import React, { ReactElement } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface IButtonCommon {
  onPress: () => void
  color: TWorldColor,
  stylesPressable?: ViewStyle | ViewStyle[],
  stylesFront?: ViewStyle,
  children: ReactElement
}

export default function ButtonCommon({ onPress, color, stylesFront, stylesPressable, children }: IButtonCommon) {    
    const offset = useSharedValue(-4);

    const animatedFront = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => offset.value = withTiming(0, { duration: 10 })}
            onPressOut={() => offset.value = withTiming(-4, { duration: 10 })}
            style={[styles.pressable, stylesPressable]}
        >
            <Animated.View style={[styles.shadow]} />
            <View style={[styles.edge, {backgroundColor: color.dark}]} />
            <Animated.View style={[styles.front, animatedFront, {backgroundColor: color.light}, stylesFront]}>
              {children}
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  pressable: {
    position: "relative",
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