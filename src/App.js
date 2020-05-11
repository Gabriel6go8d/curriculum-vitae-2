import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import MobileMain from './Components/MobileMain';

function App() {
  console.log(document.documentElement.lang)
  const matches = window.matchMedia('(min-width:1000px)').matches  

  const savedLang = localStorage.getItem('lang') 
  if(savedLang){
    document.documentElement.setAttribute('lang', savedLang)
  }

  return (
    <div className="App app_container">
        {!matches && <MobileMain/>}
        {matches && <Main/>}
    </div>
  );
}

export default App;
