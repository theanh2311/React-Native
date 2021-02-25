import React from 'react';
import {View} from 'react-native';
const Lab71WidthHeight = () => {
    return(
        <View>
            <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            <View style={{width:100,height:100,backgroundColor:'green'}}></View>
            <View style={{width:150,height:50,backgroundColor:'blue'}}></View>
        </View>
    );
}
export default Lab71WidthHeight;