import React from "react";
import { Image } from "react-native";
import { DB_HOST, DB_PORT } from "@env";
import styles from "../../styles/style";

interface MediumImageProps {
  id: number;
}

const MediumImage = (props: MediumImageProps) => {
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
};

export const MemoizedMediumImage = React.memo(MediumImage);