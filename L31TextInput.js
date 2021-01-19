import React, {useState} from 'react';
import {View,Text,TextInput} from 'react-native';
const L31TextInput = () => {
    const [text,setText] = useState('');
    return(
        <View style={{padding:50}}>
        <TextInput
        placeholder="Xin moi ban nhap vao day"
        onChangeText={text => setText(text)}
        defaultValue={text}
        />
        <Text style={{padding:20 , fontSize:30}} > {text} </Text>
        <Text>
            {text.split(' ').map((tu)=>tu && 'dich').join(' ')}
        </Text>
        </View>
       
    );
}
export default L31TextInput;