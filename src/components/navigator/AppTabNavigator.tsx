import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Info from "../../screens/info";
import HomeStack from "./homeStack";
import Basket from "../../screens/basket";
import Filter from "../../screens/filter";
import MyAccount from "../../screens/myAccount";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "blue",
        labelStyle: {
          padding: 0,
          marginTop: 0,
          marginBottom: 4
        },
        style: {
          margin: 0,
          position: "absolute",
          borderRadius: 15,
          backgroundColor: "#65C6C4",
          height: 50,
          left: 20,
          right: 20,
          bottom: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10
          },
          shadowOpacity: 0.1,
          shadowRadius: 0.1,
          elevation: 2
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon
              name="md-home-outline"
              size={22}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarLabel: "Basket",
          tabBarIcon: ({ color }) => (
            <Icon
              name="cart-outline"
              size={22}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Filter"
        component={Filter}
        options={{
          tabBarLabel: "Filter",
          tabBarIcon: ({ color }) => (
            <Icon
              name="md-search-outline"
              size={22}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="My Account"
        component={MyAccount}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color }) => (
            <Icon
              name="md-man-outline"
              size={22}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <Icon
              name="md-information-circle-outline"
              size={22}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
