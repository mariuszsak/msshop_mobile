import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ProductDetail from "../screens/productDetail";
import styles from "../styles/style";
import BookmarkButton from "./bookmark/BookmarkButton";
import ShortItem from "./item/ShortItem";
import { BookmarkedItem } from "../../types";

type Props = {
  onPress(): void;
};

export const ItemList = (props: BookmarkedItem[] | any) => {

  function goDetail(item: Props) {
    const { navigate } = props.navigation;
    navigate("ProductDetail", item);
  }


  const element = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.singleItem}
        onPress={() => goDetail(item)}
      >
        <ShortItem item={item} />
        <View
          style={
            styles.bookmark
          }>
          <BookmarkButton />
        </View>
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
};
