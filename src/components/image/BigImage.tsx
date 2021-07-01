import React from "react";
import { Image } from "react-native";
import { DB_HOST, DB_PORT } from "@env";
import styles from "../../styles/style";

interface BigImageNumber {
  id: number;
}

const BigImage = (props: BigImageNumber) => {
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
};

export const MemoizedBigImage = React.memo(BigImage);
