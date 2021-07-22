import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { InfoScreen } from "../../screens/InfoScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabNavigator } from "./AppTabNavigator";

export const DrawerNavigation = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AppTabNavigator} />
        <Drawer.Screen name="Info" component={InfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
