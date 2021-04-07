import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { fetchData } from "../services/fetchData";
import Logo from "../components/logo";
import { ItemList } from "../components/ItemList";

type HomeState = {
  data: [];
};

interface Props {
  navigation: any
}

export default class Home extends Component<Props, HomeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetchData('products').then((response) => {
      this.setState({
        data: response
      });
    });
  }

  render() {
    if (this.state.data.length > 0) {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#61dafb" hidden={false}/>
          <View style={styles.header}>
            <Logo />
          </View>
          <View style={styles.body}>
            <ItemList data={this.state.data} navigation={this.props.navigation} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "#fff"
  },
  body: {
    flex: 9,
    backgroundColor: "#fff"
  },
  statusbar: {
    backgroundColor: "#61dafb"
  }
});
