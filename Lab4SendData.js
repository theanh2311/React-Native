//truyen du lieu qua cac form
//co 2 activity , truyen du lieu tu a sang b
import React,{useState} from 'react';
import {Text,View,Button,TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
                Man Hinh 1
            </Text>
            <Button 
            onPress = {()=>navigation.navigate('SecondScreen',{
                MaSV:'PH09707',
                TenSV:'Nguyen The Anh',
                Lop:'B'
            })}
            title="Goi den Activity khac"
            />
        </View>
    )
}
const SecondScreen =({route,navigation}) =>{
    const {MaSV} = route.params;
    const {TenSV} = route.params;
    const {Lop} = route.params;
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Man Hinh 2</Text>
            <Text>Ma Sinh Vien = {MaSV}</Text>
            <Text>Ten Sinh Vien = {TenSV}</Text>
            <Text>Lop = {Lop}</Text>
        </View>
    );
}

const Stack = createStackNavigator();
const Lab4SendData = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name= "HomeScreen" component={HomeScreen}/>
                <Stack.Screen name= "SecondScreen" component={SecondScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Lab4SendData;