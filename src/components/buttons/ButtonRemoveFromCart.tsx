import React from "react";
import ButtonBase from "./ButtonBase";

const ButtonRemoveFromCart = () => {
  const handleRemoveFromCart = ()=> {
    console.log("pressed");
  }

  return (
    <ButtonBase
      title="X"
      onPress={handleRemoveFromCart}
    />
  );
};

export default ButtonRemoveFromCart;