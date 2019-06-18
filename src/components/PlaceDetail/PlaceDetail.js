import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native'

const placeDetail = props => {

  let modal = null;
  if ( props.itemToShow )
    modal = (
      <Modal onRequestClose={props.onClose} animationType='slide'>
        <View style={styles.modalContainer}>
          <Image source={props.itemToShow.image} style={styles.image}/>
          <Text style={styles.title}>{props.itemToShow.value}</Text>
          <View>
            <Button title='Delete' color='red' style={styles.button} onPress={() => props.onDelete(props.itemToShow.key)}/>
            <Button title='close' style={styles.button} onPress={props.onClose}/>
          </View>
        </View>
      </Modal>
    )

  return (
    <View>
      { modal }
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 15,
  },
  image: {
    height: 300,
    width: '100%'
  },
  title: {
    fontSize: 24,
    marginTop: 15,
    fontWeight: 'bold',    
    alignSelf: 'center',
  },
  button: {
    marginTop: 15,
  }
})

export default placeDetail