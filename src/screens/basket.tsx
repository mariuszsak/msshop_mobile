import { View, ScrollView } from "react-native";
import React from "react";
import Logo from "../components/logo";
import { AppContext } from "../context/ItemContext";
import BasketComponent from "../components/basketComponent";
import styles from "../styles/style";

export default function Basket() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <ScrollView>
          <AppContext.Consumer>
            {(context) =>
              context.glassItems.map((item, index) => (
                <BasketComponent name={item.name} key={index} />
              ))
            }
          </AppContext.Consumer>
        </ScrollView>
      </View>
      <View style={styles.footer} />
    </View>
  );
}
