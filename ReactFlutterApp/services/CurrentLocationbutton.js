import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';


const WIDTH = Dimensions.get('window').width;
const HEIGHT= Dimensions.get('window').height;

export const CurrentLocationButton = function (){



     return(

         <View style ={styles.container }>

                        <Icon 
                        name= "map-pin"
                        color="black"
                        size={25}
                        onPress ={()=>{Alert.alert('update coming soon')}}
                        />
         </View>
     )
}

const styles = StyleSheet.create({
    conatainer:{
        zIndex:3,
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        left: WIDTH - 70,
        borderRadius: 50,
        shadowColor: '#000000',
        elevation: 7,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

/// location buton not displaying