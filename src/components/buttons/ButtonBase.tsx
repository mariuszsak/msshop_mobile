import React  from "react";
import { Button, StyleSheet, View } from "react-native";
import { ItemButton } from "../../../types";

export const ButtonBase = ({ isEnabled, title, onPress }: ItemButton) => {
  return (
    <View style={styles.btn}>
      {isEnabled ?
        <Button
          title={title}
          onPress={onPress}
        />
        :
        <Button
          title={title}
          onPress={onPress}
          disabled={true}
        />}
    </View>
  );
};


const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    padding: 10
  }
});

