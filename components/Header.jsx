import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
                <Text> Testo Cabecera </Text>
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