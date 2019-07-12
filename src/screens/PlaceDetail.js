import React, { useContext, useEffect, useState } from 'react'
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';

import PlaceContext from '../store/contexts/placesContext';
import { deletePlace, deselectPlace } from '../store/actions/placesActions';
import { Colors } from '../assets/staticStyles';
import Header from '../components/Shared/Header';

const placeDetail = props => {
  
  const [{selectedPlace}, dispatch] = useContext(PlaceContext);
  const [orientation, setOrientation] = useState(Dimensions.get('window').height > 500? 'Portrait': 'Landscape')

  useEffect(() => {
    console.log('render created')
    Dimensions.addEventListener('change', onCreateOrientationListener)

    return () => {
      Dimensions.removeEventListener('change', onCreateOrientationListener)
      console.log('event removed')
    }
  }, [])

  onCreateOrientationListener = ({window}) => {
    window.height > 500? setOrientation('Portrait'): setOrientation('Landscape'); 
    console.log('event created')
  }

  const onDelete = () => {
    dispatch(deletePlace(selectedPlace.key))
  }

  const onBack = () => {
    props.navigation.goBack()
  }

  let screen = null

  if( selectedPlace )  
    screen = (    
      <View>
        <Header>
          <TouchableOpacity onPress={onBack}>
            <Icon size={20} name="arrow-left" color='#444'/>
          </TouchableOpacity>
          <Text>Details</Text>
          <View></View>
        </Header>
        <ScrollView>
          <View style={orientation === 'Landscape'? styles.containerLandscape: styles.containerPortrait}>
            <Image source={selectedPlace.image} style={orientation === 'Landscape'? styles.imageLandscape: styles.imagePortrait}/>
            <View style={orientation === 'Landscape'? {flex:2}: {}}>
              <Text style={styles.title}>{selectedPlace.value}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onDelete} style={styles.button}>
                  <Icon color='red' size={30} name="trash" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onBack} >
                  <Text style={{color: 'blue'}}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
            <MapView style={styles.map} initialRegion={selectedPlace.location}>
              <Marker coordinate={selectedPlace.location} />
            </MapView>
          </View>
        </ScrollView>        
      </View>
      
    )
  else
    props.navigation.navigate('Home')
      
  return screen;
}

const styles = StyleSheet.create({
  containerPortrait: {
    margin: 15, 
    flex: 1,   
  },
  containerLandscape: {
    margin: 15,
    flexDirection: 'row',
  },
  imagePortrait: {
    height: 300,
    width: '100%'
  },
  imageLandscape: {
    height: 300,
    flex: 3,
  },
  title: {
    fontSize: 24,
    marginTop: 15,
    fontWeight: 'bold',    
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',   
    marginTop: 15, 
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: Colors.grayBackground,    
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
  },
  map: {
    width: '100%', 
    height: 250,
    marginTop: 15,
    marginBottom: 50,
  }
})

export default placeDetail