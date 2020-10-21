import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar, Button, Alert } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const Root = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Header" component={Header} />
        </Stack.Navigator>
    )
}

export default Root;