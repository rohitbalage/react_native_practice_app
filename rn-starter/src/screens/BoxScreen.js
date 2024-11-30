import React  from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () =>
{
    return(
    <View style={styles.viewStyle}>
<Text style={styles.textOneStyle}>Child #1</Text>
<Text style={styles.textTwoStyle}>Child #2</Text>
<Text style={styles.textThreeStyle}>Child #3</Text>

    </View>
    );
};

const styles = StyleSheet.create({

viewStyle: {
    borderWidth : 3,
    borderColor: 'black',
//    flexDirection: 'row',
   height: 200,
   
//    justifyContent: 'flex-start'  // center, space-arount // 
flexDirection: 'row'
},
textOneStyle: 
{
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20,
    flex: 1
},

textTwoStyle: 
{
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-end', // center, streatch
    flex: 1
    // marginVertical: 20,
    // marginHorizontal: 20,
},

textThreeStyle: 
{
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20,
    flex: 1
},

});

export default BoxScreen;