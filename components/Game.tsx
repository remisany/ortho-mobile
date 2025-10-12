import { TUrl } from '@/constants/Definitions';
import { useProgression } from '@/lib/context';
import { useRouter } from 'expo-router';
import { ReactElement, useEffect } from 'react';
import { StyleSheet } from 'react-native';

interface IGame {
  url: TUrl,
  children: ReactElement
}

export default function Game({ url, children }: IGame) {
    const [{progress, all}] = useProgression();

    const router = useRouter();

    useEffect(() => {
      if (progress === all) router.replace(`${url}/correction`)
    }, [progress])
  
    return (
      children
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0
  },
});
