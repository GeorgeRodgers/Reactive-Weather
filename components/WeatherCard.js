import React from "react";
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"
import snowy from "../assets/Snowy.svg"
import sunny from "../assets/Sunny.svg"

function WeatherCard(props) {

// My original attempt using a loop

  // const forecast = [
  //   {img: cloudy, text: `Cloudy`},
  //   {img: partlyCloudy, text: `Partly cloudy`},
  //   {img: rainy, text: `Rainy`},
  //   {img: sunny, text: `Sunny`}
  // ];
  // function forecastImg(){
  //   for (obj of forecast) {
  //     if (props.city.forecast == obj.text){
  //       return obj.img;
  //     }
  //   }
  // }

// Improvements suggested by Atlas using a Map class

  const forecastMap = new Map([
    ['Cloudy', cloudy],
    ['Partly cloudy', partlyCloudy],
    ['Rainy', rainy],
    ['Snowy', snowy],
    ['Sunny', sunny] // added during Reactive Weather part 3
  ]);

  function forecastImg() {
    return forecastMap.get(props.city.forecast); // .get() method matches the parameter to the array in the class
  }
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {forecastImg()} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.city.city}</h3>
            <h5 className="card-text">{props.city.temperature}</h5>
            <h5 className="card-text">{props.city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard

export default WeatherCard;