import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const BasicButton = props => {
  return (
    <View style={{...styles.buttonView, ...props.style}}>
      <Button {...props} color={props.style.color}/>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonView: {
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowOffset: { width: 4, height: 7 },
    shadowRadius: 5
  }
});

export default BasicButton;
