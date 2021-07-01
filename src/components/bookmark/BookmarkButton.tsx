import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface IBookmarkButton {
  isBookmarked: boolean;
}

const BookmarkButton = () => {

  const [isBmk, setIsBmk] = useState(false);

  return (
    <TouchableOpacity onPress={() => {
      setIsBmk(!isBmk);
    }}>
      <Text>
        <Icon name="bookmark" size={22} color={isBmk ? "red" : "white"} />
      </Text>
    </TouchableOpacity>

  );
};

export default BookmarkButton;