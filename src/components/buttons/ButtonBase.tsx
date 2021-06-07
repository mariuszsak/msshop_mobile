import React from "react";
import { Button, View } from "react-native";
import { ItemButton } from "../../../types";
import style from "../../styles/style";

const ButtonBase = (props: ItemButton) => {
  return (
    <View style={style.btn}>
      <Button
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  );
};

export default ButtonBase;
