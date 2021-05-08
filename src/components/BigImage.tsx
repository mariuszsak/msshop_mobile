import React from "react";
import { Image } from "react-native";

interface ImageNumber {
  id: number;
}

const BigImage = (props: ImageNumber) => {
  return (
      <Image
        resizeMode="contain"
        source={{ uri: `http://192.168.0.2:3000/img/${props.id}.jpg` }}
        style={{ width: 300, height: 300 }}
      />
  );
};

export const MemoizedBigImage = React.memo(BigImage);