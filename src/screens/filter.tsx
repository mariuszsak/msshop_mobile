import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Logo from "../components/logo";
import { CheckBox, Divider } from "react-native-elements";

export default function Filter() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <Text>Filter</Text>
        <View style={styles.checkboxes}>
        <CheckBox
          title='x'
          checked={true}
        />
        <CheckBox
          title='Click Here'
          checked={true}
        />
        <CheckBox
          title='Click Here'
          checked={true}
        />
        </View>
        <Divider style={{ backgroundColor: 'blue' }} />
        <CheckBox
          title='Click Here'
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
      flexDirection: "row"
  }
  }
);

