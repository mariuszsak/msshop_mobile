import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Logo from "../components/logo";
import MapView, { Marker } from "react-native-maps";


export const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <MapView style={styles.map} initialRegion={{
          latitude: 52.229676,
          longitude: 21.012229,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}>
          <Marker coordinate={{
            latitude: 52.229676,
            longitude: 21.012229
          }}
                  title={"GlassShop"}
                  description={"00-001 Warszawa, ul. Okularowa 1"} />
        </MapView>
      </View>
      <View style={styles.footer} />
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
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
