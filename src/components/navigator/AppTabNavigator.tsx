import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import About from '../../screens/about';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'blue',
                activeBackgroundColor: '#fff',
                labelStyle: {
                    fontSize: 16
                },
              tabStyle: {
                  borderColor: 'navy',
                borderTopWidth: 1
              }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{}}/>
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    </NavigationContainer>
);
