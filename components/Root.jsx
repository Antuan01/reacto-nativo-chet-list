import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, StatusBar } from 'react-native';


const Root = () => {
    return (
        <View style={{paddingTop: 24, justifyContent: 'space-between', flex: 1}} >
            <View style={{backgroundColor: "steelblue", flex: 1}}>
                <Text> Testo Cabecera </Text>
            </View>
            <View style={{backgroundColor: 'powderblue', flex: 8}}>
                <Text> app's sexy body </Text>
                <Text> {StatusBar.currentHeight} </Text>
            </View>
            <View style={{backgroundColor: "steelblue", flex: 1}}>
                <Text> Testo Por el suelo </Text>
            </View>            
        </View>
    )
}

export default Root;