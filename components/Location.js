import React from "react";
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"
import snowy from "../assets/Snowy.svg"
import sunny from "../assets/Sunny.svg"

function Location({data, location, setLocation}){
    const forecastMap = new Map([
        ['Cloudy', cloudy],
        ['Partly cloudy', partlyCloudy],
        ['Rainy', rainy],
        ['Snowy', snowy],
        ['Sunny', sunny]
      ]);
    
      function forecastImg() {
        return forecastMap.get(data.find(({ city }) => city === location).forecast);
      }
      return (
        <div className = "card">
            <h3 className="subtitle">Your Location's Weather</h3>
            <div className = "img-container">
                <img className="card-img-top" src = {forecastImg()} alt="Card image cap" id = "icon"/>
            </div>
            <div class="card-body">
                <h3 className="card-title">The weather in {data.find(({ city }) => city === location).city} is</h3>
                <h5 className="card-text">{data.find(({ city }) => city === location).temperature} °C</h5>
                <h5 className="card-text">It is {data.find(({ city }) => city === location).forecast} out today</h5>
            </div>
        </div>)
};

export default Location;