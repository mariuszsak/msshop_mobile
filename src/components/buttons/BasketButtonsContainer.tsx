import React from "react";
import { ButtonBase } from "./ButtonBase";
import { BasketItemValueInput } from "../BasketItemValueInput";
import { StyleSheet, View } from "react-native";
import { ButtonRemoveFromBasket } from "./ButtonRemoveFromBasket";
import { useBasket } from "../../context/BasketContext";
import { BasketItem } from "../../../types";

export const BasketButtonsContainer = (props: BasketItem) => {

  const { currentBasket, setCurrentBasket } = useBasket();

  const handleAddItem = () => {
    const index = currentBasket.findIndex(element => element.glassItem.id == props.glassItem.id);
    let updatedBasket = [...currentBasket];
    const currentQuantity = updatedBasket[index].quantity;
    updatedBasket[index] = { ...updatedBasket[index], quantity: currentQuantity + 1 };
    setCurrentBasket(updatedBasket);
  };

  const handleRemoveItem = () => {
    const index = currentBasket.findIndex(element => element.glassItem.id == props.glassItem.id);
    let updatedBasket = [...currentBasket];
    const currentQuantity = updatedBasket[index].quantity;
    updatedBasket[index] = { ...updatedBasket[index], quantity: currentQuantity - 1 };
    setCurrentBasket(updatedBasket);
  };

  return (
    <View>
      <View style={styles.rowContainer}>
        <ButtonBase
          title="-"
          onPress={handleRemoveItem}
          isEnabled={props.quantity >= 2}
        />
        <BasketItemValueInput val={props.quantity} />
        <ButtonBase
          title="+"
          onPress={handleAddItem}
          isEnabled={true}
        />
      </View>
      <View>
        <ButtonRemoveFromBasket
          id={props.glassItem.id}
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