import React from "react";
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"
import snowy from "../assets/Snowy.svg"
import sunny from "../assets/Sunny.svg"
import sad from "../assets/Sad.svg"

function Location({data, location, setLocation}){
    const forecastMap = new Map([
        ['Cloudy', cloudy],
        ['Partly cloudy', partlyCloudy],
        ['Rainy', rainy],
        ['Snowy', snowy],
        ['Sunny', sunny]
      ]);
      
      if (location === ``) {
        return (
          <div className = "card">
              <h3 className="subtitle">Try searching a location</h3>

            <h5 className="subtitle">I can tell you weather in {data.map((obj) => obj.city).slice(0, -1).join(`, `) + ` and ` + data.at(-1).city}</h5>
          </div>);
      } else if (data.find(({ city }) => city === location) === undefined){
        return (
          <div className = "card">
              <h3 className="subtitle">The location, "{location}", was not found</h3>
              <div className = "img-container">
                <img className="card-img-top" src = {sad} alt="Card image cap" id = "icon"/>
              </div>
            <h5 className="subtitle">I can tell you weather in {data.map((obj) => obj.city).slice(0, -1).join(`, `) + ` and ` + data.at(-1).city}</h5>
          </div>
          )
      } else {
    
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
                <h5 className="card-text">It is {data.find(({ city }) => city === location).forecast.toLowerCase()} out today</h5>
            </div>
        </div>)
      };
};

export default Location;