import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const DetailText = (props: any) => {
  const [loaded] = useFonts({
    "Roboto": require("../../../assets/Roboto-BlackItalic.ttf"),
    'Ionicons': require("../../../node_modules/react-native-vector-icons/Fonts/Ionicons.ttf")
  });

  if (!loaded) {
    return null;
  } else {
    return (
      <Text style={{fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 14}}>
        {props.children}
      </Text>
    );
  }
};

export default DetailText;