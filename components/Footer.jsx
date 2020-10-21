import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
                <Text> Testo por el suelo </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: "steelblue",
        flex: 1
    }
})

export default Footer;