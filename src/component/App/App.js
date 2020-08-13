import React from 'react';
import Banner  from '../Banner';
import Details from '../Details';
import './App.css';


function App() {
  return (
    <div className="App">
        <Banner temp={12} >Cloudy</Banner>
        <Details />

    </div>
  );
}

export default App;
