import React from "react";
import { TextInput } from "react-native";
import styles from "../styles/style";

const ItemInput = (props: { val: number }) => {
  const handleItemQuantity = () => {
    console.log("quantity");
  };

  return (
    <TextInput
      style={styles.numberInput}
      onChangeText={handleItemQuantity}
      editable={false}
      keyboardType="numeric"
      value={props.val.toString()}
    />
  );
};

export default ItemInput;