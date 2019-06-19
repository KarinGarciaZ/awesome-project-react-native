import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Items from './src/components/Items/items';
import AddPlaces from './src/components/Form/AddPlaces';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';


const App = () => {

  let [items, setItems] = useState([])
  let [showModal, setShowModal] = useState(null)

  const onClickButton = (value) => {
    let temp = [...items];
    temp.push({
      key: Math.random(), 
      value, 
      image: {
        uri:'https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg'
      }
    })
    setItems( temp )
  }

  const onPressItem = (key) => {
    let temp = [...items];
    let showModalEl = temp.find(item => item.key === key )
    setShowModal( showModalEl )
  }

  const onDeleteItem = (key) => {
    let temp = [...items];
    temp = temp.filter(item => item.key !== key )
    setItems( [...temp] )
    setShowModal( null )
  }

  const onCloseModal = () => {
    setShowModal( null )
  }
  
  return (
    <View style={styles.container}>
      <PlaceDetail itemToShow={showModal} onClose={onCloseModal} onDelete={onDeleteItem} />
      <AddPlaces clicked={onClickButton} />
      <Items items={items} pressItem={onPressItem}></Items>
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

const mapStateToProps = state => {
  
}

export default connect()(App)