import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import Logo from "../components/logo";
import { useProduct } from "../context/ItemContext";
import CheckBox from "../components/CheckBox";
import { fetchData } from "../services/fetchData";
import { GlassBrand, GlassGender, GlassType } from "../../types";


export default function Filter() {

  const {
    glassItems,
    glassItemsByType,
    setGlassItemsByType,
    glassItemsByGender,
    setGlassItemsByGender,
    glassItemsByBrand,
    setGlassItemsByBrand,
    selectedGlasses,
    setSelectedGlasses
  } = useProduct();

  const setDataToState = () => {
    fetchData("types").then(data => {
      setGlassItemsByType(data);
    });

    // add endpoint!
    fetchData("gender").then(data => {
      setGlassItemsByGender(data);
    });

    fetchData("brands").then(data => {
      setGlassItemsByBrand(data);
    });
  };

  // console.log(handleFetchTypes());
  useEffect(() => {
    setDataToState();
  }, []);

  function applyFiltersHandler(): void {
    console.log("Apply clicked");
  }

  function handleTypeClick(value: string): void {
    glassItems.filter(element => {
        return element.type.type_name === value ? element.type.type_name === value : glassItems;
      }
    );
  }

  function handleGenderClick(value: string): void {
    glassItems.filter(element => {
        return element.gender.gender_name === value ? element.gender.gender_name === value : glassItems;
      }
    );
  }

  function handleBrandClick(value: string): void {
    glassItems.filter(element => {
        return element.brand.brand_name === value ? element.brand.brand_name === value : glassItems;
      }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <View>
          <Text>Show glasses by type:</Text>
        </View>
        <View style={styles.checkboxes}>
          {glassItemsByType.map((item: GlassType, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTypeClick(item.type_name)}
              style={styles.bor}
            >
              <CheckBox
                label={item.type_name}
                id={index}
                status={selectedGlasses.includes(item) ? "checked" : "unchecked"}
                onPress={() => {
                  if (selectedGlasses.includes(item)) {
                    setSelectedGlasses(selectedGlasses.filter(i => i !== item));
                  } else {
                    setSelectedGlasses([...selectedGlasses, item]);
                  }
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.body}>
        <View>
          <Text>Show glasses by gender:</Text>
        </View>
        <View style={styles.checkboxes}>
          {glassItemsByGender.map((item: GlassGender, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleGenderClick}
              style={styles.bor}
            >
              <CheckBox
                label={item.gender_name}
                id={index}
                status={selectedGlasses.includes(item) ? "checked" : "unchecked"}
                onPress={() => {
                  if (selectedGlasses.includes(item)) {
                    setSelectedGlasses(selectedGlasses.filter(i => i !== item));
                  } else {
                    setSelectedGlasses([...selectedGlasses, item]);
                  }
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.body}>
        <View>
          <Text>Show glasses by brand:</Text>
        </View>
        <View style={styles.checkboxes}>
          {glassItemsByBrand.map((item: GlassBrand, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleBrandClick(item.brand_name)}
              style={styles.bor}
            >
              <CheckBox
                label={item.brand_name}
                id={index}
                status={selectedGlasses.includes(item) ? "checked" : "unchecked"}
                onPress={() => {
                  if (selectedGlasses.includes(item)) {
                    setSelectedGlasses(selectedGlasses.filter(i => i !== item));
                  } else {
                    setSelectedGlasses([...selectedGlasses, item]);
                  }
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.btn}>
        <Button mode="contained" onPress={applyFiltersHandler}>
          Apply filters
        </Button>
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
});
