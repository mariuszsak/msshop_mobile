import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ProductDetail from "../screens/productDetail";
import styles from "../styles/style";
import BookmarkButton from "./bookmark/BookmarkButton";
import ShortItem from "./item/ShortItem";

type Props = {
  onPress(): void;
};

export function ItemList(props: any) {
  function goDetail(item: Props) {
    const { navigate } = props.navigation;
    console.log(item);
    navigate("ProductDetail", item);
  }

  function onPress() {
    console.log("bookmarked!");
  }

  const element = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.singleItem}
        onPress={() => goDetail(item)}
      >
        <ShortItem item={item} />
        <TouchableOpacity
          onPress={() => onPress()}
          style={
            styles.bookmark
          }>
          <BookmarkButton />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.allItems}
        data={props.data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={element}
      />
    </View>
  );
}
