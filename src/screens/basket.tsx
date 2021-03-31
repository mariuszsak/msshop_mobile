import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Logo from "../components/logo";
import { AppContext, ContextProps } from "../context";
import BasketComponent from "../components/basketComponent";

export default function Basket() {
  const context: ContextProps = React.useContext(AppContext);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" hidden={false}/>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <AppContext.Consumer>
          {
            context => (
              (context.items).map((item, index) => (
                <BasketComponent name={item.name} key={index} />
                )
              )
            )
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
    backgroundColor: "#fff"
  },
    body: {
      flex: 9
    }
  }
);

