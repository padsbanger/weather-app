import React from 'react'
import { GoogleMapLoader, GoogleMap} from "react-google-maps";

export default (props) => {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={props.onMapClick}
          >
          </GoogleMap>
        }
      />
    </section>
  )
}
