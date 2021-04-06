import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Logo from "../components/logo";
import { AppContext } from "../context";
import { Button, Checkbox } from "react-native-paper";

export default function Filter() {

  const context = useContext(AppContext);

  const initialContext = context;
  // const filteredContextSun = context.items.filter(items => items.type == "SUNGLASSES");
  // const filteredContextEye = ;

  const iconSize: number = 14;


  function showAll() {
    console.log(initialContext);
  }

  function showFilteredByType(type: string) {
    console.log(context.items.filter(items => items.type == type));
  }

  function applyFiltersHandler() {
    console.log("click");
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <Text>Show glasses by type:</Text>

        <View style={styles.checkboxes}>
          <TouchableOpacity onPress={() => showAll()} style={styles.bor}>

            <Checkbox.Item label="Show all"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>


          <TouchableOpacity style={styles.bor}
                            onPress={() => showFilteredByType("EYEGLASSES")}>
            <Checkbox.Item label="Eyeglasses"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bor}
                            onPress={() => showFilteredByType("SUNGLASSES")}>
            <Checkbox.Item label="Sunglasses"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
        </View>


        <Text>Show glasses by gender:</Text>
        <View style={styles.checkboxes}>
          <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
            <Checkbox.Item label="Unisex"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
            <Checkbox.Item label="Male"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
            <Checkbox.Item label="Female"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>

        </View>
        <Text>Show glasses by brand:</Text>
        <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
          <Checkbox.Item label="Hugo Boss"
                         status="checked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
          <Checkbox.Item label="Polaroid"
                         status="checked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
          <Checkbox.Item label="Tom Ford"
                         status="checked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
          <Checkbox.Item label="Ray-Ban"
                         status="checked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <Button mode="contained" onPress={applyFiltersHandler}>Apply filters</Button>
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
      justifyContent: "space-around",
      alignItems: "flex-end"
    },
    option: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black"
    },
    bor: {
      flex: 1,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black"
    },
    btn: {
      padding: 5,
      backgroundColor: "#fff"
    },
    checkboxLabel: {
      fontSize: 12
    }
  }
);

