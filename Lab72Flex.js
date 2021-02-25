import React from 'react';
import {View} from 'react-native';
const Lab72Flex = () => {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'red'}}/>
            <View style={{flex:2,backgroundColor:'green'}}/>
            <View style={{flex:3,backgroundColor:'yellow'}}/>
        </View>
    );
}
export default Lab72Flex;