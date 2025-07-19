import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, Modal } from 'react-native';

import AvatarRing, { AvatarRingRef } from './Flip-Ring-Animation';
import { getSPSGameResult } from '../../utils/SPSLogic';
import { useNavigation } from '@react-navigation/native';

type PlayerDetail = {
  player_name: string,
  avatar: any,

}
type Choose = 'stone' | 'paper' | 'scissors' | 'Questionmark'

type Props = {
  PlyerTwoDetail: PlayerDetail,
  LocalPlayerDetail: PlayerDetail,

}


const HIGHT = Dimensions.get('screen').height

export default function LocalSPSBoard({
  LocalPlayerDetail = { player_name: "Player 1", avatar: "" },
  PlyerTwoDetail = { player_name: "Player 1", avatar: "" }
}: Props) {
  const [optionPlayer1, setOptionPlayer1] = useState<Choose>('Questionmark')
  const [optionPlayer2, setOptionPlayer2] = useState<Choose>('Questionmark')
  const [CompletedRound, setCompletedRound] = useState(0)
  const [winRoundPlayer1, setwinRoundPlayer1] = useState(0)
  const [winRoundPlayer2, setwinRoundPlayer2] = useState(0)
  const [toggleturn, settoggelTurn] = useState(true)
  const [visible, setVisible] = useState(false)


  const playerImages = {
    Questionmark: require('../../assets/images/Questionmark.png'),
    stone: require('../../assets/images/stone.png'),
    paper: require('../../assets/images/paper.png'),
    scissors: require('../../assets/images/scissors.png'),
  };
  const ringRef1 = useRef<AvatarRingRef>(null)
  const ringRef2 = useRef<AvatarRingRef>(null)
  const modalringRef1 = useRef<AvatarRingRef>(null)
  const modalringRef2 = useRef<AvatarRingRef>(null)

  const Navigation = useNavigation()

  const tryAgain = () => {
    setOptionPlayer1('Questionmark')
    setOptionPlayer2('Questionmark')
    setVisible(false)
  }

  const showResult = () => {
    setVisible(true)
    setTimeout(() => {
      const result = getSPSGameResult(optionPlayer1, optionPlayer2)
      modalringRef1.current?.flipRing()
      modalringRef2.current?.flipRing()
      if (result) {
        modalringRef1.current?.triggerWin()
        setwinRoundPlayer1(winRoundPlayer1 + 1)
        setCompletedRound(CompletedRound + 1)
      }
      else {
        modalringRef2.current?.triggerWin()
        setwinRoundPlayer2(winRoundPlayer2 + 1)
        setCompletedRound(CompletedRound + 1)
      }
    }, 1000);

  }

  useEffect(() => {
    ringRef1.current?.flipRing()
  }, [])

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
              <View>
                <AvatarRing ref={modalringRef1} frontImage={require('../../assets/images/Questionmark.png')} backImage={playerImages[optionPlayer1]} AVATAR_SIZE={120} RING_SIZE={160} RADIUS={75} STROKE_WIDTH={5} TIME={10} BORDER_RADIUS={50} />
                <Text style={{ textAlign: 'center', fontSize: 20 }} >
                  {LocalPlayerDetail.player_name}
                </Text>
              </View>
              <View style={{ justifyContent: 'center', alignContent: 'center' }} >
                <AvatarRing ref={modalringRef2} frontImage={require('../../assets/images/Questionmark.png')} backImage={playerImages[optionPlayer2]} AVATAR_SIZE={120} RING_SIZE={160} RADIUS={75} STROKE_WIDTH={5} TIME={10} BORDER_RADIUS={50} />
                <Text style={{ textAlign: 'center', fontSize: 20 }} >
                  {PlyerTwoDetail.player_name}
                </Text>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }} >
              <TouchableOpacity style={{ backgroundColor: '#53ff28ff', padding: 10, borderRadius: 10 }} 
              onPress={()=>tryAgain()}
              >
                <Text style={{ fontSize: 20, fontWeight: '700' }} >
                  Try Again
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#ff0000ff', padding: 10, borderRadius: 10 }}
                onPress={()=>Navigation.navigate('HomeScreen' as never)}
              >
                <Text style={{ fontSize: 20, fontWeight: '700' }} >
                  Go To Home
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
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
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }} >
          {/* Win Round Indicator */}
          {
            optionPlayer2 !== "Questionmark" && !toggleturn ?
              <TouchableOpacity style={{ left: 50, justifyContent: 'center', paddingHorizontal: 10, backgroundColor: '#222831', borderRadius: 10 }}
                onPress={() => {
                  ringRef1.current?.flipRing()
                  settoggelTurn(!toggleturn)
                  showResult()
                }}
              >
                <Text style={{ fontSize: 25, color: 'white' }} >
                  Confirm
                </Text>
              </TouchableOpacity> : <View></View>
          }
          <View style={{ width: '15%', borderBottomLeftRadius: 80, backgroundColor: 'red', flexDirection: 'row-reverse', justifyContent: 'center', elevation: 6 }} >
            <Text style={{ fontSize: 40, fontWeight: '700' }} >
              {winRoundPlayer2}
            </Text>
          </View>

        </View>
        <View style={{ flex: 9 }} >
          {
            !toggleturn ? <View style={{ backgroundColor: '#B8CFCE', flex: 3, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }} >
              {/* Options */}
              <TouchableOpacity
                onPress={() => setOptionPlayer2('stone')}
                style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
                <Image source={require('../../assets/images/stone.png')} style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOptionPlayer2('paper')}
                style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
                <Image source={require('../../assets/images/paper.png')} style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOptionPlayer2('scissors')}
                style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
                <Image source={require('../../assets/images/scissors.png')} style={{ alignSelf: 'center' }} />
              </TouchableOpacity>

            </View> : null
          }
          <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#B8CFCE', alignItems: 'center' }} >

            <AvatarRing ref={ringRef2} frontImage={require('../../assets/images/Questionmark.png')} backImage={playerImages[optionPlayer2]} AVATAR_SIZE={120} RING_SIZE={160} RADIUS={75} STROKE_WIDTH={5} TIME={10} BORDER_RADIUS={50} />


          </View>

          <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }} >
            <AvatarRing ref={ringRef1} frontImage={require('../../assets/images/Questionmark.png')} backImage={playerImages[optionPlayer1]} AVATAR_SIZE={120} RING_SIZE={160} RADIUS={75} STROKE_WIDTH={5} TIME={10} BORDER_RADIUS={50} />

          </View>
          {toggleturn ? <View style={{ backgroundColor: '#B8CFCE', flex: 3, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }} >
            {/* Options */}
            <TouchableOpacity
              onPress={() => {
                setOptionPlayer1('stone')
              }
              }
              style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
              <Image source={require('../../assets/images/stone.png')} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOptionPlayer1('paper')
              }}
              style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
              <Image source={require('../../assets/images/paper.png')} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOptionPlayer1('scissors')
              }}
              style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%', elevation: 6 }} >
              <Image source={require('../../assets/images/scissors.png')} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>

          </View> : null}


        </View>
        <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', }} >
          {/* Win Round Indiactor */}
          <View style={{ backgroundColor: 'white', width: '15%', borderTopRightRadius: 80, justifyContent: 'center', padding: 10, elevation: 6 }} >
            <Text style={{ fontSize: 40, fontWeight: '700' }} >
              {winRoundPlayer1}
            </Text>
          </View>
          {
            optionPlayer1 !== "Questionmark" && toggleturn ?
              <TouchableOpacity style={{ right: 50, justifyContent: 'center', paddingHorizontal: 10, backgroundColor: '#222831', borderRadius: 10 }}
                onPress={() => {
                  ringRef1.current?.flipRing()
                  settoggelTurn(!toggleturn)
                  ringRef2.current?.flipRing()
                }}
              >
                <Text style={{ fontSize: 25, color: 'white' }} >
                  Confirm
                </Text>
              </TouchableOpacity> : null
          }

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
  openButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    margin: 20,
  },
  openText: {
    color: 'white',
    textAlign: 'center',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingVertical: 30,
    position: 'relative',

  },
  modalText: {
    fontSize: 18,
    marginBottom: 80,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    bottom: 20,
    alignSelf: 'center',
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
