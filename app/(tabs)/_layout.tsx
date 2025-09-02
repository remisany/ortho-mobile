import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
//import components
import { HapticTab } from '@/components/HapticTab';
import { Icon } from '@/components/ui/Icon';
import TabBarBackground from '@/components/ui/TabBarBackground';
//import constants
import { Colors } from '@/constants/Colors';
//import hooks
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].text,
        headerShown: false,
        tabBarButton: HapticTab,
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
