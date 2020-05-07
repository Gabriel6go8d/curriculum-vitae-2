import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import MobileMain from './Components/MobileMain';

function App() {

  const matches = window.matchMedia('(min-width:1000px)').matches  

  return (
    <div className="App app_container">
        {!matches && <MobileMain/>}
        {matches && <Main/>}
    </div>
  );
}

export default App;
