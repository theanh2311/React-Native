//truyen du lieu qua cac form
//co 2 activity , truyen du lieu tu a sang b
import React,{useState} from 'react';
import {Text,View,Button,TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
    const [MaSV,setMaSV] = useState('');
    const [TenSV,setTenSV] = useState('');
    const [Lop,setLop] = useState('');
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
                Man Hinh 1
            </Text>
            <TextInput style={{boder:1,}}
                onChangeText={(txt) => setMaSV(txt)}
                value={MaSV}
                placeholder="Nhap Ma Sinh Vien"
            />
             <TextInput style={{boder:1,}}
                onChangeText={(txt) => setTenSV(txt)}
                value={TenSV}
                placeholder="Nhap Ten Sinh Vien"
            />
             <TextInput style={{boder:1,}}
                onChangeText={(txt) => setLop(txt)}
                value={Lop}
                placeholder="Nhap Lop"
            />
            <Button 
            onPress = {()=>navigation.navigate('SecondScreen',{
                MaSV,
                TenSV,
                Lop,
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