import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/header/Header';
import { Slot } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function GameLayout() {
    const [correction] = useState();

    return (
        <ThemedView>
            <Header/>

            <View style={styles.container}>
                <Slot/>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
