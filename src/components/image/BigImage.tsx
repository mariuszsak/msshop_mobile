import React, { memo } from "react";
import { Image } from "react-native";
import { DB_HOST, DB_PORT } from "@env";
import styles from "../../styles/style";

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
