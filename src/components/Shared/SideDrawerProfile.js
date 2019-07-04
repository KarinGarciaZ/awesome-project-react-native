import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation'

import Header from './Header';

const DrawerContent = props => {

  const logOut = () => {
    props.navigation.navigate('Auth')
  }

  return (
    <View style={{flex: 1}}>
      <Header>
        <Text>
          Karin Garcia
        </Text>
      </Header>
      <View style={{flex: 1}}>
        <DrawerItems {...props} />
      </View>
      <TouchableOpacity onPress={logOut}>
        <View style={{padding: 15, backgroundColor: '#DDD'}}>
          <Text>
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DrawerContent;