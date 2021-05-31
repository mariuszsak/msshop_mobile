import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Logo from "../components/logo";
import { ItemList } from "../components/ItemList";
import { useProduct } from "../context/ItemContext";

interface Props {
  navigation: any;
}

export default function Home(props: Props) {

  const {
    glassItems,
    isFiltered,
    filteredGlassItems
  } = useProduct();

  if (glassItems.length > 0) {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#61dafb"
          hidden={false}
        />
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
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
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
  statusbar: {
    backgroundColor: "#61dafb"
  }
});
