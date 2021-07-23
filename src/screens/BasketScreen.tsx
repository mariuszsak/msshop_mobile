import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Logo } from "../components/Logo";
import { useBasket } from "../context/BasketContext";
import { BasketList } from "../components/BasketList";
import { ButtonBase } from "../components/buttons/ButtonBase";

export const BasketScreen = () => {
  const { currentBasket } = useBasket();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <BasketList
          data={currentBasket}
        />
      </View>
      <View style={styles.btn}>
        {currentBasket.length > 0 ?
          <ButtonBase
            title={"Checkout"}
            onPress={() => {
            }}
            isEnabled={true}
          />
          :
          <Text>Basket is empty</Text>
        }
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: {
    flex: 2
  },
  body: {
    flex: 15,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
    // margin: 10
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff"
  },
  btn: {
    backgroundColor: "#fff",
    padding: 10
  }
});
