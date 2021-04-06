import React from "react";
import { Checkbox } from "react-native-paper";
import styles from "../styles/style";

const CheckB = (props: any) => {
  return (
    <Checkbox.Item
      {...props}
      labelStyle={styles.checkboxLabel}
    />
  );
};

export default CheckB;