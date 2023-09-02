import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export function MyMap(props) {
  const mapStyles = {
    width: '100%',
    height: '500px',
  };

    return (
      <Map
        google={props.google}
        style={mapStyles}
        initialCenter={{
          lat: -5.890935,
          lng: -35.162318,
        }}
        zoom={15}
      >
        <Marker
          position={{
            lat: -5.890935,
            lng: -35.162318,
          }}
          title="Rua Praia de Jacuma, 9016 - Ponta Negra, Natal - RN"
        />
      </Map>
    );
}


export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_HERE',
})(MyMap);
