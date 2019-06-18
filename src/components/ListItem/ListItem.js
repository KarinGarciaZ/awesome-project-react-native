import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback,
  Image
} from 'react-native';

const listItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.placeImage}/>
      <Text style={styles.placeName}>
        {props.placeName}
      </Text>
    </View>
  </TouchableWithoutFeedback>
  
)

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