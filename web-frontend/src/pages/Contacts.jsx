import React from 'react';
import Header from '../components/common/Header';
import imgContacts from '../components/common/img/contacts.jpg';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {MdCall } from 'react-icons/md';
import {FaFax}from 'react-icons/fa';
require('dotenv').config();
const {MAP_KEY} = process.env;

const Contacts = ({ google, store, index, InfoWindow }) => {
  const mapStyles = {
    width: '700px',
    height: '300px',
  };
  return (
    <div>
      <Header />
      <img src={imgContacts} />
      <br/>
      서울시 영등포구 양평로22길 21 코오롱디지털타워 605호 　
      <br/>
      <br/>
      <MdCall /> 02-715-3700
      <br/>
      <br/>
      <FaFax /> 02-715-3701
      <br/>
      <br/>
      <Map
        google={google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 37.539784, lng: 126.894625 }}
      >
        <Marker position={{ lat: 37.539784, lng: 126.894625 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCLI_K2Eo2cdlCrlsLmPpLq1mHD7Z7gTuE',
})(Contacts);
