import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ProductDetail({ route }: any) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={styles.left}>
        <Image
          resizeMode="contain"
          source={{ uri: `http://192.168.0.2:3000/img/${route.params.id}.jpg` }}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <Text>Product detail:</Text>
      <Text>{route.params.name.replace(/\"/g, "")}</Text>
      <Text>{route.params.type.replace(/\"/g, "")}</Text>
      <Text>{route.params.gender.replace(/\"/g, "")}</Text>
      <Text>{route.params.description.replace(/\"/g, "")}</Text>
      <Text>{route.params.price.replace(/\"/g, "")}</Text>
      <Text>{route.params.brand.name.replace(/\"/g, "")}</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    borderWidth: 0,
    padding: 0,
    justifyContent: "center", alignItems: "center"
  }
});