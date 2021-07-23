import { View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Logo } from "../components/Logo";
import { useProduct } from "../context/ItemContext";
import { CustomCheckbox } from "../components/checkboxes/CustomCheckbox";
import { fetchData } from "../services/fetchData";
import { GlassBrand, GlassGender, GlassType } from "../../types";
import CustomCheckboxHeader from "../components/checkboxes/CustomCheckboxHeader";
import { ButtonBase } from "../components/buttons/ButtonBase";

export const FilterScreen = (props: any) => {

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
    setIsFiltered,
    setFilteredGlassItems
  } = useProduct();

  function applyFiltersHandler(): void {

    let tempType = selectedGlasses.filter(val => val.hasOwnProperty("type_name")) as any;
    if (tempType.length === 0 || tempType.length === glassItemsByType.length) tempType = glassItemsByType;

    let tempGender = selectedGlasses.filter(val => val.hasOwnProperty("gender_name")) as any;
    if (tempGender.length === 0 || tempGender.length === glassItemsByGender.length) tempGender = glassItemsByGender;

    let tempBrand = selectedGlasses.filter(val => val.hasOwnProperty("brand_name")) as any;
    if (tempBrand.length === 0 || tempBrand.length === glassItemsByBrand.length) tempBrand = glassItemsByBrand;

    const newArray = glassItems
      .filter(val => tempType.map((item: GlassType) => item.type_name).includes(val.type.type_name))
      .filter(val => tempGender.map((item: GlassGender) => item.gender_name).includes(val.gender.gender_name))
      .filter(val => tempBrand.map((item: GlassBrand) => item.brand_name).includes(val.brand.brand_name));

    setFilteredGlassItems(newArray);

    setIsFiltered(true);
    props.navigation.navigate("Home");
  }

  function handleTypeClick(value: any): void {
    setSelectedGlasses(prevstate => [...prevstate, value.type_name]);
  }

  function handleGenderClick(value: any): void {
    setSelectedGlasses(prevstate => [...prevstate, value.gender_name]);
  }

  function handleBrandClick(value: any): void {
    setSelectedGlasses(prevstate => [...prevstate, value.brand_name]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <View>
          <CustomCheckboxHeader text="Show glasses by type:" />
          <View style={styles.checkboxes}>
            {glassItemsByType.map((item: GlassType, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTypeClick(item.type_name)}
                style={styles.bor}
              >
                <CustomCheckbox item={item} index={index} name={item.type_name} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <CustomCheckboxHeader text="Show glasses by gender:" />
          <View style={styles.checkboxes}>
            {glassItemsByGender.map((item: GlassGender, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleGenderClick(item.gender_name)}
                style={styles.bor}
              >
                <CustomCheckbox item={item} index={index} name={item.gender_name} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <CustomCheckboxHeader text="Show glasses by brand:" />
          <View style={styles.checkboxes}>
            {glassItemsByBrand.map((item: GlassBrand, index: number) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleBrandClick(item.brand_name)}
                style={styles.bor}
              >
                <CustomCheckbox item={item} index={index} name={item.brand_name} />
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>

      </View>
      <View style={styles.btn}>
        <ButtonBase
          onPress={applyFiltersHandler}
          title={"Apply filters"}
          isEnabled={true}
        />
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  //wtf
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: {
    flex: 2
  },
  body: {
    flex: 15,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
    // margin: 10
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff'
  },
  checkboxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  bor: {
    // flex: 1,
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black"
  },
  btn: {
    backgroundColor: '#fff',
    padding: 10
    // borderWidth: 1,
    // borderRadius: 15
  }
});
