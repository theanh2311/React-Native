import React from 'react';
import {Text,View,SectionList,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container :{
        borderWidth:1,
        borderColor:"red",
        flex:1,
        paddingTop:10,
    },
    item:{
        padding:10,
        height:40,
        fontSize:20,
        borderWidth:1,
        borderColor:"green",
    },
    sectionHeader:{
        fontSize:30,
        fontWeight:'bold',
    },
});
const Lab62SectionList=()=>{
    return(
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title:'A',data:['An','Anh','Ánh']},
                    {title:'B',data:['Bình','Ba','Bóng','Bánh']},
                    {title:'C',data:['Chú','Chương','Cháu','Chi']},
                ]}
                renderItem = {({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) =>
                <Text style={styles.sectionHeader}>{section.title}</Text>} 
                keyExtractor={({item,index})=>index}
            />
        </View>
    );
}
export default Lab62SectionList;