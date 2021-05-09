import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '../../screens/productDetail';
import Home from '../../screens/home';

const HomeStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    title: 'Details:'
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
