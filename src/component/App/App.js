import React from 'react';
import Banner  from '../Banner';
import Future from '../Future';
import './App.css';


function App() {
  return (
    <div className="App">
        <Banner temp={12} >Cloudy</Banner>
        <Future />

    </div>
  );
}

export default App;
