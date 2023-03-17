/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './MapSelector.scss';
import { urlFor, client } from '../../client';

export const MapSelector = ({ maps, setMaps }) => {
  useEffect(() => {
    const query = '*[_type == "map"]{title, image}';

    client.fetch(query)
      .then((data) => {
        setMaps(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMaps]);

  const handleMapClick = (map) => {
    setMaps((prevMaps) => prevMaps.map((m) => (m.title === map.title ? { ...m, selected: true } : { ...m, selected: false })));
  };

  return (
    <div className="map-selector">
      {maps.map((map) => (
        <button
          key={map._id}
          className={`map-selector__button ${map.selected ? 'active' : ''}`}
          onClick={() => handleMapClick(map)}
        >
          {map.title}
        </button>
      ))}
      {maps.find((map) => map.selected)?.image && (
        <div
          className="map-selector__image"
          style={{ backgroundImage: `url(${urlFor(maps.find((map) => map.selected).image)})` }}
        />
      )}
    </div>
  );
};

