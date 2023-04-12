import * as React from 'react';

import {useState, useEffect} from "react";
import {render} from 'react-dom';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl
} from 'react-map-gl';

import "mapbox-gl/dist/mapbox-gl.css";
import "../../styles/layouts/modal.sass";
import "../../styles/layouts/searchPanel.sass";
import "../../styles/layouts/login.sass";
import "../../styles/layouts/map.sass";

import Pin from "./Pin";
import PopupContent from "./PopupContent";
import MapsButtons from "./MapsButtons";
import SearchPanel from "../Search/SearchPanel";
import Login from "../Admins/Login";

export default function MapComponent({token}) {

  const [places, setPlaces] = useState([])
  const [popupInfo, setPopupInfo] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    fetch('https://combike.herokuapp.com/locations')
      .then((res) => res.json())
      .then((json) => {
        setPlaces(json)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="main">
      <Map
        initialViewState={{
          latitude: 45.50,
          longitude: -73.58,
          zoom: 13,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={token}
      >
        <GeolocateControl position="bottom-left"/>
        <NavigationControl position="top-right"/>

        {places.map((place, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={place.longitude}
            latitude={place.latitude}
            anchor="bottom"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo(place);
            }}
          >
            <Pin/>
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            onClose={() => setPopupInfo(null)}
          >
            <PopupContent
              address={popupInfo.address}
              bikes={popupInfo.bikes}
              slots={popupInfo.slots}
            />
          </Popup>
        )}
      </Map>

      <MapsButtons
        setOpenSearch={setOpenSearch}
        setOpenLogin={setOpenLogin}
      />

      <SearchPanel
        placesObject={places}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />

      <Login
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
      />

    </div>
  );
}

export function renderToDom(container) {
  render(<MapComponent/>, container);
}
