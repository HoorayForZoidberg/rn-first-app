import React, { useState } from 'react';
import {  StyleSheet,
          View,
          Text,
          Modal } from 'react-native';
import BasicButton from './BasicButton';
import BasicModal from './BasicModal';
import Colors from '../constants/colors'

const MainScreen = props => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const modalVisibleHandler = () => {
    setModalVisible(!modalVisible);
    console.log('activated?')
  }

  const modalTextHandler = text => {
    setModalText(text)
  }

  return (
      <View style={{...styles.mainBody, ...props.style}}>
        <BasicModal visible={modalVisible}>
          <Text>
            {modalText}
          </Text>
          <BasicButton title="OK" style={styles.buttonStyle} onPress={modalVisibleHandler}/>
        </BasicModal>
        <Text style={styles.text}>
          Que souhaitez vous faire?
        </Text>
        <BasicButton title="Generer un justificatif" style={styles.buttonStyle} onPress={() => {modalVisibleHandler(), modalTextHandler('Justificatif genere!')}}/>
        <BasicButton title="Afficher mon justificatif" style={styles.buttonStyle} onPress={() => {modalVisibleHandler(), modalTextHandler('Jusitficatif affiche!')}}/>
        <BasicButton title="Obtenir le laissez-passer A-38" style={styles.buttonStyle} onPress={() => {modalVisibleHandler(), modalTextHandler('Il vous faut le formulaire bleu!')}}/>
      </View>
  )
}

const styles = StyleSheet.create({
  mainBody: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 100
  },
  text:{
    fontFamily: 'Avenir-Light',
    fontSize: 20
  },
  buttonStyle: {
    width: '80%',
    minHeight: 50,
    color: Colors.secondary,
    backgroundColor: Colors.primary
  }
});


export default MainScreen;
