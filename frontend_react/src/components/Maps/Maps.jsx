import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Maps.scss';
import { urlFor, client } from '../../client';

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(() => {
    const query = '*[_type == "map"]';

    client.fetch(query)
      .then((data) => {
        console.log(data);
        setMaps(data);
        setSelectedMap(data[0]);
      });
  }, [])

  const handleMapClick = (map) => {
    setSelectedMap(map);
  };

  return (
    <div className="app__dashboard-map">
      {maps.map((map) => (
        <button
          key={map._id}
          onClick={() => handleMapClick(map)}
          className={selectedMap === map ? 'active' : ''}
        >
          {map.name}
        </button>
      ))}
      {selectedMap && selectedMap.image && (
        <div className="app__dashboard-map__image" style={{ backgroundImage: `url(${urlFor(selectedMap.image).url()})` }} />
      )}
    </div>
  )
}

export default Maps;
