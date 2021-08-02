import React from "react";
import { ButtonBase } from "./ButtonBase";
import { useBasket } from "../../context/BasketContext";
import { BasketItem } from "../../../types";

export const ButtonRemoveFromBasket = (props: { id: number; }) => {

  const { currentBasket, setCurrentBasket } = useBasket();

  const handleRemoveFromBasket = () => {
    const newBasket: BasketItem[] = currentBasket.filter(element => element.glassItem.id != props.id);
    setCurrentBasket(newBasket);
  };

  return (
    <ButtonBase
      title="Remove"
      onPress={handleRemoveFromBasket}
      isEnabled={true}
    />
  );
};
