import React, { useState } from 'react';
import './Dashboard.scss';
import { urlFor } from '../../client';


import MapSelector from '../MapSelector/MapSelector';

const Dashboard = () => {
  const [selectedMap, setSelectedMap] = useState(null);

  const handleMapSelect = (map) => {
    setSelectedMap(map);
  };

  return (
    <div className="app__dashboard">
      <div className="app__dashboard-stats">
        {/* Your dashboard stats component goes here */}
      </div>
      {window.location.pathname.startsWith('/dashboard') && (
        <div className="app__dashboard-map">
          {/* Your interactive map component goes here */}
          <MapSelector onMapSelect={handleMapSelect} />
          {selectedMap && (
            <div>
              <h2>{selectedMap.name}</h2>
              <img src={urlFor(selectedMap.image)} alt={selectedMap.name} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
