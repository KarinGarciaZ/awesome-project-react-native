import React, { useContext, useEffect } from 'react'
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import PlaceContext from '../store/contexts/placesContext';
import { deletePlace, deselectPlace } from '../store/actions/placesActions';

const placeDetail = props => {
  
  const [state, dispatch] = useContext(PlaceContext)

  const onDelete = () => {
    dispatch(deletePlace(state.selectedPlace.key))
  }

  let screen = null

  if( state.selectedPlace )  
    screen = (    
      <View style={styles.container}>
        <Image source={state.selectedPlace.image} style={styles.image}/>
        <Text style={styles.title}>{state.selectedPlace.value}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onDelete} style={styles.button}>
            <Icon color='red' size={30} name="trash" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'blue'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  else
    props.navigation.navigate('Home')
      
  return screen;
}

const styles = StyleSheet.create({
  container: {
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
  buttonContainer: {
    flexDirection: 'row',   
    marginTop: 15, 
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',    
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
  }
})

export default placeDetail