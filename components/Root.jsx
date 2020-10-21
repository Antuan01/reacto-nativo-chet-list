import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar, ActivityIndicator, Button, Alert } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Root = () => {
    return (
        <View style={{paddingTop: StatusBar.currentHeight, justifyContent: 'space-between', flex: 1}} >
            <Header />
            <View style={{backgroundColor: 'powderblue', flex: 8}}>
                <Text> app's sexy body </Text>
                <Text> status bar: {StatusBar.currentHeight} </Text>
                <Button
                    onPress={() => Alert.alert('Fuiste Alertado')}
                    title="Learn More"
                    />
            </View>
            <View>
                {/* <ActivityIndicator size={'large'} color={"green"}/> */}
            </View>
            <Footer />         
        </View>
    )
}

export default Root;