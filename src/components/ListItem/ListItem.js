import React, { useContext } from 'react';
import PlacesContext from '../../store/contexts/placesContext';
import { selectPlace } from '../../store/actions/placesActions';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback,
  Image
} from 'react-native';

const listItem = props => {

  let [ status, dispatch ] = useContext(PlacesContext)

  let onSelect = () => {
    dispatch(selectPlace(props.id))
    props.navigation.navigate('PlaceDetail')
  }
  
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.listItem}>
        <Image source={props.placeImage} style={styles.placeImage}/>
        <Text style={styles.placeName}>
          {props.placeName} - {props.id}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 4,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeName: {
    color: 'black',
    flex: 1,
    marginLeft: 10
  },
  placeImage: {
    width: 50,
    height: 50,
  }
})

export default listItem;