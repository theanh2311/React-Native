import React,{useState,useEffect,Component} from "react";
import {View,FlatList,Text  } from "react-native";

export default class Lab52ReadDataClass extends Component{
    constructor (props){
        //1:tao state
        //2:doc du lieu luu vao state
        super(props);
        this.state = {
            data : [],
        };
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json)  => {this.setState({data: json.movies})})
        .catch((error) => console.error(error));
    }
    //hien thi
    render(){
        const {data} = this.state;//lay du lieu tu state
        return(
            <View style={{flex:1,alignItems:"center",marginTop:400,}}>
                <FlatList 
                data = {data}
                renderItem = {({item}) => 
            (<Text>{item.id},{item.title}</Text>)}
                />
            </View>
        );
    }
}

