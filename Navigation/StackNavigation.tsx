import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import Header from '../components/Header'
import SPSGameOption from '../Screens/stone-paper-scissor/SPSGameOption'
import LocalSPSSecreen from '../Screens/stone-paper-scissor/LocalSPSSecreen'

export default function StackNavigation() {
    const Stack = createNativeStackNavigator()
    
 return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{
                header : ()=> <Header/>
            }} />
            <Stack.Screen name='SPS'  component={SPSGameOption}  options={{
                headerShown:false
            }}/>
            <Stack.Screen name='LSPS'  component={LocalSPSSecreen}  options={{
                headerShown:false
            }}/>

        </Stack.Navigator>
    </NavigationContainer>
   
  )
}