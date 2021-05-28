import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Logo from '../components/logo';
import { AppContext } from '../context/ItemContext';
import BasketComponent from '../components/basketComponent';

export default function Basket() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#61dafb" hidden={false} />
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.body}>
                <AppContext.Consumer>
                    {(context) =>
                        context.glassItems.map((item, index) => (
                            <BasketComponent name={item.name} key={index} />
                        ))
                    }
                </AppContext.Consumer>
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
        backgroundColor: '#fff'
    },
    body: {
        flex: 9
    }
});
