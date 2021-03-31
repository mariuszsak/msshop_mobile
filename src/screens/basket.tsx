import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Logo from "../components/logo";
import Context from "../context";

export default function Basket() {
  return (

    <View style={styles.container}>
      <View>
        <Logo />
      </View>
      <View style={styles.body}>
        <Context.Consumer>
          {ctx => <Text>Basket: {JSON.stringify(ctx)}</Text>}

        </Context.Consumer>
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
      backgroundColor: "pink"
    },
    body: {
      flex: 9
    }
  }
);

