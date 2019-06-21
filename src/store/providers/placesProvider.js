import React, { useReducer } from 'react';
import PlacesContext from '../contexts/placesContext';
import placesReducer from '../reducers/placesReducer';

export default props => {

  const initialState = {
    places: [],
    selectedPlace: null
  }
  const placesContextValue = useReducer( placesReducer, initialState )

  return (
    <PlacesContext.Provider value={placesContextValue}>
      { props.children }
    </PlacesContext.Provider>
  )
}