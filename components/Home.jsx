import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.header}>
                <Text> Testo Cabecera </Text>
                <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Header')}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:  "steelblue",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;