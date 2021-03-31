import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import About from "../../screens/about";
import HomeStack from "./homeStack";
import Icon from "react-native-vector-icons/Ionicons";
import Basket from "../../screens/basket";


const Tab = createMaterialBottomTabNavigator();

const AppTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="#9fe6fa"
      barStyle={{
        backgroundColor: "#61dafb"
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#930091",
          tabBarIcon: ({ color }) => (
            <Icon name="md-home-outline" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarLabel: "Basket",
          tabBarColor: "#930091",
          tabBarIcon: ({ color }) => (
            <Icon name="md-basket-outline" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="md-information-circle-outline" size={26} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default AppTabNavigator;