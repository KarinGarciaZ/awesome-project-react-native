import React, {useContext} from 'react'
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native'
import PlaceContext from '../../store/contexts/placesContext';
import { deletePlace, deselectPlace } from '../../store/actions/placesActions';

const placeDetail = props => {

  const [state, dispatch] = useContext(PlaceContext)

  const onDelete = () => {
    dispatch(deletePlace(state.selectedPlace.key))
  }

  const onClose = () => {
    dispatch(deselectPlace())
  }

  let modal = null;
  if ( state.selectedPlace )
    modal = (
      <Modal onRequestClose={onDelete} animationType='slide'>
        <View style={styles.modalContainer}>
          <Image source={state.selectedPlace.image} style={styles.image}/>
          <Text style={styles.title}>{state.selectedPlace.value}</Text>
          <View>
            <Button title='Delete' color='red' style={styles.button} onPress={onDelete}/>
            <Button title='close' style={styles.button} onPress={onClose}/>
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