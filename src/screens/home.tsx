import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ItemList} from '../components/ItemList';
import {fetchProducts} from "../services/fetchProducts";

type HomeState = {
    data: []
}

export default class Home extends Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetchProducts()
            .then(response => {
                this.setState({
                    data: response
                })
            })
    }

    render() {
        if (this.state.data.length > 0) {
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
