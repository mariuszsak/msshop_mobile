import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export const BookmarkButton = () => {

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <TouchableOpacity onPress={() => {
      setIsBookmarked(!isBookmarked);
    }}>
      <Text>
        <Icon name="bookmark" size={42} color={isBookmarked ? "red" : "white"} />
      </Text>
    </TouchableOpacity>
  );
};
