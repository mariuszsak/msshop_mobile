import React from "react";
import { Image, StatusBar, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require("../../assets/logo.jpg")}
    />
  );
};


const styles = StyleSheet.create({
  logo: {
    flex:1,
    width: "100%",
    resizeMode: "contain"
  }
});

export default Logo;