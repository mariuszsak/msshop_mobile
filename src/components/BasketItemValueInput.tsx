import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const BasketItemValueInput = (props: { val: number }) => {
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

const styles = StyleSheet.create({
  numberInput: {
    textAlign: "center",
    color: "#000"
  }
});
