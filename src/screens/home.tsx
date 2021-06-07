import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Logo from "../components/logo";
import { ItemList } from "../components/ItemList";
import { useProduct } from "../context/ItemContext";
import styles from "../styles/style";

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
        <View style={styles.logo}>
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
