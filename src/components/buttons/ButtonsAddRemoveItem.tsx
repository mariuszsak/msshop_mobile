import React from "react";
import ButtonBase from "./ButtonBase";
import ItemInput from "../ItemInput";
import { View } from "react-native";
import ButtonAddToCart from "./ButtonAddToCart";

const ButtonsAddRemoveItem = () => {
  const handleAddItem = () => {
    console.log("pressed");
  };
  const handleRemoveItem = () => {
    console.log("pressed");
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end", right: 10}}>
      <ButtonBase
        title="-"
        onPress={handleAddItem}
      />
      <ItemInput />

      <ButtonBase
        title="+"
        onPress={handleRemoveItem}
      />
      <ButtonAddToCart />
    </View>
  );
};

export default ButtonsAddRemoveItem;