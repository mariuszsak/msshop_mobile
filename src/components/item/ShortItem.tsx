import React from "react";
import { StyleSheet, View } from "react-native";
import { MediumImage } from "../image/MediumImage";
import { ShortInfo } from "../ShortInfo";

export const ShortItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MediumImage id={item.id} />
      </View>
      <View>
        <ShortInfo
          name={item.brand.brand_name}
          price={item.price}
          type={item.type.type_name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
