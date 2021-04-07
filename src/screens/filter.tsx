import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../components/logo";
import { AppContext } from "../context";
import { Button, Checkbox } from "react-native-paper";
import CheckB from "../components/CheckBox";
import { fetchData } from "../services/fetchData";

export default function Filter() {

  const context = useContext(AppContext);

  let unique: any = [];
  const d = context.items.map(items => items.type);
  unique = d.filter((v, i, a) => a.indexOf(v) === i);
  unique.unshift("All items");


  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchData("types").then(response => {
      console.log('response: '+JSON.stringify(response));
      // if (response.length > 0) {
        setTypes(response[0].glasstype);
      // }
    });
  }, []);

  console.log('types: '+JSON.stringify(types));
  // console.log(types[0].glasstype);

  const initialContext = context;
  // const filteredContextSun = context.items.filter(items => items.type == "SUNGLASSES");
  // const filteredContextEye = ;


  const array = [
    {
      name: "checkbox1",
      key: "checkbox1",
      label: "Show all",
      checked: true
    },
    {
      name: "checkbox2",
      key: "checkbox2",
      label: "Eyeglasses",
      checked: false
    },
    {
      name: "checkbox3",
      key: "checkbox3",
      label: "Sunglasses",
      checked: false
    }
  ];

  // const array = [
  //   {
  //     name: "A"
  //   },
  //   {
  //     name: "B"
  //   },
  //   {
  //     name: "C"
  //   }
  // ];


  const [checked, setChecked] = useState(types);

  function applyFiltersHandler() {
    console.log("Apply clicked");
  }


  function handleClick(index: number) {
    let newArr = [...checked];
    newArr.map((newArrItem, newArrIndex) => {
      newArrIndex == index
        ? newArrItem.checked = true : newArrItem.checked = false;
    });
    setChecked(newArr);

    // console.log(unique[index]);

  }

  return (
    <View style={styles.container}>
      {/*LOGO*/}
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.body}>

        {/*TYPE*/}
        <Text>Show glasses by type:</Text>

        <View style={styles.checkboxes}>
          {checked.map((c, index) => (
            <TouchableOpacity key={c.name} onPress={() => handleClick(index)} style={styles.bor}>
              <CheckB label={types[index]}
                      status={c.checked ? "checked" : "unchecked"}
              />
            </TouchableOpacity>
          ))}


          {/*
          <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
            <Checkbox.Item label="Show all"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bor}
                            onPress={() => showFilteredByType("EYEGLASSES")}>
            <Checkbox.Item label="Eyeglasses"
                           status="unchecked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bor}
                            onPress={() => showFilteredByType("SUNGLASSES")}>
            <Checkbox.Item label="Sunglasses"
                           status="unchecked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
*/}
        </View>


        {/*GENDER*/}
        <Text>Show glasses by gender:</Text>
        <View style={styles.checkboxes}>
          <TouchableOpacity onPress={() => {
          }} style={styles.bor}>
            <Checkbox.Item label="Unisex"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
          }} style={styles.bor}>
            <Checkbox.Item label="Male"
                           status="unchecked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
          }} style={styles.bor}>
            <Checkbox.Item label="Female"
                           status="unchecked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
        </View>


        {/*BRAND*/}
        <Text>Show glasses by brand:</Text>
        <TouchableOpacity onPress={() => {
        }} style={styles.bor}>
          <Checkbox.Item label="Show all"
                         status="checked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }} style={styles.bor}>
          <Checkbox.Item label="Hugo Boss"
                         status="unchecked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }} style={styles.bor}>
          <Checkbox.Item label="Polaroid"
                         status="unchecked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }} style={styles.bor}>
          <Checkbox.Item label="Tom Ford"
                         status="unchecked"
                         labelStyle={styles.checkboxLabel}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }} style={styles.bor}>
          <Checkbox.Item label="Ray-Ban"
                         status="unchecked"
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

