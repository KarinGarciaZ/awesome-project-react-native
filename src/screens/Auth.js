import React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../assets/staticStyles';
import backgroundImage from '../assets/background.jpg';
import Input from '../components/Shared/Authenticate/input';
import ButtonAuth from '../components/Shared/Authenticate/button';

const Auth = (props) => {

  const logged = () => {
    props.navigation.navigate('Home')
  }

  const toSign = () => {
    props.navigation.navigate('SignIn')
  }

  return(
    <ImageBackground source={backgroundImage} style={{width: '100%', flex: 1}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>

            <Icon size={100} name="instagram" style={{color: Colors.grayOne, marginBottom: 30}}/>

            <Text style={{...styles.textForm, marginBottom: 35}}>Get connected with the best app for travelers</Text>

            <Input iconName="envelope" placeholder="Your email address..."/>

            <Input iconName="lock" placeholder="Password..."/>

            <ButtonAuth text="Login" pressed={logged} able={true}/> 

            <View style={styles.separator}>    
              <View style={styles.separatorLine} />      
              <Text style={{ color: Colors.grayOne, fontSize: 16, fontWeight: '400'}}>You don't have an account?</Text>
              <View style={styles.separatorLine} />     
            </View>  

            <ButtonAuth text="Sign in" pressed={toSign} able={true}/>

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
    backgroundColor: 'transparent',    
    width: '100%',
  },
  formContainer: {
    backgroundColor: 'transparent',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textForm: {
    color: Colors.grayOne,
    fontSize: 18,
    fontWeight: '300'
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 30,
    minWidth: '80%'
  },
  separatorLine: {
    flex: 1,
    borderColor: Colors.grayOne,
    borderBottomWidth: 1,   
    maxHeight: 0,
    marginLeft: 5,
    marginRight: 5
  }
})

export default Auth;