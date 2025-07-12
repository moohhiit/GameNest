import React, { useRef, useState } from 'react';
import { View, Animated, Button, StyleSheet, Text, Dimensions, Image } from 'react-native';

const HIGHT = Dimensions.get('screen').height
export default function SPSboard() {



  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#B8CFCE', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', gap: 20 }} >
        <View style={{ backgroundColor: '#222831', width: '40%', borderBottomLeftRadius: 20, height: "50%", borderBottomRightRadius: 20 }} >

        </View>
        <View style={{ backgroundColor: '#222831', width: '50%', borderBottomLeftRadius: 20 }} >

        </View>
      </View>
      <View style={{ flex: 8, backgroundColor: '#B8CFCE' }} >
        <View style={{ backgroundColor: '#B8CFCE', flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }} >
          <View style={{ backgroundColor: '#B8CFCE', width: '15%', borderBottomLeftRadius: '80%' }} >

          </View>
        </View>
        <View style={{ backgroundColor: '#B8CFCE', flex: 9 }} >
          <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#B8CFCE', alignItems: 'center' }} >
            <View style={{ backgroundColor: "#FFFFFF", width: "35%", justifyContent: 'center', height: '80%', borderRadius: '50%' }} >
              <Image source={require('../../assets/images/Question-mark.png')} style={{ alignSelf: 'center' }} />
            </View>
          </View>

          <View style={{ backgroundColor: '#B8CFCE', flex: 3, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }} >
            <View style={{ backgroundColor: "#FFFFFF", width: "35%", justifyContent: 'center', height: '80%', borderRadius: '50%' }} >
              <Image source={require('../../assets/images/Question-mark.png')} style={{ alignSelf: 'center' }} />
            </View>
          </View>
          <View style={{ backgroundColor: '#B8CFCE', flex: 3, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }} >

            <View style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%' }} >
              <Image source={require('../../assets/images/Stone.png')} style={{ alignSelf: 'center' }} />
            </View>
            <View style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%' }} >
              <Image source={require('../../assets/images/Paper.png')} style={{ alignSelf: 'center' }} />
            </View>
            <View style={{ backgroundColor: "#FFFFFF", width: "25%", justifyContent: 'center', height: '50%', borderRadius: '50%' }} >
              <Image source={require('../../assets/images/Scissor.png')} style={{ alignSelf: 'center' }} />
            </View>

          </View>


        </View>
        <View style={{ backgroundColor: '#B8CFCE', flex: 1, justifyContent: "flex-start", flexDirection: 'row' }} >
          <View style={{ backgroundColor: 'white', width: '15%', borderTopRightRadius: '80%' }} >

          </View>
        </View>


      </View>

      <View style={{ backgroundColor: '#B8CFCE', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', gap: 20 }} >
        <View style={{ backgroundColor: '#222831', width: '50%', borderTopRightRadius: 20 }} >

          <View  >

          </View>
        </View>
        <View style={{ backgroundColor: '#222831', width: '40%', borderTopLeftRadius: 20, height: "50%", borderTopRightRadius: 20, position: 'absolute', bottom: 0, right: 20 }} >

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HIGHT
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
