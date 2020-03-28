import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          Justif
        </Text>
      </View>
      <View style={styles.mainBody}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 100,
    paddingTop: 22
  },
  headerText: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Avenir-HeavyOblique',
    padding: 5
  },
  mainBody: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
