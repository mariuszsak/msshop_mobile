import React from "react";
import { ButtonBase } from "./ButtonBase";
import { useBasket } from "../../context/BasketContext";
import { useProduct } from "../../context/ItemContext";
import { GlassItem } from "../../../types";

export const ButtonAddToBasket = (props: { id: number, quantity: number }) => {

  const { glassItems } = useProduct();
  const { currentBasket, setCurrentBasket } = useBasket();

  const handleAddToBasket = () => {
    const currentItem = glassItems.find(item => item.id == props.id) as GlassItem;
    const item: { quantity: number; glassItem: GlassItem } = {
      glassItem: currentItem,
      quantity: props.quantity
    };
    if (!currentBasket.find(e => e.glassItem == currentItem)) {
      setCurrentBasket(prevBasket => [...prevBasket, item]);
    }
  };

  return (
    <ButtonBase
      title="Add To Basket"
      onPress={handleAddToBasket}
      isEnabled={true}
    />
  );
};
