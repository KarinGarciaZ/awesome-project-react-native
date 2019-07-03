import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../../../assets/staticStyles';

const Input = props => {
  return(
    <View style={{...styles.inputContainer, marginTop: 15}}>
      <View style={styles.iconContainer}>
        <Icon size={25} name={props.iconName} style={styles.icon}/>
      </View>
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
    borderWidth: 1,
    borderColor: Colors.grayOne,    
    backgroundColor: Colors.grayTransparent2,
    borderRadius: 3
  },
  inputLogin: {
    flex: 1,
    color: Colors.grayOne,    
    borderLeftWidth: 1,
    borderColor: Colors.grayOne,
    paddingLeft: 15,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 45,
  },
  icon: {
    color: Colors.grayOne,
  },
})

export default Input;