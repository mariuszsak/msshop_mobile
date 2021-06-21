import { View, Text } from "react-native";
import React from "react";
import { MemoizedBigImage } from "../components/image/BigImage";
import { GlassItem } from "../../types";
import styles from "../styles/style";
import ButtonsAddRemoveItem from "../components/buttons/ButtonsAddRemoveItem";
import ButtonAddToCart from "../components/buttons/ButtonAddToCart";
import DetailText from "../components/text/DetailText";

interface IProductDetail {
  route: {
    params: GlassItem
  }
}

const ProductDetail = (props: IProductDetail) => {
  const { id, name, description, price, gender, type } = props.route.params;
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      borderStyle: "solid",
      flexDirection: "column"

    }}>
      <View style={styles.detail}>
        <MemoizedBigImage id={id} />
      </View>
      <View style={{ flex: 3, padding: 10 }}>
        <DetailText>
          <Text>{name}</Text>
        </DetailText>
        <Text style={styles.description}>{type.type_name}, {gender.gender_name}</Text>
        <Text style={styles.priceDetail}>{price}PLN</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.addRemoveContainer}>
        <ButtonsAddRemoveItem />
      </View>
    </View>
  );
};

export default ProductDetail;
