import React from "react";
import ButtonBase from "./ButtonBase";

const ButtonAddToCart = () => {
  const handleAddToCart = ()=> {
    console.log("pressed");
  }

  return (
    <ButtonBase
      title="Add To Cart"
      onPress={handleAddToCart}
    />
  );
};

export default ButtonAddToCart;