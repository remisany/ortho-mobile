import { worldColors } from '@/constants/Colors';
import { marginL, marginM, marginXL } from '@/constants/Common';
import { TColor } from '@/constants/Definitions';
import { useProgression, useWorld } from '@/lib/context';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

interface IProgression {
  color: TColor
}

export default function Progression({ color }: IProgression) {
  const [progression] = useProgression();
  const [world] = useWorld();

  const width = useMemo(() => {
    const {progress, all} = progression;
    const width = Math.min(Math.round(progress/all*100), 100);
    return width;
  }, [progression])


  return (
    <View style={[styles.container, {backgroundColor: color.border}]}>
      <View style={[
        styles.progression,
        {
          width: `${width}%` as unknown as number,
          backgroundColor: worldColors[world].dark
        }
      ]}/>

      <View style={[
        styles.progressionLight,
        {
          width: `${width - 6 }%` as unknown as number,
          backgroundColor: worldColors[world].light
        }
      ]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: marginL,
    marginRight: marginXL,
    marginLeft: marginM,
    borderRadius: marginM,
    position: "relative",
  },
  progression: {
    borderRadius: marginM,
    position: "absolute",
    height: marginL,
    left: 0
  },
  progressionLight: {
    borderRadius: marginM,
    position: "absolute",
    height: 3,
    left: "3%",
    top: "20%"
  }
});
