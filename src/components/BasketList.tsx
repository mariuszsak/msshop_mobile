import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../styles/style";

export const BasketList = (props: any) => {

  const element = ({ item }: any) => {
    console.log(item);
    return (
      <Text> {item.glassItem.name + `, quantity: ` + item.quantity + `\n`}  </Text>
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
