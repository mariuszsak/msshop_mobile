import React from "react";
import ButtonBase from "./ButtonBase";
import { useBasket } from "../../context/BasketContext";
import { useProduct } from "../../context/ItemContext";
import { GlassItem } from "../../../types";

const ButtonAddToCart = (props: { id: number, quantity: number }) => {

  const { glassItems } = useProduct();
  const { setCurrentBasket } = useBasket();
  const handleAddToCart = () => {
    const currentItem = glassItems.find(item => item.id == props.id) as GlassItem;
    const item: { quantity: number; glassItem: GlassItem } = {
      glassItem: currentItem,
      quantity: props.quantity
    };
    setCurrentBasket(prevBasket => [...prevBasket, item]);
  };

  return (
      props.quantity > 0 ?
        <ButtonBase
          title="Add To Basket"
          onPress={handleAddToCart}
        />
        :
        <ButtonBase
          title="Basket is empty"
          onPress={() => {}}
          isEnabled={false}
        />
  );
};

export default ButtonAddToCart;