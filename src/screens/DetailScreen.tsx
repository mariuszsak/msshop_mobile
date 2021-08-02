import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BigImage } from "../components/image/BigImage";
import { GlassItem } from "../../types";
import { ProductButtonsContainer } from "../components/buttons/ProductButtonsContainer";
import { DetailText } from "../components/text/DetailText";

interface IProductDetail {
  route: {
    params: GlassItem
  }
}

export const DetailScreen = (props: IProductDetail) => {
  const { id, name, description, price, gender, type } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <BigImage id={id} />
      </View>
      <View style={styles.infoContainer}>
        <DetailText>
          <Text>{name}</Text>
        </DetailText>
        <Text style={styles.description}>{type.type_name}, {gender.gender_name}</Text>
        <Text style={styles.priceDetail}>{price}PLN</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.addRemoveContainer}>
        <ProductButtonsContainer id={id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  infoContainer: {
    flex: 3,
    padding: 10
  },
  priceDetail: {
    paddingBottom: 25,
    fontWeight: "bold",
    fontSize: 25,
    color: "#007AFF"
  },
  description: {
    paddingTop: 5,
    fontSize: 15,
    paddingBottom: 20
  },
  addRemoveContainer: {
    flex: 3
  },
  detail: {
    borderColor: "red",
    paddingBottom: 15,
    flex: 2,
    alignItems: "center"
  }
});
