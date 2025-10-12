import { Icon } from '@/components/ui/Icon';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     NavigationBar.setBackgroundColorAsync(
  //       Colors[colorScheme ?? "light"].background
  //     );
  //     NavigationBar.setButtonStyleAsync(
  //       colorScheme === "dark" ? "light" : "dark"
  //     );
  //   }
  // }, [colorScheme]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].text,
        headerShown: false,
        //tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderColor: Colors[colorScheme ?? 'light'].border,
          borderTopWidth: 2,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          ...(Platform.OS === 'ios' && { position: 'absolute' }),
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
