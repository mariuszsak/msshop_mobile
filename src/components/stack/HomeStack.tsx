import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from "../../screens/DetailScreen";
import { HomeScreen } from "../../screens/HomeScreen";

export const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: "Details:"
        }}
      />
    </Stack.Navigator>
  );
};
