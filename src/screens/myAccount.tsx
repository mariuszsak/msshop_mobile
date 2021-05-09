import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Logo from '../components/logo';

export default function MyAccount() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.body}>
                <Text>My account</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: 'pink'
    },
    body: {
        flex: 9
    }
});
