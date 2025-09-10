import { ThemedText } from '@/components/ThemedText';
import { Icon } from '@/components/ui/Icon';
import { Colors } from '@/constants/Colors';
import { fontSizeL, fontSizeM, marginL, marginM, marginS } from '@/constants/Common';
import { Link } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IHeader {
  title?: string
}

export default function Header({ title }: IHeader) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const color = useMemo(() => Colors[colorScheme ?? 'light'], [colorScheme])
  
  return (
    <View style={[styles.container, {top: insets.top + marginS} ]}>
      <View style={styles.topBar}>
        <Link href={'/'}>
            <Icon
              type='ionicons'
              name='close'
              color={color.border}
              size={48}
            />
        </Link>

        <View style={styles.life}>
          <Icon
            type='fontAwesome'
            name='eye'
            color={color.red}
            size={24}
            solid={true}
          />
          <Text style={[styles.text, {color: color.red}]}>5</Text>
        </View>
      </View>

      <ThemedText style={styles.title}>
        {title}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingLeft: marginS,
  },
  topBar: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: marginL,
  },
  life: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: marginS,
    fontSize: fontSizeM,
    fontFamily: 'MPlusBold'
  },
  title: {
    padding: marginM,
    fontSize: fontSizeL,
    fontFamily: 'MPlusBold',
  }
});
