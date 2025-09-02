import { type ViewProps, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import hooks
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <SafeAreaView style={[styles.container, { backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
