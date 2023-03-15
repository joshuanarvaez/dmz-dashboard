import React from 'react';

import { Dashboard, Footer, Header } from './container';
import { Navbar } from './components';

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