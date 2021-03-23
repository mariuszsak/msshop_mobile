import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { fetchProducts } from '../services/fetchProducts';

type HomeState = {
    data: [];
};

export default class Home extends Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetchProducts().then((response) => {
            this.setState({
                data: response
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Header.</Text>
                </View>
                <View style={styles.body}>
                    <Text>Body</Text>
                </View>
            </View>
        );
        // if (this.state.data.length > 0) {
        //     return (
        //         <View style={styles.container}>
        //             <ItemList data={this.state.data}/>
        //             <Text>sdf</Text>
        //             <StatusBar style="auto" backgroundColor="#61dafb"/>
        //         </View>
        //     )
        // } else {
        //     return (
        //         <View style={styles.container}>
        //             <Text>Loading</Text>
        //             <StatusBar style="auto" backgroundColor="#61dafb"/>
        //         </View>
        //     )
        // }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    header: {
        flex: 1,
        backgroundColor: 'pink'
    },
    body: {
        flex: 9
    }
});
