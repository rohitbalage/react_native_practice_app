import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail  from "./Components/ImageDetail";

const ImageScreen = () =>
{
    return <View>
        <ImageDetail title="Forest" imageSource ={require('../../assets/forest.jpg')} score = "5"/>
        <ImageDetail title="Land" imageSource ={require('../../assets/beach.jpg')} score = "9"/>
        <ImageDetail title="Sky" imageSource ={require('../../assets/mountain.jpg')} score = "9"/>
        <ImageDetail title="Mountain"imageSource ={require('../../assets/mountain.jpg')} score = "8" />
        </View>
};

const style = StyleSheet.create({});

export default ImageScreen