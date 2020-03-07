import React from 'react';
import logo from './logo.svg';
import './App.css';
import Community from './components/community.jsx';
import Home from './components/homes.jsx'
import ReactTable from 'react-table';

function App() {
  return (
    <div className="App">
      <Community />
      <Home />
    </div>
  );
}

export default App;
