import React, { useState } from "react";
import { ButtonBase } from "./ButtonBase";
import { BasketItemValueInput } from "../BasketItemValueInput";
import { StyleSheet, View } from "react-native";
import { ButtonAddToBasket } from "./ButtonAddToBasket";

export const ProductButtonsContainer = (props: { id: number; }) => {

  const [basketVal, setBasketVal] = useState(1);

  const handleAddItem = () => {
    setBasketVal(basketVal + 1);
  };

  const handleRemoveItem = () => {
    setBasketVal(basketVal - 1);
  };

  return (
    <View>
      <View style={styles.rowContainer}>
        <ButtonBase
          title="-"
          onPress={handleRemoveItem}
          isEnabled={basketVal >= 2}
        />
        <BasketItemValueInput val={basketVal} />
        <ButtonBase
          title="+"
          onPress={handleAddItem}
          isEnabled={true}
        />
      </View>
      <View>
        <ButtonAddToBasket
          quantity={basketVal}
          id={props.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
});