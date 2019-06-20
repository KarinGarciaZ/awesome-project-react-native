import React, { useState, useReducer } from 'react';
import { StyleSheet, View, } from 'react-native';
import Items from './src/components/Items/items';
import AddPlaces from './src/components/Form/AddPlaces';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import PlacesProvider from './src/store/providers/placesProvider';

export default App = () => {

  return (
    <View style={styles.container}>
      <PlacesProvider>
        <PlaceDetail />
        <AddPlaces />
        <Items />
      </PlacesProvider>
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
