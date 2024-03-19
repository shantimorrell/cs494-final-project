"use client";

import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FavoriteStopsContext } from "../context";

import "./editStops.css";

export default function EditStops() {
  return <Stops />;
}

export function Stops() {
  //this stores an array of all of the bus stops in Corvallis.
  //Each item in the array has this format:  {id: 123... , name: NW Witham... }
  const [stops, setStops] = useState([]);
  const [search, setSearch] = useState("");
  //this is to store the stops that are currently in the search filter
  const [filteredStops, setFilteredStops] = useState([]);

  //use context to keep track of favorite stops
  let { favorites, setFavorites } = useContext(FavoriteStopsContext);

  useEffect(() => {
    async function fetchStops() {
      const stops_response = await fetch("https://corvallisb.us/api/static");
      const stops_json = await stops_response.json();

      //convert the stops field from json format into an array
      const stops_arr = Object.values(stops_json.stops);

      //stops will be an array of objects, each with a name and id field
      const stops_formatted_arr = stops_arr.map((stop) => ({
        id: stop.id,
        name: stop.name,
      }));

      setStops(stops_formatted_arr);
    }
    fetchStops();
  }, []);

  //every time there is a change to the search or stops state, update filteredStops state
  useEffect(() => {
    const searchedStops = stops.filter((stop) => Search(search, stop.name));
    setFilteredStops(searchedStops);
  }, [search, stops]);

  function search_input() {
    setSearch(document.getElementById("search").value);
  }

  function search_input() {
    setSearch(document.getElementById("search").value);
  }

  //function to check if the current stop is already in favorites
  //prevents same stop from being added twice
  function alreadyInFavorites(stop) {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === stop.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="edit-stops-background">
      <div className="edit-favorite-stops-side-bar">
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          <ul className="favorite-stops-side-bar-list">
            {favorites.map((stop) => (
              <li key={stop.id} className="favorite-stop-side-bar-item">
                <p className="side-bar-item-street-name">{stop.name}</p>
                <button
                  onClick={() => {
                    setFavorites(
                      favorites.filter(
                        (favoriteStop) => favoriteStop.id !== stop.id
                      )
                    );
                  }}
                >
                  <FontAwesomeIcon
                    className="side-bar-trash-can"
                    icon={faTrash}
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You don't have any favorite stops yet!</p>
        )}
      </div>
      <div className="find-a-stop-box">
        <div className="title-search-bar-container">
          <h2 className="find-a-stop-title">Find a Stop</h2>
          <input
            id="search"
            placeholder="Search for a stop..."
            onChange={search_input}
          />
        </div>
        <ul className="stop-cards-container">
          {filteredStops.length > 0 ? (
            filteredStops.map((stopObject) => (
              <div key={stopObject.id}>
                <li className="edit-favorites-stop-card">
                  <p className="edit-favorites-stop-name">{stopObject.name}</p>
                  {!alreadyInFavorites(stopObject) ? (
                    <button
                      className="add-to-favorites-button"
                      onClick={() => {
                        setFavorites(favorites.concat(stopObject));
                      }}
                    >
                      Add to Favorites
                    </button>
                  ) : (
                    <button
                      className="remove-from-favorites-button"
                      onClick={() => {
                        setFavorites(
                          favorites.filter(
                            (favItem) => favItem.id !== stopObject.id
                          )
                        );
                      }}
                    >
                      Remove
                    </button>
                  )}
                </li>
              </div>
            ))
          ) : (
            <p>No stops matching your search</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export function Search(input1, input2) {
  const lowerInput1 = input1.toLowerCase();
  const lowerInput2 = input2.toLowerCase();
  return lowerInput2.includes(lowerInput1);
}
