import { CustomDarkTheme, CustomDefaultTheme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LifeProvider, WorldProvider } from '@/lib/context';
import { ThemeProvider } from '@react-navigation/native';
import { ReactElement } from 'react';

interface IProvider {
    children: (props: { theme: typeof CustomDefaultTheme }) => ReactElement;
}

export default function Provider({ children }: IProvider) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <WorldProvider>
        <LifeProvider>
          {children({ theme })}
        </LifeProvider>
      </WorldProvider>
    </ThemeProvider>
  );
}
