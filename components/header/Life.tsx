import { Icon } from '@/components/ui/Icon';
import { fontSizeM, marginS } from '@/constants/Common';
import { TColor } from '@/constants/Definitions';
import { useLife } from '@/lib/context';
import { StyleSheet, Text, View } from 'react-native';

interface ILife {
    color: TColor
}

export default function Life({ color }: ILife) {
  const [life] = useLife();
  
  return (
        <View style={styles.container}>
            <Icon
                type='fontAwesome'
                name='eye'
                color={color.red}
                size={24}
                solid={true}
            />
            <Text style={[styles.text, {color: color.red}]}>{life}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
      marginLeft: marginS,
      fontSize: fontSizeM,
      fontFamily: 'MPlusBold'
    },
});
