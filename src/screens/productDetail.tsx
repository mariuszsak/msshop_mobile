import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MemoizedBigImage } from "../components/BigImage";

export default function ProductDetail({ route }: any) {
  const { id, name, typeId, genderId, description, price } = route.params;
  const brandName = route.params.brand.name;
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff"
    }}>
      <View style={styles.left}>
        <MemoizedBigImage id={id} />
      </View>
      <Text>Product detail:</Text>
      <Text>{name.replace(/"/g, "")}</Text>
      <Text>{typeId}</Text>
      <Text>{genderId}</Text>
      <Text>{description.replace(/"/g, "")}</Text>
      <Text>{price.replace(/"/g, "")}</Text>
      <Text>{brandName.replace(/"/g, "")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    borderWidth: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
