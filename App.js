import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './components/MainScreen';
import Header from './components/Header';
import Colors from './constants/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <MainScreen style={styles.mainScreen}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainScreen: {
    flex: 5
  },
  header: {
    flex: 1
  }
});
