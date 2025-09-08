import { Colors } from '@/constants/Colors';
import { containerPadding } from '@/constants/common';
import { THref } from '@/constants/Definitions';
import { Link, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from './ui/Icon';

interface IHeader {
  href: THref
  title?: string
}

export default function Header({ href, title }: IHeader) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const router = useRouter();

  const color = useMemo(() => Colors[colorScheme ?? 'light'], [colorScheme])
  
  return (
    <View style={[styles.container, {top: insets.top + containerPadding} ]}>
      <View>
        <Link href={href}>
            <Icon
                type='ionicons'
                name='close'
                color={color.border}
                size={48}
            />
        </Link>
      </View>

      <View>
        {title}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    position: 'absolute',
    left: containerPadding
  },
});
