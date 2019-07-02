import React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../components/Shared/Authenticate/input';
import { Colors } from '../assets/staticStyles';
import backgroundImage from '../assets/background.jpg';
import ButtonAuth from '../components/Shared/Authenticate/button';

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

            <Input iconName="user" placeholder="Your first name..."/>
            <Input iconName="user" placeholder="Your last name..."/>
            <Input iconName="envelope" placeholder="Your email address..."/>
            <Input iconName="lock" placeholder="Password..."/>
            <Input iconName="lock" placeholder="Confirm password..."/>      

            <ButtonAuth text="Sign in" pressed={logged}/>

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
    width: '100%',
  },
  formContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    minHeight: '100%',    
    width: '100%',
    justifyContent: 'center',
  },
  textForm: {
    color: Colors.grayOne,
    fontSize: 18,
    fontWeight: '300'
  },
  buttonForm: {
    paddingTop: 10, 
    paddingBottom: 10,
    borderWidth: 2,
    minWidth: '80%',
    backgroundColor: '#11111111'
  },
})

export default SignIn;