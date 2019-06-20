import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import ListItem from '../ListItem/ListItem'
import PlacesContext from '../../store/contexts/placesContext';

export default items = props => {

  const [state, dispatch] = useContext(PlacesContext)

  let places = [...state.places]
  places = places.map( place => (<Text>{place.value}</Text>) )

  return (
    <FlatList 
      style={styles.containerWrapper}
      data={state.places}
      renderItem={(info) => (
        <ListItem 
          placeName={info.item.value}
          placeImage={info.item.image}    
          id={info.item.key}      
        />
      )}
    />
  );
}

const styles = StyleSheet.create({  
  containerWrapper: {
    width: '100%',
  },
})
