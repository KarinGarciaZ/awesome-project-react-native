import React, { useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, Button, Image, TextInput, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import ContextPlaces from '../store/contexts/placesContext';
import { addPlace } from '../store/actions/placesActions';
import { Colors } from '../assets/staticStyles';

import Header from '../components/Shared/Header';

const Shareplace = props => {

  const [placename, setPlaceName] = useState('');
  const [locationChosen, setLocationChosen] = useState(false);
  const [state, dispatch] = useContext(ContextPlaces);
  const [location, setLocation] = useState({
    latitude: 37.7900352,
    longitude: -122.4013726,
    latitudeDelta: 0.0122,
    longitudeDelta: 
      Dimensions.get('window').width / 
      Dimensions.get('window').height * 
      0.0122,
  })

  const onAddPlace = () => {
    if( placename.trim() !== '' )
      dispatch(addPlace({placename, location}))
    //props.navigation.navigate('Home')
  }

  const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition( 
      pos => {
        pickLocationHandler({
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        })
      },
      err => {
        console.log(err);
        alert('There was a problem getting your position, pickit manually.')
      }
    )
  }

  const pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    map.animateToRegion({
      ...location,
      latitude: coords.latitude,
      longitude: coords.longitude
    })
    setLocation({
      ...location,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    setLocationChosen(true);
  }

  let image = {
    uri: 'https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg'
  }

  let marker = null;

  if( locationChosen )
    marker = <Marker coordinate={location}/>

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
            <MapView 
              initialRegion={location} 
              style={{width: '100%', flex:1}} 
              onPress={pickLocationHandler}
              ref={ref => map = ref }
              >
              {marker}
            </MapView>
          </View>   

          <Button title='Get Location' onPress={getLocationHandler}/>

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