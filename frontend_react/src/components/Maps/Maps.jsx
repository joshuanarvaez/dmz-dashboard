import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Maps.scss';
import { urlFor, client } from '../../client';

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(() => {
    const query = '*[_type == "map"]{name, imgUrl}';

    client.fetch(query)
      .then((data) => {
        console.log(data);
        setMaps(data);
        setSelectedMap(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handleMapClick = (map) => {
    setSelectedMap(map);
  };

  return (
    <div className="app__dashboard-map">
      {maps.map((map) => (
        <button key={map._id} onClick={() => handleMapClick(map)}>
          {map.name}
        </button>
      ))}
      {selectedMap && selectedMap.imgUrl && (
        <div
          className="app__dashboard-map__image"
          style={{ backgroundImage: `url(${urlFor(selectedMap.imgUrl)})` }}
        />
      )}
    </div>
  )
}

export default Maps;
