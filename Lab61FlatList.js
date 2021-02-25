import React from 'react';
import {Text,View,FlatList,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container :{
        flex:1,
        borderWidth:1,
        borderColor:"red",
        paddingTop:30,
    },  
    item:{
        borderWidth:1,
        borderColor:"green",
        padding:15,
        height:40,
        fontSize:10,
    },
});
const Lab61FlatList = () => {
    return(
        <View style={styles.container}>
            <FlatList
                data = {[
                    {key:'Nguyen The Anh'},
                    {key:'Nguyen The Anh2'},
                    {key:'Nguyen The Anh3'},
                    {key:'Nguyen The Anh4'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}
export default Lab61FlatList;