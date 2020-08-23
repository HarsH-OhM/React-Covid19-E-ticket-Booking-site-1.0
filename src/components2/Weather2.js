
import React, { useState } from "react";

import "../index.css";
import "../weather.css";
const api = {
  key: "b94da33243ad1adf4bc55464362054ad",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather2() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (

    <div className="content">
      <h2>Enter your  Traveling Location...and get the Weather Information.</h2>
    <div
      className={
        typeof weather.main != "undefined"
        
          ? weather.main.temp >32
            ? "App hot"
            : "App cloud"
          : "App"
      }
    >
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>

    </div>
  );
}

export default Weather2;