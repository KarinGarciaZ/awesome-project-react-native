import React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../assets/staticStyles';
import backgroundImage from '../assets/background.jpg';

const SignIn = (props) => {

  const logged = () => {
    props.navigation.navigate('Home')
  }

  return(
    <ImageBackground source={backgroundImage} style={{width: '100%', flex: 1}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>

            <Icon size={50} name="user-plus" style={{color: Colors.grayOne, marginBottom: 10}}/>

            <Text style={{...styles.textForm, marginBottom: 35}}>Create Account</Text>

            <View style={{...styles.inputContainer, marginTop: 15}}>
              <TextInput 
                placeholder="Your first name..." 
                placeholderTextColor={Colors.grayOne} 
                style={styles.inputLogin}/>          
            </View>

            <View style={{...styles.inputContainer, marginTop: 15}}>
              <TextInput 
                placeholder="Your last name..." 
                placeholderTextColor={Colors.grayOne} 
                style={styles.inputLogin}/>          
            </View>

            <View style={{...styles.inputContainer, marginTop: 15}}>
              <TextInput 
                placeholder="Your email address..." 
                placeholderTextColor={Colors.grayOne} 
                style={styles.inputLogin}/>          
            </View> 

            <View style={{...styles.inputContainer, marginTop: 15}}>
              <TextInput 
                placeholder="Password..."             
                placeholderTextColor={Colors.grayOne} 
                secureTextEntry={true}
                style={styles.inputLogin}/>          
            </View> 

            <View style={{...styles.inputContainer, marginTop: 15}}>
              <TextInput 
                placeholder="Confirm password..."             
                placeholderTextColor={Colors.grayOne} 
                secureTextEntry={true}
                style={styles.inputLogin}/>          
            </View> 

            <TouchableOpacity onPress={ logged } style={{marginTop: 20}}>
              <View style={{ ...styles.inputContainer, marginTop: 20, ...styles.buttonForm }}>
                <Text style={{ color: Colors.grayOne, fontSize: 23, fontWeight: '400'}}>Create Account</Text>  
              </View> 
            </TouchableOpacity>  

          </View>   
        </ScrollView>         
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    minHeight: '100%',
    justifyContent: 'center',
  },
  textForm: {
    color: Colors.grayOne,
    fontSize: 18,
    fontWeight: '300'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.grayOne,     
    backgroundColor: '#11111155',
    minWidth: '85%',
    borderRadius: 3
  },
  inputLogin: {
    flex: 1,
    color: Colors.grayOne,    
    paddingLeft: 15,
  },
  loginIcon: {
    color: Colors.grayOne,
    paddingRight: 10,
    minWidth: 30,
  },
  buttonForm: {
    paddingTop: 10, 
    paddingBottom: 10,
    borderWidth: 2,
    minWidth: '60%',
    backgroundColor: '#11111111'
  },
})

export default SignIn;