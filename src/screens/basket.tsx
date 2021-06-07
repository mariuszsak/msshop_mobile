import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Logo from '../components/logo';
import { AppContext } from '../context/ItemContext';
import BasketComponent from '../components/basketComponent';
import styles from "../styles/style";

export default function Basket() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#61dafb" hidden={false} />
            <View style={styles.logo}>
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
