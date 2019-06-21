import React, {useState, useContext } from 'react';
import PlacesContext from '../../store/contexts/placesContext';
import { addPlace } from '../../store/actions/placesActions';
import { View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default AddPlaces = () => {

  let [inputVal, setInputVal] = useState('')
  const [ state, dispatch ] = useContext(PlacesContext)
  
  const clearValue = () => {
    if ( inputVal.trim() !== '' )
      dispatch(addPlace(inputVal))
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
      value={inputVal} 
      onChangeText={(val) => setInputVal(val)} 
      style={styles.placeInput}
      placeholder='A nice'
      />
      <TouchableOpacity onPress={clearValue}>
        <View style={styles.placeButton}>
          <Icon size={25} name="save" color='white' />
        </View>
      </TouchableOpacity>    
    </View> 
  )
}

const styles = StyleSheet.create({  
  inputContainer : {    
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  placeInput: {
    backgroundColor: '#EEE',
    paddingLeft: 10,
    flex: 1,
    margin: 10,
    borderRadius: 5
  },
  placeButton: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 100
  }
})