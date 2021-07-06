import { View } from "react-native";
import React from "react";
import Logo from "../components/logo";
import styles from "../styles/style";
import { useBasket } from "../context/BasketContext";
import { BasketList } from "../components/BasketList";

export default function Basket() {
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
      <View style={styles.footer} />
    </View>
  );
}
