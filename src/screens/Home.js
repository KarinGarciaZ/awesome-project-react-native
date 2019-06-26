import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Items from '../components/Items/items';
import AddPlaces from '../components/Form/AddPlaces';
import Header from '../components/Shared/Header';

export default Home = props => {

  const onPressMoreAboutUs = () => {
    props.navigation.navigate('About', { name:'karin' })
  }

  return (
    <View style={styles.container}>
      <Header>
        <Icon size={25} name="instagram" color='black' />
        <Text>Home</Text>
        <Icon size={20} name="ellipsis-v" color='black' />
      </Header>
      <AddPlaces />
      <Items {...props}/>
      <Button title='ccc' onPress={() => props.navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
