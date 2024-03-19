"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faBinoculars,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./weather.css";
import { Spinner } from "../components/spinner";
export default function Weather() {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      const weather_response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=44.5645659&lon=-123.2620435&appid=4cbd262696137f2d879fbd6b01b274ea"
      );
      const weather_json = await weather_response.json();
      setWeather(weather_json);
      setLoading(false)
    }
    fetchWeather();
  }, []);
  return (
    <div className="weather-background">
      <h1 className="weather-title">Current Weather in Corvallis, Oregon</h1>
      {loading && <Spinner />}
      {weather && (
        <div className="weather-info-boxes-container">
          <div className="temp-humidity-box">
            <div className="weather-temp">
              <FontAwesomeIcon
                className="weather-temp-icon"
                icon={faThermometerHalf}
                style={{
                  color: `${
                    (weather.list[0].main.temp - 272.15) * 1.8 + 32 > 50
                      ? "red"
                      : "lightblue"
                  }`,
                }}
              />
              <p className="weather-temp-text">
                {Math.round((weather.list[0].main.temp - 272.15) * 1.8 + 32)} °F
              </p>
            </div>
            <p className="weather-humidity-text">
              Humidity: {weather.list[0].main.humidity}%
            </p>
          </div>
          <div className="weather-description-box">
            <p className="weather-description">
              {weather.list[0].weather[0].description}
            </p>
            <div className="visibility-box">
              <FontAwesomeIcon
                className="visibility-icon"
                icon={faBinoculars}
              />
              <p className="weather-visibility">
                {Math.round(weather.list[0].visibility * 3.281)} feet
              </p>
            </div>
          </div>
          <div className="weather-wind-box">
            <FontAwesomeIcon className="wind-icon" icon={faWind} />
            <p className="wind-text">
              {Math.round(weather.list[0].wind.speed * 2.237)} mph
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
