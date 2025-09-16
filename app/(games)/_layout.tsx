import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/header/Header';
import { ProgressionProvider } from '@/lib/context';
import { Slot } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function GameLayout() {
    return (
        <ProgressionProvider>
            <ThemedView>
                <Header/>

                <View style={styles.container}>
                    <Slot/>
                </View>
            </ThemedView>
        </ProgressionProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
