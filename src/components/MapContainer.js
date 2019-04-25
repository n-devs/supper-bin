import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    pos: {
      lat: null,
      lng: null
    },
  };

  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          pos: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })

  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    console.log(this.props.google)
    return (
      <Map google={this.props.google}
      center={this.state.pos}
      disableDefaultUI={true}
        onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'}
          position={this.state.pos}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}

        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC0sxMyj3-daWXmS8fwrAJrNpUuq9L19fI')
})(MapContainer)