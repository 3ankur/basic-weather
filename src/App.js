import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Weather from "./components/weatherContainer";
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e65fee47821b529e09d654266b9e11e6


// 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=e65fee47821b529e09d654266b9e11e6&cnt=5'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h4>Weather App</h4>
      </header>
        <Weather/>
    </div>
  );
}

export default App;
