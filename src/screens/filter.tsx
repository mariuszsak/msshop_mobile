import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Logo from "../components/logo";
import { CheckBox, Divider } from "react-native-elements";

export default function Filter() {

  const iconSize: number = 14;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <Text>Show glasses by type:</Text>
        <View style={styles.checkboxes}>
          <CheckBox
            title="Show all"
            size={iconSize}
            checked={true}

          />
          <CheckBox
            title="Eyeglasses"
            size={iconSize}
            checked={true}
          />
          <CheckBox
            title="Sunglasses"
            size={iconSize}
            checked={true}
          />
        </View>
        <Text>Show glasses by gender:</Text>
        <View style={styles.checkboxes}>
          <CheckBox
            title="Unisex"
            size={iconSize}
            checked={true}
          />
          <CheckBox
            title="Male"
            size={iconSize}
            checked={true}
          />
          <CheckBox
            title="Female"
            size={iconSize}
            checked={true}
          />
        </View>
        <Text>Show glasses by brand:</Text>
        <CheckBox
          title="Show all"
          size={iconSize}
          checked={true}
        />
        <CheckBox
          title="Hugo Boss"
          size={iconSize}
          checked={true}
        />
        <CheckBox
          title="Polaroid"
          size={iconSize}
          checked={true}
        />
        <CheckBox
          title="Tom Ford"
          size={iconSize}
          checked={true}
        />
        <CheckBox
          title="Ray-Ban"
          size={iconSize}
          checked={true}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      flex: 1,
      backgroundColor: "#fff"
    },
    body: {
      flex: 9,
      backgroundColor: "#fff"
    },
    checkboxes: {
      flexDirection: "row",
      paddingBottom:20,
      justifyContent: "center"
    }
  }
);

