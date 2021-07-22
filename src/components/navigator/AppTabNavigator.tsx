import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { InfoScreen } from "../../screens/InfoScreen";
import { HomeStack } from "../stack/HomeStack";
import { BasketScreen } from "../../screens/BasketScreen";
import { FilterScreen } from "../../screens/FilterScreen";
import { AccountScreen } from "../../screens/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        labelStyle: {
          padding: 0,
          marginTop: 0,
          marginBottom: 10
        },
        style: {
          margin: 0,
          position: "absolute",
          borderRadius: 15,
          backgroundColor: "#32ACDB",
          height: 70,
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
        component={BasketScreen}
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
        component={FilterScreen}
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
        component={AccountScreen}
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
        component={InfoScreen}
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
