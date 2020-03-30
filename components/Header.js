import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = props => {
  return (
    <View style={{...styles.headerView, ...props.style}}>
      <Text style={styles.headerText}>
        Justif
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default Header;
