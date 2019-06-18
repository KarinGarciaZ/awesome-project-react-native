import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Items from './src/components/Items/items';
import AddPlaces from './src/components/Form/AddPlaces';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
export default App = () => {

  let [inputArr, setInputArr] = useState([])
  let [showModal, setShowModal] = useState(null)

  const onClickButton = (value) => {
    let temp = [...inputArr];
    temp.push({
      key: Math.random(), 
      value, 
      image: {
        uri:'https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg'
      }
    })
    setInputArr( temp )
  }

  const onPressItem = (key) => {
    let temp = [...inputArr];
    let showModalEl = temp.find(item => item.key === key )
    setShowModal( showModalEl )
  }

  const onDeleteItem = (key) => {
    let temp = [...inputArr];
    temp = temp.filter(item => item.key !== key )
    setInputArr( [...temp] )
    setShowModal( null )
  }

  const onCloseModal = () => {
    setShowModal( null )
  }
  
  return (
    <View style={styles.container}>
      <PlaceDetail itemToShow={showModal} onClose={onCloseModal} onDelete={onDeleteItem} />
      <AddPlaces clicked={onClickButton} />
      <Items items={inputArr} pressItem={onPressItem}></Items>
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
