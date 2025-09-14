import Life from '@/components/header/Life';
import Progression from '@/components/header/Progression';
import { Icon } from '@/components/ui/Icon';
import { Colors } from '@/constants/Colors';
import { marginL, marginS } from '@/constants/Common';
import { Link } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

export default function Header() {
  const colorScheme = useColorScheme();

  const color = useMemo(() => Colors[colorScheme ?? 'light'], [colorScheme])
  
  return (
    <View style={styles.container}>
        <Link href={'/'}>
            <Icon
              type='ionicons'
              name='close'
              color={color.border}
              size={48}
            />
        </Link>

        <Progression
          color={color}
        />

        <Life
          color={color}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: marginL,
    paddingLeft: marginS,
  }
});
