import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Shared/Header';

const Settings = props => {

  const goBack = () => {
    props.navigation.goBack();
  }

  return (
    <View>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon size={20} name="arrow-left" color='#444' style={styles.icon}/>
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>Settings</Text>
        <View></View>
      </Header>
      <Text>This is the settings screen</Text>
    </View>  
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 5,
    paddingRight: 10,
  }
})

export default Settings;