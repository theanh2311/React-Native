import React,{useState,useEffect } from "react";
import {View,FlatList,Text  } from "react-native";

const Lab51ReadDataFunc = () => {
    //doc du lieu
    const [data,setData] = useState([]);
    
    //ham doc du lieu
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')//duong link can fetch
        .then((response) => response.json())//doi tuong tra ve la 1 file json
        .then((json) => setData(json.movies))//chuyen doi file json thanh doi tuong movies
        .catch((error) => console.error(error));//tra ve loi neu xay ra loi
    },[]);

    //hien thi du lieu
    return(
        <View style={{flex:1,alignItems:"center",marginTop:400,}}>
            <FlatList
                data = {data}
                renderItem = {({item}) => (<Text>{item.id},{item.title},{item.releaseYear}</Text>)} />
                        </View>
    )
}
export default Lab51ReadDataFunc;