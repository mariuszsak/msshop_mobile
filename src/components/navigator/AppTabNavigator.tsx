import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import Home from "../../screens/home";
import About from "../../screens/about";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'blue',
            activeBackgroundColor: 'red',
            labelStyle: {
                fontSize: 16
            }
        }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
    </NavigationContainer>
);