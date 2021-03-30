import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../../screens/about";
import HomeStack from "./homeStack";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "blue",
        activeBackgroundColor: "#fff",
        labelStyle: {
          fontSize: 16
        },
        tabStyle: {
          borderColor: "navy",
          borderTopWidth: 1
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default AppTabNavigator;