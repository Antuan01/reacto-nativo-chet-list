import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Header from './components/Header';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} 
                options={{headerStyle: {}}} />
                <Stack.Screen name="Header" component={Header} />
            </Stack.Navigator>
        </NavigationContainer>
    
    );
}
