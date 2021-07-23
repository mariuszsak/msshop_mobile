import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components/logo";
import { ItemList } from "../components/ItemList";
import { useProduct } from "../context/ItemContext";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any> | null;
}

export const HomeScreen = (props: Props) => {

  const {
    glassItems,
    isFiltered,
    filteredGlassItems
  } = useProduct();

  if (glassItems.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.body}>
          {isFiltered ?
            <ItemList
              data={filteredGlassItems}
              navigation={props.navigation}
            />
            :
            <ItemList
              data={glassItems}
              navigation={props.navigation}
            />
          }
        </View>
        <View style={styles.footer} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: {
    flex: 2
  },
  body: {
    flex: 15,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
    // margin: 10
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff"
  }
});
