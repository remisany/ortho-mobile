import { ThemedView } from "@/components/ThemedView";
import { containerPadding, iconMargin, iconSize } from '@/constants/common';
import { intruderPairGame } from '@/lib/game/intruder';
import { Image } from 'expo-image';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export default function IntruderPairScreen() {
  const {length, index, common, find} = useMemo(() => intruderPairGame(), []);

  return (
    <ThemedView style={styles.container}>

      {Array.from({ length }, (_, i) => {
        const source = i === index ? find.url : common.url;
        const style = i === index ? find.style : {}

        return (
          <Image
            key={i}
            style={[styles.image, style]}
            source={source}
            contentFit="contain"
          />
        )
      })}

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flexWrap: 'wrap',
    padding: containerPadding,
  },
  image: {
    width: iconSize,
    height: iconSize,
    margin: iconMargin
  },
});