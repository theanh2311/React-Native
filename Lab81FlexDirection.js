import React from 'react';
import { View } from 'react-native';
const Lab81FlexDirection = () => {
    return(
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
            <View style={{width:50,height:50,backgroundColor:'green'}}></View>
        </View> 
    );
}
//row:tat ca nam tren 1 hang,nam phia trai tren
//reverse : tat ca nam tren 1 hang,nam phia phai-tren
//column : tat ca nam tren 1 cot , nam phia trai tren
//column-reverse : tat ca nam tren 1 cot,nam phia trai duoi
export default Lab81FlexDirection;