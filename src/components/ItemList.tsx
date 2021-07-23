import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { DetailScreen } from "../screens/DetailScreen";
import BookmarkButton from "./bookmark/BookmarkButton";
import { ShortItem } from "./item/ShortItem";
import { BookmarkedItem } from "../../types";

type Props = {
  onPress(): void;
};

export const ItemList = (props: BookmarkedItem[] | any) => {

  function goDetail(item: Props) {
    const { navigate } = props.navigation;
    navigate("DetailScreen", item);
  }

  const element = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.singleItem}
        onPress={() => goDetail(item)}
      >
        <View style={{width: '70%'}}>
          <ShortItem item={item} />
        </View>
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
        numColumns={1}
        keyExtractor={item => item.id.toString()}
        renderItem={element}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 30,
    height: 160
  },
  allItems: {
    margin: 0,
    padding: 0
  },
  bookmark: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "lightgray",
    bottom: -5,
    right: 0
  }
});
