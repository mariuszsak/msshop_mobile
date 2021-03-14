import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ItemList} from "./src/components/ItemList";

type MyState = {
    isLoading: boolean
    data: []
}

export default class App extends Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount() {
        this.fetchData().then(r => r);

    }

    fetchData = async () => {
        const response = await fetch('http://192.168.0.2:3000/products')
        const json = await response.json()
        this.setState({
            isLoading: false,
            data: json
        })
    }

    render() {
        const {isLoading} = this.state;
        if (!isLoading) {
            return (
                <View style={styles.container}>
                    <ItemList data={this.state.data}/>
                    <StatusBar style="auto" backgroundColor="#61dafb"/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>Loading</Text>
                    <StatusBar style="auto" backgroundColor="#61dafb"/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
