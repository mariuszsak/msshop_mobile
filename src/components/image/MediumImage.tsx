import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { DB_HOST, DB_PORT } from "@env";

interface MediumImageProps {
  id: number;
}

export const MediumImage = memo((props: MediumImageProps) => {
  const id = props.id;
  return (
    <Image
      resizeMode="contain"
      source={{
        uri: `http://${DB_HOST}/img/${id}.jpg`
      }}
      style={styles.mediumImage}
    />
  );
});

const styles = StyleSheet.create({
  mediumImage: {
    margin: 5,
    width: 150,
    height: 55
  }
});
