import React from "react";
import { Image } from "react-native";
import { DB_HOST, DB_PORT } from "@env";
import styles from "../styles/style";

interface MediumImageProps {
  id: number;
}

const MediumImage = (props: MediumImageProps) => {
  const id = props.id;
  return (
    <Image
      resizeMode="center"
      source={{
        uri: `http://${DB_HOST}:${DB_PORT}/img/${id}.jpg`
      }}
      style={styles.mediumImage}
    />
  );
};

export const MemoizedMediumImage = React.memo(MediumImage);