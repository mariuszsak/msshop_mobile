import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Info from "../../screens/info";
import HomeStack from "./homeStack";
import Icon from "react-native-vector-icons/Ionicons";
import Basket from "../../screens/basket";
import Filter from "../../screens/filter";
import MyAccount from "../../screens/myAccount";


const Tab = createMaterialBottomTabNavigator();

const AppTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="#9fe6fa"
      // barStyle={{
      //   backgroundColor: "#61dafb"
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#2196f3",
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
          tabBarColor: "#4caf50",
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Filter"
        component={Filter}
        options={{
          tabBarLabel: "Filter",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="md-search-outline" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="My Account"
        component={MyAccount}
        options={{
          tabBarLabel: "My Account",
          tabBarColor: "#e91e63",
          tabBarIcon: ({ color }) => (
            <Icon name="md-man-outline" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: "Info",
          tabBarColor: "#b26a00",
          tabBarIcon: ({ color }) => (
            <Icon name="md-information-circle-outline" size={26} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default AppTabNavigator;