import Provider from '@/components/Provider';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
  const [loaded] = useFonts({
    MPlus: require('../assets/fonts/MPLUSRounded1c-Regular.ttf'),
    MPlusBold: require('../assets/fonts/MPLUSRounded1c-Bold.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider>
      {({theme}) => (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <Stack
            screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
          }}>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='+not-found' />
          </Stack>
                
          <View style={{ backgroundColor: theme.colors.background }}>
            <StatusBar style='auto'/>
          </View>
        </View>
      )}
    </Provider>
  );
}
