import { TColors } from "@/constants/Definitions";

export const White = '#ffffff';

export const Colors: TColors = {
  light: {
    text: '#4b4b4b',
    background: White,
    border: '#e5e5e5',
    red: '#FF4B4B',
    backgroundHide: 'rgb(0, 0, 0, .3)'
  },
  dark: {
    text: '#f1f7fb',
    background: '#131f24',
    border: '#37464f',
    red: '#EE5555',
    backgroundHide: 'rgb(0, 0, 0, .4)'
  },
};

export const worldColors = {
  light: {
    light: Colors.light.background,
    dark: Colors.light.border
  },
  dark: {
    light: Colors.dark.background,
    dark: Colors.dark.border
  },
  beach: {
    light: '#FFD15E',
    dark: '#EEBB4C',
  },
}