import React from 'react';
import {View,Text, TextInput} from 'react-native';
export default class Lab34StateInputData extends React.Component{
    //dinh nghia state (bien luu gia tri nhap lieu)
    state= {
    input1:'',
    input2: ''
    }
    //dinh nghia ham nhap gia tri tu ban phim
    nhapLieuTuBanPhim1 = (t) => {
        this.setState({input1: t})
    }
    nhapLieuTuBanPhim2 = (t2) => {
        this.setState({input2: t2})
}
    render(){
        const {input1,input2} = this.state; //truyen state vao phan render
        return(
            <View>
                <TextInput style={{boderWidth:1,}} 
                onChangeText={this.nhapLieuTuBanPhim1}
                value={input1}/>
                  <TextInput style={{boderWidth:1,}} 
             onChangeText={this.nhapLieuTuBanPhim2}
             value={input2}/>
             <Text>Gia tri nguoi nhap cho input1 la {input1}</Text>
             <Text>Gia tri nguoi nhap cho input2 la {input2}</Text>

            </View>
            
           
         
        )
        
    }
}
