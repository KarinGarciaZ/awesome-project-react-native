import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItem from '../ListItem/ListItem'

export default items = props => {
  return (
    <FlatList 
      style={styles.containerWrapper}
      data={props.items}
      renderItem={(info) => (
        <ListItem 
          placeName={info.item.value}
          placeImage={info.item.image}
          onItemPressed={() => props.pressItem(info.item.key)}
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
