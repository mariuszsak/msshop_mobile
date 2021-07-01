import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Logo from "../components/logo";
import MapView, { Marker } from "react-native-maps";
import styles from "../styles/style";


export default function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <MapView style={styless.map} initialRegion={{
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
}

const styless = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
});
