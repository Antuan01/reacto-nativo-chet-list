import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Header = ({navigation}) => {
    return (
        <View style={styles.header}>
                <Text> Testo Cabecera </Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Header')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:  "steelblue",
        flex: 1,
    }
})

export default Header;