import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

import './Maps.scss';

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(() => {
    const query = '*[_type == "map"]';

    client.fetch(query)
      .then((data) => {
        setMaps(data);
        setSelectedMap(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

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
      {selectedMap && selectedMap.image && (
        <div className="app__dashboard-map__image" style={{ backgroundImage: `url(${urlFor(selectedMap.image).url()})` }} />
      )}
    </div>
  );
};

export default Maps;
