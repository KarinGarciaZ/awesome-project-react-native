import React, {useState} from 'react'
import {View, 
  StyleSheet, 
  Button, 
  TextInput
} from 'react-native'

export default AddPlaces = props => {

  let [inputVal, setInputVal] = useState('')

  const clearValue = () => {
    if ( inputVal.trim() !== '' )
      props.clicked(inputVal)
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