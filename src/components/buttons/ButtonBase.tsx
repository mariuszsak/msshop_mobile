import React from "react";
import { Button } from "react-native";
import { ItemButton } from "../../../types";

const ButtonBase = (props: ItemButton) => {
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
    />
  );
};

export default ButtonBase;
