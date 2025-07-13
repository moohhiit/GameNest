import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SPSLogo from '../../assets/svg/F.svg'

export default function SPSGameOption() {

  const Navigation = useNavigation()


  return (
    <View style={{ flex: 1, backgroundColor: '#B8CFCE' }}>
      <View style={{ flex: 2, padding: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
        <SPSLogo width={'40%'} height={'82%'} />

        <View>
          <Text style={{ fontSize: 40, fontFamily: 'serif' }} >Stone</Text>
          <Text style={{ fontSize: 40, fontFamily: 'serif' }} >Paper</Text>
          <Text style={{ fontSize: 40, fontFamily: 'serif' }} >Scisser</Text>
        </View>
      </View>
      <View style={{ flex: 8, paddingHorizontal: 40, paddingVertical: 10, gap: 50, }} >
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate('LSPS' as never)
          }}
          style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 20, elevation: 5, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 }} >
          <View style={{ alignItems: 'center', alignSelf: 'center' }} >
            <Text style={{ fontSize: 30, fontFamily: 'serif' }} >Local</Text>
            <Text style={{ fontSize: 30, fontFamily: 'serif' }} >Play</Text>
          </View>
          <Image source={require("../../assets/images/Local-Play.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, elevation: 5, justifyContent: 'space-between', paddingHorizontal: 20 }} >
          <View style={{ alignSelf: 'center' }} >
            <Text style={{ fontSize: 30, fontFamily: 'serif' }} >Play With Friends</Text>
          </View>
          <Image source={require("../../assets/images/Play-With-friend.png")} style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', padding: 20, borderRadius: 20, elevation: 5, justifyContent: 'space-between', paddingHorizontal: 20 }} >
          <Image source={require("../../assets/images/Room.png")} />
          <Text style={{ fontSize: 30, fontFamily: 'serif', alignSelf: 'center' }} >Room</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}