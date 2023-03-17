/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './MapSelector.scss';
import { urlFor, client } from '../../client';

const MapSelector = ({ onMapSelect }) => {
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(() => {
    const query = '*[_type == "map"]{name, image}';

    client.fetch(query)
      .then((data) => {
        setMaps(data);
        if (data.length > 0) {
          setSelectedMap(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMapClick = (map) => {
    setSelectedMap(map);
    onMapSelect(map);
  };

  return (
    <div className="map-selector">
      {maps.map((map) => (
        <button
          key={map._id}
          className={`map-selector__button ${map === selectedMap ? 'active' : ''}`}
          onClick={() => handleMapClick(map)}
        >
          {map.title}
        </button>
      ))}
      {selectedMap && selectedMap.image && (
        <div
          className="map-selector__image"
          style={{ backgroundImage: `url(${urlFor(selectedMap.image)})` }}
        />
      )}
    </div>
  );
};

export default MapSelector;