import { fontSizeText, marginM } from '@/constants/Common';
import { CustomDarkTheme, CustomDefaultTheme } from '@/constants/Theme';
import useBackConfirm from '@/hooks/useBackConfirm';
import { game } from '@/locales/fr/game';
import { useCallback, useState } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function BottomSheet() {
    const [open, setOpen] = useState(false);
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme; 

    const action = useCallback(() => {
        setOpen(true)
    }, []);

    useBackConfirm(action);
  
    return (
        open && <View
            style={[StyleSheet.absoluteFillObject, {backgroundColor: theme.colors.backgroundHide}]}
        >
            <ThemedView
                style={[styles.bottomSheet, {backgroundColor: theme.colors.background}]}
            >
                <ThemedText style={styles.text}>{game.quit}</ThemedText>
            </ThemedView>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomSheet: {
        alignItems: "center",
        paddingLeft: marginM,
        paddingRight: marginM,
        textIndent: "center",
        width: '100%',
        height: '30%',
        borderTopLeftRadius: marginM,
        borderTopRightRadius: marginM,
        position: 'absolute',
        bottom: 0
    },
    text: {
        fontSize: fontSizeText,
        fontFamily: 'MPlus',
    }
});
