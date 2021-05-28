import { View, Text } from "react-native";
import React from "react";
import { MemoizedBigImage } from "../components/BigImage";
import { GlassItem } from "../../types";
import styles from "../styles/style";
import ButtonsAddRemoveItem from "../components/buttons/ButtonsAddRemoveItem";
import ButtonAddToCart from "../components/buttons/ButtonAddToCart";

interface IProductDetail {
  route: {
    params: GlassItem
  }
}

const ProductDetail = (props: IProductDetail) => {
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
      <View>
        <ButtonsAddRemoveItem />
        <ButtonAddToCart />
      </View>
    </View>
  );
};

export default ProductDetail;
