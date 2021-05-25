import React from "react";
import ButtonBase from "./ButtonBase";
import ItemInput from "../ItemInput";

const ButtonsAddRemoveItem = () => {
  const handleAddItem = () => {
    console.log("pressed");
  };
  const handleRemoveItem = () => {
    console.log("pressed");
  };

  return (
    <>
      <ButtonBase
        title="+"
        onPress={handleAddItem}
      />
      <ItemInput />

      <ButtonBase
        title="+"
        onPress={handleRemoveItem}
      />
    </>
  );
};

export default ButtonsAddRemoveItem;