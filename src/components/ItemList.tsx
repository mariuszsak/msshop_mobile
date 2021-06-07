import * as React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import ProductDetail from "../screens/productDetail";
import styles from "../styles/style";
import { MemoizedMediumImage } from "./MediumImage";
import { MemoizedShortInfo } from "./ShortInfo";

type Props = {
  onPress(): void;
};

export function ItemList(props: any) {
  function goDetail(item: Props) {
    const { navigate } = props.navigation;
    console.log(item);
    navigate("ProductDetail", item);
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.allItems}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.singleItem}
            onPress={() => goDetail(item)}
          >
            <View style={styles.left}>
              <MemoizedMediumImage id={item.id} />
            </View>
            <View style={styles.right}>
              <MemoizedShortInfo
                // TODO name is unnecessary
                name={item.brand.brand_name}
                price={item.price}
                brand={item.brand.brand_name}
                type={item.type.type_name}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
