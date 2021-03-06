import React from 'react';
import {View , Image,ImageBackground,Text,Button} from 'react-native';
const Lab83Picture = () => {
    return(
        <View style={{flex:1,flexDirection:'column'}}>
            <Image
             source = {require('./img/sunrise.png')}
             style={{width:100,height:100}}
             />
             <Image
             source = {{uri:'https://www.pngfind.com/pngs/m/2-24346_sunrise-png-hd-photo-transparent-background-sun-png.png'}}
             style={{width:150,height:150}}
             />
             <ImageBackground 
             source = {{uri:'https://p.kindpng.com/picc/s/569-5697737_sunrise-png-download-image-sunrise-png-transparent-png.png'}}
             style={{width:200,height:200}}>
                 <Text>
                     Hoang Hon
                 </Text>
             </ImageBackground>
        </View>
    );
}
export default Lab83Picture;