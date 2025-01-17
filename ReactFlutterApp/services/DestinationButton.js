import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';




const WIDTH = Dimensions.get('window').width;
export const DestinationButton = function(props){
    return(
        <View>

        <TouchableOpacity  
           onPress = {() =>{Alert.alert('You tapped the button!'),{
               opacity:9
           }}}
             style = {styles.container}
        >
            <View style ={styles.leftCol}>
                <Text style={{fontSize:8}}>{'\u25A0'}</Text>
            </View>

            <View style = {styles.centerCol}>
                <Text style ={{fontFamily: 'sans-serif-thin', fontSize:21, color: '#545454', fontWeight: 'bold'}}>
                    search store?
                </Text>
            </View>

            <View style= {styles.rightCol}>
                <Ionicons name = "md-car" color = "#000000" size = {25} style ={{alignSelf:'center'}}/>
            </View>
        </TouchableOpacity>

        </View>
       
    
    )

}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-40),
        height: 60,
        top:110,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        opacity:2

    },
    leftCol:{
        flex:1,
        alignItems: 'center'
    },
    centerCol:{
        flex:4
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor:'#ededed'
    }
})