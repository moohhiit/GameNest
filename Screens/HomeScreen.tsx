import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const Naviagtion = useNavigation()
    return (
       <ScrollView>
        <View style={{flexDirection:'row' , justifyContent:'space-between' , padding:10}} >
            <TouchableOpacity 
            onPress={()=>Naviagtion.navigate("SPS" as never)}
            style={{width:'45%' , backgroundColor:'#B8CFCE' , padding:10 , borderRadius:20}} >
                <Image source={require('../assets/images/Stone-paper-scissor-gametheam.png')}  style={{width:160 , height:160 , alignSelf:'center'}} />
                <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}} >
                    Sone Paper Scissor
                </Text>
            </TouchableOpacity>
            <View style={{width:'45%' , backgroundColor:'gray'}} >
                <Text>
                    Second Game 
                </Text>
            </View>
                     
        </View>
       </ScrollView>
    )
}