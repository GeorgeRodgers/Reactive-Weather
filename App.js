import React, { useState } from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';

function App() {
    const [location, setLocation] = useState('Rome');
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                <Location data={cities} location={location} setLocation={setLocation}/>
            </div>
            <div className = "app">
                {/* Render components here */}
                {cities.map((city, index) => 
                <WeatherCard key={index} city={city}/>
                )}
            </div>            
        </>
    )
}

export default App;