import React from 'react';
import { Image, StyleSheet } from "react-native";

export const Logo = () => (
    <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
);

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: '#fff'
  }
})
