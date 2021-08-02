import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const CustomCheckboxHeader = ({ text }: any) => {

  return (
    <View>
      <Text  style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
      fontWeight: "bold"
    }
  }
);