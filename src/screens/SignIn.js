import React, { useState } from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../components/Shared/Authenticate/input';
import { Colors } from '../assets/staticStyles';
import backgroundImage from '../assets/background.jpg';
import ButtonAuth from '../components/Shared/Authenticate/button';

const SignIn = (props) => {

  let [ formState, setFormState ] = useState({
    controls: {
      firstname: {
        value: '',
        iconName:'user',
        placeholder:'Your first name...',
        valid: false,
        type: 'text',
        validation: {
          required: true
        }
      },
      lastname: {
        value: '',
        iconName:'user',
        placeholder:'Your last name...',
        valid: false,
        type: 'text',
        validation: {
          required: true
        }
      },
      email: {
        value: '',
        iconName:'envelope',
        placeholder:'Your email address...',
        valid: false,
        type: 'text',
        validation: {
          isEmail: true
        }
      },
      password: {
        value: '',
        iconName:'lock',
        placeholder:'Password...',
        valid: false,
        type: 'password',
        validation: {
          minLength: 6,
          maxLength: 12
        }
      },
      confirmPassword: {
        value: '',
        iconName:'lock',
        placeholder:'Confirm password...',
        valid: false,
        type: 'password',
        validation: {
          minLength: 6,          
          maxLength: 12,
          equalTo: 'password'
        }
      }
    },
    valid: false
  })

  const logged = () => {
    props.navigation.navigate('Home')
  }

  const validateField = ( key, control ) => {

    let isValid = 0;

    if( control.validation.required ) {
      if( control.value === '' )
        isValid++;
    }

    if( control.validation.minLength ) {
      if( control.value.length < 6 )
        isValid++;
    }

    if( control.validation.minLength ) {
      if( control.value.length > 12 )
        isValid++;
    }

    if( control.validation.isEmail ) {
      let re = /\S+@\S+\.\S+/;
      if( !re.test(control.value) )
        isValid++;
    }

    if( control.validation.equalTo ) {
      if( control.value !== formState.controls[control.validation.equalTo].value )
        isValid++;
    }

    return !isValid;
  }

  const validateForm = ( formCopy ) => {
    
    let formValid = true;

    for( let key in formCopy.controls ) {      
      if (!formCopy.controls[key].valid)
        formValid = false;
    }

    return formValid;
  }

  const onChangeValue = ( key, value ) => {
    let formStateCopy = { ...formState }    
    formStateCopy.controls[key].value = value;

    formStateCopy.controls[key].valid = validateField( key, formStateCopy.controls[key] )
    formStateCopy.valid = validateForm(formStateCopy)

    setFormState( formStateCopy )
  }

  let controls = []
  for( let key in formState.controls ) {
    controls.push({ key, control: formState.controls[key] })
  }

  let inputs = controls.map( element => {
    return <Input 
      iconName={element.control.iconName} 
      placeholder={element.control.placeholder} 
      value={element.control.value} 
      valueChanged={ ( value ) => onChangeValue( element.key, value ) }
      isPassword={element.control.type === 'password'}
      key={element.key}
      valid={element.control.valid}
    />
  })

  return(
    <ImageBackground source={backgroundImage} style={{width: '100%', flex: 1}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>

            <Icon size={50} name="user-plus" style={{color: Colors.grayOne, marginBottom: 10}}/>

            <Text style={{...styles.textForm, marginBottom: 35}}>Create Account</Text>

            {inputs}   

            <ButtonAuth text="Sign in" pressed={logged} able={formState.valid}/>

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
})

export default SignIn;