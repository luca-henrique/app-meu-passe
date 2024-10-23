import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const StepsScreen = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <View style={{ backgroundColor: '#fff', height: '60%' }} />
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
    </Swiper>
  );
};
