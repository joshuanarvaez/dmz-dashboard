import React from 'react';
import './Dashboard.scss';

import Maps from '../../components/Maps/Maps';

const Dashboard = () => {
  return (
    <div className="app__dashboard">
      <div className="app__dashboard-stats">
        {/* Your dashboard stats component goes here */}
      </div>
      {window.location.pathname.startsWith('/dashboard') && (
        <div className="app__dashboard-map">
          {/* Your interactive map component goes here */}
          <Maps />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
