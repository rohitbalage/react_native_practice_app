import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () =>
{
const greeting = "Hi there!";
const name ="Rohit"

    return (
    <View>
    <Text style={styles.textStyle}>This is the Components Screen</Text>
    <Text style={styles.subHeaderStyle}>This is the 2nd view widget</Text>
    <Text style={styles.textStyle}>{greeting}</Text>
    <Text style={styles.subHeaderStyle}>{name}</Text>
    </View> );
};

const styles = StyleSheet.create ({
textStyle:
{
    fontSize: 30
},
subHeaderStyle: {
    fontSize: 20
}

});

export default ComponentsScreen;


