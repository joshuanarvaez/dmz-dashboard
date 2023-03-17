import React from 'react';

import { Navbar, Header, Footer, Dashboard } from './components';

import './App.scss';

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <Dashboard />
        <Footer />
    </div>
  );
}

export default App;