import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import DenseAppBar from './DenseAppBar'
import MenuButton from './MenuButton'
import LocationSearchingButton from './LocationSearchingButton'
import Avatar from '@material-ui/core/Avatar';
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
    return (
      <React.Fragment>
        <DenseAppBar />
        <Map google={this.props.google}
          center={this.state.pos}
          disableDefaultUI={true}
          onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
            name={'Current location'}
            position={this.state.pos}
            icon={{
              path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
              fillColor: '#00CCBB',
              fillOpacity: 1,
              strokeColor: '',
              strokeWeight: 0,
              icon: { icon }
            }}

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