import React, { useState } from 'react';
import './Dashboard.scss';
import { urlFor } from '../../client';

import { MapSelector } from '../MapSelector/MapSelector';

const Dashboard = () => {
  const [maps, setMaps] = useState([]);

  return (
    <div className="app__dashboard">
      <div className="app__dashboard-stats">
        {/* Your dashboard stats component goes here */}
      </div>
      {window.location.pathname.startsWith('/dashboard') && (
        <div className="app__dashboard-map">
          {/* Your interactive map component goes here */}
          <MapSelector maps={maps} setMaps={setMaps} />
          {maps.find((map) => map.selected) && (
            <div>
              <h2>{maps.find((map) => map.selected).title}</h2>
              <img src={urlFor(maps.find((map) => map.selected).image).url()} alt={maps.find((map) => map.selected).title} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
