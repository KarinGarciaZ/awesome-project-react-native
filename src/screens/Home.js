import React, { useState, useContext } from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Items from '../components/Items/items';
import { Colors } from '../assets/staticStyles';
import AddPlaces from '../components/Form/AddPlaces';
import Header from '../components/Shared/Header';
import ContextPlaces from '../store/contexts/placesContext';
import { addPlace } from '../store/actions/placesActions';

export default Home = props => {

  let [search, setSearch] = useState('');  
  const [itemsShown, showItems] = useState(false);
  let [state, dispatch] = useContext(ContextPlaces);
  let [removeAnim, setRemoveAnim] = useState( new Animated.Value(1) )
  let [placesAnim, setPlacesAnim] = useState( new Animated.Value(0) )

  const onAddPlace = () => {
    if( search.trim() !== '' )
      dispatch(addPlace(search))
  }

  const onPressMoreAboutUs = () => {
    props.navigation.navigate('About', { name:'karin' })
  }

  const showItemsAndHideButtonTwo = () => {
    Animated.timing( placesAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true
    } ).start()
  } 

  const showItemsAndHideButton = () => {
    Animated.timing(removeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true
    }).start(() => {
      showItems(true)
      showItemsAndHideButtonTwo()
    });
  } 

  let buttonShow = (
    <Animated.View style={{transform: [ { scale: removeAnim } ] }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={ () => showItemsAndHideButton() } style={{marginTop: 20}}>
          <View style={{ ...styles.buttonShow }}>
            <Text style={{ color: Colors.garyDark, fontSize: 23, fontWeight: '400'}}>Show Items</Text>  
          </View> 
        </TouchableOpacity>
      </View>    
    </Animated.View>
  )

  return (
    <View style={styles.container}>
      <Header>
        <Icon size={25} name="instagram" color='black' />
        <View style={styles.searchInputContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" value={search} onChangeText={ value => setSearch(value) } />
          <TouchableOpacity onPress={onAddPlace}>
            <Icon size={20} name="search" color='#444' style={styles.searchIcon}/>
          </TouchableOpacity>
        </View>        
        <Icon size={20} name="ellipsis-v" color='black' style={{paddingLeft: 15, paddingRight: 5}}/>
      </Header>
      { itemsShown?  
        <Animated.View style={{ opacity: placesAnim, width: '100%' }}>
          <Items {...props}/>
        </Animated.View>:
      buttonShow
      }
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
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 20,    
    paddingLeft: 20,
    backgroundColor: '#EEE',
    paddingTop: 5,
    paddingBottom: 5,    
    borderRadius: 50
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',    
    paddingTop: 3,
    paddingBottom: 3,
  },
  searchIcon: {
    marginRight: 10
  },
  buttonShow: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: Colors.orangered,      
    borderRadius: 30,
    borderWidth: 2,
  },
});
