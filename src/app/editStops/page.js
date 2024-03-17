"use client"

import { useState, useEffect } from "react";
import styles from "../page.module.css";

export default function EditStops() {
    return(
        <div className={styles.main}>
            <h1>Edit Favorite Stops</h1>
            <Stops />
        </div>
    )
}

export function Stops() {
    const [stops, setStops] = useState([])
    const [id, setID] = useState([])
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        async function fetchStops() {
            const stops_response = await fetch("https://corvallisb.us/api/static")
            const stops_json = await stops_response.json()
            setStops(stops_json.stops)

        } fetchStops()
    }, [])

    // console.log("Stops: ", stops)
    // Get stop ID from JSON
    useEffect(() => {
        const ids = []
        for (let id in stops) {
            ids[ids.length] = id
        }
        setID(ids)
    }, [stops])
    
    // console.log(id)
    return(
        <div>
            <h2>Favorite Stops</h2>
            <ul>
                {favorite.map((stop, index) => (
                    <li>{favorite[index]} <button onClick={() => setFavorite(favorite.filter((stop, index) => index))}>Delete</button></li>
                ))}
            </ul>
            <h2>Select a Favorite Stop</h2>
            <ul>
                {id.map((stop, index) => (
                    <li>{stops[id[index]].name} <button onClick={() => setFavorite(favorite.concat(stops[id[index]].name))}>Select</button></li>
                ))}
            </ul>   
        </div>
        
    )
}
