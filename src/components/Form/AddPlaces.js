import React, {useState, useContext } from 'react';
import PlacesContext from '../../store/contexts/places';
import {View, 
  StyleSheet, 
  Button, 
  TextInput
} from 'react-native'

export default AddPlaces = () => {

  let [inputVal, setInputVal] = useState('')
  const [ state, dispatch ] = useContext(PlacesContext)
  
  const clearValue = () => {
    if ( inputVal.trim() !== '' )
      dispatch({type: 'ADD_PLACE', payload: inputVal})
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
      value={inputVal} 
      onChangeText={(val) => setInputVal(val)} 
      style={styles.placeInput}
      placeholder='A nice'
      />
      <Button
        onPress={clearValue}
        title="Learn More"
        color="#841584"
        style={styles.placeButton}
      />        
    </View> 
  )
}

const styles = StyleSheet.create({  
  inputContainer : {    
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around'
  },
  placeInput: {
    backgroundColor: '#EEE',
    paddingLeft: 10,
    flex: 3,
    margin: 10,
  },
  placeButton: {
    flex: 1
  }
})