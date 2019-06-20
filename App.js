import React, { useState, useReducer } from 'react';
import { StyleSheet, View, } from 'react-native';
import Items from './src/components/Items/items';
import AddPlaces from './src/components/Form/AddPlaces';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import PlacesContext from './src/store/contexts/places';
import placesReducer from './src/store/reducers/places';

export default App = () => {

  const initialState = {
    places: [],
    selectedPlace: null
  }
  const placesContextValue = useReducer( placesReducer, initialState )

  return (
    <View style={styles.container}>
      <PlacesContext.Provider value={placesContextValue}>
        <PlaceDetail />
        <AddPlaces />
        <Items />
      </PlacesContext.Provider>
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
