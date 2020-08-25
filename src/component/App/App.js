import React from 'react';
import Banner  from '../Banner';
import Future from '../Future';
import './App.css';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.container}>
      <div className={style.App}>
          <Banner temp={12} >Cloudy</Banner>
          <Future />
      </div>
    </div>
  );
}

export default App;
