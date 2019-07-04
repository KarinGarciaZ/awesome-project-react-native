import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Shared/Header';

const Profile = props => {
  return(
    <View>
      <Header>
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Icon size={20} name="bars" color='black' style={{paddingLeft: 5, paddingRight: 10}}/>
        </TouchableOpacity>        
      </Header>
    </View>
  )
}

export default Profile;