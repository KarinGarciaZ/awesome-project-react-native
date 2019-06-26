import React from 'react';
import AppContainer from './navigation';
import PlacesProvider from './src/store/providers/placesProvider';

export default App = () => {

  return (
    <PlacesProvider>
      <AppContainer />
    </PlacesProvider>
  );
}
