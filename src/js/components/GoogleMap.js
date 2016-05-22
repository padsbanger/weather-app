import React from 'react'
import { GoogleMapLoader, GoogleMap} from "react-google-maps";

export default (props) => {
  console.log(props)
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "100px",
              width: "100px"
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: props.lat, lng: props.lon }}
            onClick={props.onMapClick}
          >
          </GoogleMap>
        }
      />
    </section>
  )
}
