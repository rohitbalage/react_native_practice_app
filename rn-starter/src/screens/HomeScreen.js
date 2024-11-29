import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);

  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
    onPress={
      // () =>console.log('Button Pressed')
    () => navigation.navigate("Components")
    }
    title="Go to Components Demo"
    />
   <TouchableOpacity
   onPress={
    // ()=> console.log('List Pressed')
    () => navigation.navigate("List")
   }
   >
    <Text>Go to List Demo</Text>
  </TouchableOpacity>

  <Button 
    onPress={
      // () =>console.log('Button Pressed')
    () => navigation.navigate("ImageScreen")
    }
    title="Go to Image Screen"
    />

<Button 
    onPress={
      // () =>console.log('Button Pressed')
    () => navigation.navigate("CounterScreen")
    }
    title="Go to Counter Screen"
    />

<Button 
    onPress={
      // () =>console.log('Button Pressed')
    () => navigation.navigate("ColorScreen")
    }
    title="Go to Color Screen"
    />

<Button 
    onPress={
      // () =>console.log('Button Pressed')
    () => navigation.navigate("Square")
    }
    title="Go to Square demo"
    />


  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});


export default HomeScreen;
