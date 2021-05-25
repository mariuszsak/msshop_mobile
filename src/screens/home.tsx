import React, { useContext } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/logo';
import { ItemList } from '../components/ItemList';
import { AppContext } from '../context/ItemContext';

interface Props {
    navigation: any;
}

export default function Home(props: Props) {
    const data = useContext(AppContext);

    if (data.items.length > 0) {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#61dafb" hidden={false} />
                <View style={styles.header}>
                    <Logo />
                </View>
                <View style={styles.body}>
                    <ItemList data={data.items} navigation={props.navigation} />
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
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
        flex: 9,
        backgroundColor: '#fff'
    },
    statusbar: {
        backgroundColor: '#61dafb'
    }
});
