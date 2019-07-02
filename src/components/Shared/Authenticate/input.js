import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../../../assets/staticStyles';

const Input = props => {
  return(
    <View style={{...styles.inputContainer, marginTop: 15}}>
      <Icon size={25} name={props.iconName} style={styles.loginIcon}/>
      <TextInput 
        placeholder={props.placeholder}             
        placeholderTextColor={Colors.grayOne} 
        secureTextEntry={true}
        style={styles.inputLogin}/>          
    </View>
  )
}

const styles = StyleSheet.create({  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.grayOne,    
    backgroundColor: '#11111155',
    borderRadius: 3
  },
  inputLogin: {
    flex: 1,
    color: Colors.grayOne,    
    borderLeftWidth: 1,
    borderColor: Colors.grayOne,
    paddingLeft: 15,
  },
  loginIcon: {
    color: Colors.grayOne,
    minWidth: 35,
  },
})

export default Input;