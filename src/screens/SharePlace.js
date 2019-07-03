import React, { useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, Button, Image, TextInput, Text } from 'react-native';

import ContextPlaces from '../store/contexts/placesContext';
import { addPlace } from '../store/actions/placesActions';
import { Colors } from '../assets/staticStyles';

import Header from '../components/Shared/Header';

const Shareplace = props => {

  const [placename, setPlaceName] = useState('');
  const [state, dispatch] = useContext(ContextPlaces);

  const onAddPlace = () => {
    if( placename.trim() !== '' )
      dispatch(addPlace(placename))
    props.navigation.navigate('Home')
  }

  let image = {
    uri: 'https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg'
  }

  return(
    <View>
      <Header>
        <View></View>
        <Text style={{fontSize: 20}}>Share Place</Text>
        <View></View>
      </Header>
      <ScrollView>
        <View style={ styles.container } >
          <View style={ styles.imageContainer }>
            <Text style={styles.text}>Imagen</Text>
            <Image style={styles.image} source={image}/>
          </View>       

          <Button title='Add Image'/>

          <View style={ styles.imageContainer }>
            <Text style={styles.text}>Mapa</Text>
          </View>   

          <Button title='Add Place'/>

          <TextInput 
            placeholder='Place name...'
            style={styles.input} 
            value={placename} 
            onChangeText={ value => setPlaceName(value) }/>

          <Button onPress={onAddPlace} title='Share Place'/>
        </View>
      </ScrollView>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 60
  },
  imageContainer: {
    width: '100%',
    backgroundColor: Colors.grayBackground,
    height: 400,
    marginTop: 30,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  input: {
    borderColor: Colors.grayBackground,
    borderWidth: 2,
    borderRadius: 3,
    width: '90%',
    marginTop: 30,
    marginBottom: 15,
    padding: 0,
    paddingLeft: 10,
  },
  text: {
    padding: 10,
    fontSize: 24,
  }
})

export default Shareplace;