import React from "react";
import { TextInput } from "react-native";

const ItemInput = () => {
  const handleItemQuantity = () => {
    console.log("quantity");
  };

  return (
    <TextInput
      onChangeText={handleItemQuantity}
      keyboardType="numeric"
    />
  );
};

export default ItemInput;