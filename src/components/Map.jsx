import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Image from 'next/image';

const Map = ({item}) => {

  const icon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png', iconSize:new L.point(30, 30), iconAnchor: "pinAnchor" ,className:"object-contain" });
 
  const position = [52.49873,-1.90269];

  // Check if the position is a valid LatLng array
  const isValidPosition = Array.isArray(position) && position.length === 2 && !isNaN(position[0]) && !isNaN(position[1]);

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {

    setLat(51.505);
    setLng(-0.09);
  }, [lat,lng]);

  if (lat === null || lng === null) {
      return <div>Loading...</div>;
  }

  if (isValidPosition) {
    return (
      <div className="w-full h-[80vh]  justify-start flex items-start  -z-50">
        <MapContainer center={[lat,lng]} zoom={7} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat,lng]} icon={icon}>
            <Popup>
            <div className="flex gap-1 w-full">
              <Image src={item?.image[0]} alt='' width={50} height={50} className='object-cover' />
              <div className="">
                  <h2>{item.title} </h2>
                  <span>{item.bedroom}bedroom </span>
                  <b>$ {item.price} </b> 
              </div>
          </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

};

export default Map;