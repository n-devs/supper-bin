import React, { Component } from 'react';
import DenseAppBar from './components/DenseAppBar'
import MenuButton from './components/MenuButton'
import MapContainer from './components/MapContainer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <DenseAppBar />
        <MapContainer />
      
        <MenuButton />
      </React.Fragment>

    );
  }
}

export default App;
