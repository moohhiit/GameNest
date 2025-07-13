import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

import AvatarRing, { AvatarRingRef } from './Flip-Ring-Animation';

type PlayerDetail = {
  player_name : string,
  avatar : any ,

}

type Props = {
  winRoundPlayer1: number,
  winRoundPlayer2: number,
  PlyerTwoDetail: PlayerDetail,
  LocalPlayerDetail: PlayerDetail,
  ChooseOption: (option: string) => void,
  ChoosedOptionbyPlyer2: String,
  CompletedRound: number,
}


const HIGHT = Dimensions.get('screen').height

export default function SPSboard(
  { winRoundPlayer1 = 0,
    winRoundPlayer2 = 0,
    LocalPlayerDetail = {player_name : "Player 1" , avatar : ""},
    ChooseOption,
    ChoosedOptionbyPlyer2,
    CompletedRound = 0,
    PlyerTwoDetail = {player_name : "Player 1" , avatar : ""}
  }: Props
) {
  
  const ringRef = useRef<AvatarRingRef>(null)
  const ringRef2 = useRef<AvatarRingRef>(null)


  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', gap: 20 }} >
        {/* Round Indicator */}
        <View style={{ backgroundColor: '#222831', width: '40%', borderBottomLeftRadius: 20, height: "50%", borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white', fontSize: 20 }}>
            Round - {CompletedRound}/3
          </Text>
        </View>
        {/* Player 2 Avatar */}
        <View style={{ backgroundColor: '#222831', width: '50%', borderBottomLeftRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20, elevation: 6 }} >
          <View>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }} >
             {PlyerTwoDetail.player_name}
            </Text>
          </View>
          <View style={{ backgroundColor: 'white', height: 50, width: 50, borderRadius: 10 }} >

          </View>

        </View>
      </View>
      <View style={{ flex: 8, }} >
        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }} >
          {/* Win Round Indicator */}
          <View style={{ width: '15%', borderBottomLeftRadius: 80, backgroundColor: 'red', flexDirection: 'row-reverse', justifyContent: 'center', elevation: 6 }} >
            <Text style={{ fontSize: 40, fontWeight: '700' }} >
              {winRoundPlayer2}
            </Text>
          </View>
        </View>
        <View style={{ flex: 9 }} >
          <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#B8CFCE', alignItems: 'center' }} >
            
            <AvatarRing ref={ringRef} frontImage={require('../../assets/images/Question-mark.png')} backImage={require('../../assets/images/Stone.png')} AVATAR_SIZE = {120} RING_SIZE = {160} RADIUS={75} STROKE_WIDTH={5} TIME={10} BORDER_RADIUS={50}/>
                      

          </View>

          <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }} >
            <AvatarRing ref={ringRef2} frontImage={require('../../assets/images/Question-mark.png')} backImage={require('../../assets/images/Stone.png')} AVATAR_SIZE = {120} RING_SIZE = {160} RADIUS={75} STROKE_WIDTH={5} TIME={10} BORDER_RADIUS={50}/>
           
          </View>
          <View style={{ backgroundColor: '#B8CFCE', flex: 3, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }} >
            {/* Options */}
            <TouchableOpacity
              onPress={() =>  ringRef.current?.flipRing() }
              style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
              <Image source={require('../../assets/images/Stone.png')} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ringRef2.current?.startAnimation()}
              style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
              <Image source={require('../../assets/images/Paper.png')} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ringRef.current?.triggerWin()}
              style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
              <Image source={require('../../assets/images/Scissor.png')} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>

          </View>


        </View>
        <View style={{ flex: 1, justifyContent: "flex-start", flexDirection: 'row' }} >
          {/* Win Round Indiactor */}
          <View style={{ backgroundColor: 'white', width: '15%', borderTopRightRadius: 80, justifyContent: 'center', padding: 10, elevation: 6 }} >
            <Text style={{ fontSize: 40, fontWeight: '700' }} >
              {winRoundPlayer1}
            </Text>
          </View>
        </View>


      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', gap: 20 }} >
        {/* Rule Book */}
        <View style={{ backgroundColor: '#222831', width: '50%', borderTopRightRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }} >
          <View style={{ backgroundColor: 'white', height: 50, width: 50, borderRadius: 10 }} >

          </View>
          <View>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }} >
             {LocalPlayerDetail.player_name}
            </Text>
          </View>

        </View>
        {/* Player 1 Avatar */}
        <View style={{ backgroundColor: '#222831', width: '40%', borderTopLeftRadius: 20, height: "50%", borderTopRightRadius: 20, position: 'absolute', bottom: 0, right: 20 }} >

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HIGHT,
    backgroundColor: '#B8CFCE'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'sky#B8CFCE',
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
