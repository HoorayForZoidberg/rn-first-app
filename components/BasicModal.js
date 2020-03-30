import React from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import BasicButton from './BasicButton'

const BasicModal = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      opacity='0.5'
      visible={false}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
      {...props}
    >
      <View style={styles.modalView}>
        {props.children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '80%',
    minHeight: 50,
    color: "white",
    backgroundColor: "blue"
  },
  modalView: {
    flex: 1,
    minWidth: '60%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.9
  }
})

export default BasicModal
