"use client"

import { useState, useEffect } from "react";
import styles from "../page.module.css";

export default function Weather() {
    const [weather, setWeather] = useState("")
    useEffect(() => {
        async function fetchWeather() {
            const weather_response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.5645659&lon=-123.2620435&appid=4cbd262696137f2d879fbd6b01b274ea")
            const weather_json = await weather_response.json()
            setWeather(weather_json)

        } fetchWeather()
    }, [])
    return(
        <div className={styles.main}>
            <h1>Weather for Corvallis, Oregon</h1>
            {weather &&
            <ul>
                <li>Temperature: {Math.round((weather.list[0].main.temp - 272.15) * 1.8 + 32)} Degrees Farenheit</li>
                <li>Humidity: {weather.list[0].main.humidity}</li>
                <li>Description: {weather.list[0].weather[0].description}</li>
                <li>Wind Speed: {weather.list[0].wind.speed} Meters Per Second</li>
                <li>Visibility: {weather.list[0].visibility} Meters</li>
            </ul>}
        </div>
    )
}