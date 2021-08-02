import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { DB_HOST, DB_PORT } from "@env";

interface BigImageNumber {
  id: number;
}

export const BigImage = memo((props: BigImageNumber) => {
  const id = props.id;
  return (
    <Image
      resizeMode="contain"
      source={{
        uri: `http://${DB_HOST}/img/${id}.jpg`
      }}
      style={styles.bigImage}
    />
  );
});

const styles = StyleSheet.create({
  bigImage: {
    width: 330,
    height: 156,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0
  }
});
