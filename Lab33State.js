import React from 'react';
import {Text,View} from 'react-native';
export default class Lab33State extends React.Component{
    //dinh nghia bien State1 trong state
    state = {
        state1: 'gia tri mac dinh'
    }
    //dinh nghia 1 ham update
    updateState = () => this.setState({state1: 'state 1 duoc cap nhat gia tri'});
    render(){
        return(
            <View>
                {/*goi ham update de thay doi du lieu trong state1*/}
                <Text onPress={this.updateState}>{this.state.state1}</Text>
            </View>
        )
    }
}