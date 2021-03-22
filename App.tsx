import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {AppNavigator} from "./src/components/navigator/AppNavigator";

export default class App extends Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <AppNavigator/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
