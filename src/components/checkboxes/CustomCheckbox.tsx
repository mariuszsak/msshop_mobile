import React from "react";
import { Checkbox } from "react-native-paper";
import { useProduct } from "../../context/ItemContext";
import { Text } from "react-native";

export const CustomCheckbox = (props: any) => {

  const {
    selectedGlasses,
    setSelectedGlasses
  } = useProduct();

  return (
    <>
      <Text>{props.name}</Text>
      <Checkbox
        key={props.index}
        status={selectedGlasses.includes(props.item) ? "checked" : "unchecked"}
        onPress={() => {
          if (selectedGlasses.includes(props.item)) {
            return setSelectedGlasses(selectedGlasses.filter(i => i !== props.item));
          }
          return setSelectedGlasses([...selectedGlasses, props.item]);
        }}
      />
    </>
  );
};
