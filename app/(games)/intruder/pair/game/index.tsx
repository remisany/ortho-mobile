import { iconMargin, iconSize, marginS } from '@/constants/Common';
import { intruderPairGame } from '@/lib/game/intruder';
import { Image } from 'expo-image';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

export default function IntruderPairScreen() {
  const {length, index, common, find} = useMemo(() => intruderPairGame(), []);

  return (
      <View style={styles.container}>
        {Array.from({ length }, (_, i) => {
          const source = i === index ? find.url : common.url;
          const style = i === index ? find.style : {}

          return (
            <Image
              key={i}
              style={[styles.image, style]}
              source={source}
              contentFit='contain'
            />
          )
        })}

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: marginS,
  },
  image: {
    width: iconSize,
    height: iconSize,
    margin: iconMargin
  },
});