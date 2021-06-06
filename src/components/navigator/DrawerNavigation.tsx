import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Info from "../../screens/info";
import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigator from "./AppTabNavigator";

const DrawerNavigation = () => {

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={AppTabNavigator} />
      <Drawer.Screen name="Info" component={Info} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;