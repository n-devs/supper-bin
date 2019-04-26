import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import DenseAppBar from './DenseAppBar'
import MenuButton from './MenuButton'
import LocationSearchingButton from './LocationSearchingButton'
import {template} from './MarkerIcons';
import icon from '../images/icon.jpg'
export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      pos: {
        lat: null,
        lng: null
      },
    };

    // this.icon = this.icon.bind(this)
  }

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

  geoLoaction = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }

    console.log('func geoLoaction ok!');

  };

  showPosition = (position) => {
    this.setState({
      pos: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },

    })
  }



  render() {
    console.log(this.props.google)

    const {google} = this.props

    const template = [
      '<?xml version="1.0"?>',
      '<svg width="50px" height="50px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
      '<image xlink:href="'+icon+'" height="50" width="50"/>',
      '</svg>'
  ].join('\n')

    const svg = template.replace('{{ color }}', '#800');

    return (
      <React.Fragment>
        <DenseAppBar />
        <Map google={google}
          center={this.state.pos}
          disableDefaultUI={true}
          onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
            name={'Current location'}
            position={this.state.pos}
            icon={{ url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), scaledSize: new google.maps.Size(50, 50) }}
            markerLa

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
        <MenuButton />
        <LocationSearchingButton onClick={this.geoLoaction} />
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC0sxMyj3-daWXmS8fwrAJrNpUuq9L19fI')
})(MapContainer)