import Game from '@/components/Game';
import { iconMargin, iconSize, marginS } from '@/constants/Common';
import { useLife, useProgression } from '@/lib/context';
import { intruderPairGame } from '@/lib/game/intruder';
import { Image } from 'expo-image';
import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export default function IPGameScreen() {
  const [{progress}, setProgression] = useProgression();
  const [_, setLife] = useLife();

  const {length, index, common, find} = useMemo(() => intruderPairGame(), [progress]);

  const onClick = (isFind: boolean) => {
    setProgression(({correct, progress, all}) => ({
      correct: isFind ? correct+1 : correct,
      progress: progress+1,
      all
    }))

    setLife((life) => Math.max(life-1, 0));
  }

  return (
    <Game url='/intruder/pair'>
      <View style={styles.container}>
        {Array.from({ length }, (_, i) => {
          const isFind = i === index;
          const source = isFind ? find.url : common.url;
          const style = isFind ? find.style : {}

          return (
            <Pressable key={i} onPress={() => onClick(isFind)}>
              <Image
                style={[styles.image, style]}
                source={source}
                contentFit='contain'
              />
            </Pressable>
          )
        })}
      </View>
    </Game>
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