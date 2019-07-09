import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

import { Colors } from '../../../assets/staticStyles';

const ButtonAuth = props => {
  return(
    <TouchableOpacity onPress={ props.pressed } style={{marginTop: 20}} disabled={!props.able}>
      <View style={{ ...styles.buttonForm }}>
        <Text style={{ color: Colors.grayOne, fontSize: 23, fontWeight: '400'}}>{props.text}</Text>  
      </View> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  inputContainer: {
    
  },
  buttonForm: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 10, 
    paddingBottom: 10,
    borderColor: Colors.grayOne,      
    backgroundColor: Colors.grayTransparent,
    borderRadius: 3,
    borderWidth: 2,
    minWidth: '80%',
  }
})

export default ButtonAuth;