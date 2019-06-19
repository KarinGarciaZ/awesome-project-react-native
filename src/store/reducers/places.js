import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_PLACE:      
      return {
        ...state, 
        places: state.places.push({
          key: Math.random(), 
          value: action.payload, 
          image: {
            uri:'https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg'
          }
        })
      };
    case DELETE_PLACE:      
      return {
        ...state, 
        places: state.places.filter(item => item.key !== state.selectedPlace.key ),
        selectedPlace: null
      };
    case SELECT_PLACE:      
      return {
        ...state, 
        selectedPlace: state.places.find( item => item.key === action.payload )
      };
    case DESELECT_PLACE:      
      return {
        ...state, 
        selectedPlace: null
      };
    default:
      return state;
  }
}

export default reducer