import React from "react";
import { Checkbox } from "react-native-paper";
import styles from "../../styles/style";
import { useProduct } from "../../context/ItemContext";
import { Text } from "react-native";

const CustomCheckbox = (props: any) => {
  // <Checkbox.Item {...props} labelStyle={styles.checkboxLabel} />

  const {
    glassItems,
    glassItemsByType,
    setGlassItemsByType,
    glassItemsByGender,
    setGlassItemsByGender,
    glassItemsByBrand,
    setGlassItemsByBrand,
    selectedGlasses,
    setSelectedGlasses,
    filteredGlassItems,
    setFilteredGlassItems
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

export default CustomCheckbox;
