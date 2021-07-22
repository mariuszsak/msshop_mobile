import React, { useState } from "react";
import ButtonBase from "./ButtonBase";
import BasketItemValueInput from "../BasketItemValueInput";
import { View } from "react-native";
import ButtonAddToBasket from "./ButtonAddToBasket";

const BasketButtonsContainer = (props: { id: number; }) => {

  const [basketVal, setBasketVal] = useState(1);


  const handleAddItem = () => {
    setBasketVal(basketVal + 1);
  };

  const handleRemoveItem = () => {
    setBasketVal(basketVal - 1);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end", right: 10 }}>
      <ButtonBase
        title="-"
        onPress={handleRemoveItem}
      />
      <BasketItemValueInput val={basketVal} />
      <ButtonBase
        title="+"
        onPress={handleAddItem}
      />
      <ButtonAddToBasket
        id={props.id}
        quantity={basketVal}
      />
    </View>
  );
};

export default BasketButtonsContainer;