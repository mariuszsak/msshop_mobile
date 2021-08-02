import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { ShortItem } from "./item/ShortItem";
import { BasketButtonsContainer } from "./buttons/BasketButtonsContainer";
import { BasketItem } from "../../types";

export const BasketList = (props: any) => {

  const element = (props: ListRenderItemInfo<BasketItem>) => {
    return (
      <View style={styles.something1}>
        <View style={styles.directionStyle}>
          <ShortItem item={props.item.glassItem} />
          <View style={styles.something2}>
            <BasketButtonsContainer
              {...props.item}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.allItems}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={element}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allItems: {
    margin: 0,
    padding: 0
  },
  something1: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 20
  },
  something2: {
    borderColor: "red",
    borderWidth: 1
  },
  directionStyle: {
    flexDirection: "row"
  }
});