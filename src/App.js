import React from 'react';
import './App.css';
import Sidebar from './features/sidebar/sidebar';
import Result from './features/result/result';

function App() {
  return (
    <div className="App">
      <Result />
      <Sidebar />
    </div>
  );
}

export default App;
