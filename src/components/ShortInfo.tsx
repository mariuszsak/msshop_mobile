import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ShortInfoProps {
  name: string;
  price: string;
  type: string;
}

export const ShortInfo = memo((props: ShortInfoProps) => {
  const { name, price, type } = props;
  return (
    <>
      <View>
        <Text style={styles.name}>
          {name}
        </Text>
      </View>
      <View>
        <Text style={styles.type}>
          {type}
        </Text>
        <Text style={styles.price}>
          {price}PLN
        </Text>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  name: {
    left: 10,
    fontWeight: "bold",
    color: "#FF7657",
    fontSize: 20
  },
  type: {
    left: 10,
    fontSize: 15
  },
  price: {
    left: 10,
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 15
  }
});
