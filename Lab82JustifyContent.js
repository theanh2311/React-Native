import React from 'react';
import { View } from 'react-native';
const Lab82JustifyContent = () => {
    return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
            <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
            <View style={{width:50,height:50,backgroundColor:'green'}}></View>
        </View> 
    );
}
//space-between : chia deu noi dung co khoang khong tu giua
//space : tat ca noi dung nam o giua
//flex-end:noi dung nam o trai giua
//flex-start:noi dung nam o trai tren
//space-around:noi dung can deu
export default Lab82JustifyContent;