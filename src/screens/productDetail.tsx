import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MemoizedBigImage } from "../components/BigImage";
import { Brand, Gender, Type } from "../interfaces/MyItem";
import styles from "../styles/style";

interface ProductDetailProps {
  route: {
    params: {
      id: number;
      name: string;
      description: string;
      price: number;
      brand: Brand;
      type: Type;
      gender: Gender;
    }
  }
}

export default function ProductDetail(props: ProductDetailProps) {
  const { id, name, description, price, brand, gender, type } = props.route.params;
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff"
    }}>
      <View style={styles.detail}>
        <MemoizedBigImage id={id} />
      </View>
      <Text>Product detail:</Text>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
      <Text>{brand.brand_name}</Text>
      <Text>{gender.gender_name}</Text>
      <Text>{type.type_name}</Text>
    </View>
  );
}
