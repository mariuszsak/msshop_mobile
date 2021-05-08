import React from "react";
import { Image } from "react-native";
import { DB_HOST, DB_PORT } from "@env";

interface ImageNumber {
  id: number;
}

const BigImage = (props: ImageNumber) => {
  return (
    <Image
      resizeMode="contain"
      source={{ uri: `http://${DB_HOST}:${DB_PORT}/img/${props.id}.jpg` }}
      style={{ width: 300, height: 300 }}
    />
  );
};

export const MemoizedBigImage = React.memo(BigImage);