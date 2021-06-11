import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/style";
import Icon from "react-native-vector-icons/Ionicons";

const BookmarkButton = () => {
  return (
    <View style={styles.bookmark}>
      <Text>
        <Icon name="bookmark-outline" size={22} color={"white"} />
      </Text>
    </View>
  );
};

export default BookmarkButton;