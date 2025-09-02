import { DarkTheme, DefaultTheme } from '@react-navigation/native';
//import constants
import { Colors } from '@/constants/Colors';

export const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors['light']
  }
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...Colors['dark']
  }
};


