import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Items from '../components/Items/items';
import AddPlaces from '../components/Form/AddPlaces';
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';
import PlacesProvider from '../store/providers/placesProvider';

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
