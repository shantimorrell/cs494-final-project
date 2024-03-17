"use client";

import { useState, useEffect, useContext } from "react";
import styles from "../page.module.css";
import { FavoriteStopsContext } from "../context";
import "./editStops.css";

export default function EditStops() {
  return (
    <div className="edit-stops-background">
      <h1>Edit Favorite Stops</h1>
      <Stops />
    </div>
  );
}

export function Stops() {
  const [stops, setStops] = useState([])
  const [id, setID] = useState([])
  let { favorite, setFavorite } = useContext(FavoriteStopsContext)
  let { favoriteIDs, setFavoriteIDs } = useContext(FavoriteStopsContext)
  const [search, setSearch] = useState("")


  useEffect(() => {
    async function fetchStops() {
      const stops_response = await fetch("https://corvallisb.us/api/static");
      const stops_json = await stops_response.json();
      setStops(stops_json.stops);
    }
    fetchStops();
  }, []);

  // console.log("Stops: ", stops)
  // Get stop ID from JSON
  useEffect(() => {
    const ids = [];
    for (let id in stops) {
      ids[ids.length] = id;
    }
    setID(ids);
  }, [stops]);

  function search_input() {
    setSearch(document.getElementById("search").value);
  }

  function search_input() {
      setSearch(document.getElementById("search").value)
  }

  // console.log(id)
  console.log(search)
  return(
      <div>
          <h2>Favorite Stops</h2>
          <ul>
              {favorite.map((stop, index) => (
                  <li key={stop}>{favorite[index]} <button onClick={() => setFavorite(favorite.filter((stop, index) => index))}>Delete</button></li>
              ))}
          </ul>
          <h2>Select a Favorite Stop or Search <input id="search" onChange={search_input}/></h2>
          <ul>
              {id.map((stop, index) => (
                  <div key={stop}>
                      {Search(search, stops[id[index]].name) &&
                      <li>{stops[id[index]].name} 
                          <button onClick={() => {
                              setFavorite(favorite.concat(stops[id[index]].name));
                              setFavoriteIDs(favoriteIDs.concat(id[index]));
                          }}>
                              Select
                          </button>
                      </li>}
                  </div>
              ))}
          </ul>   
      </div>
  )
//   FROM MAIN BEFORE MERGING
//   // console.log(id)
//   console.log(search);
//   return (
//     <div>
//       <h2>Favorite Stops</h2>
//       <ul>
//         {favorite.map((stop, index) => (
//           <li>
//             {favorite[index]}{" "}
//             <button
//               onClick={() =>
//                 setFavorite(favorite.filter((stop, index) => index))
//               }
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <h2>
//         Select a Favorite Stop or Search{" "}
//         <input id="search" onChange={search_input} />
//       </h2>
//       <ul>
//         {id.map((stop, index) => (
//           <div>
//             {Search(search, stops[id[index]].name) && (
//               <li>
//                 {stops[id[index]].name}{" "}
//                 <button
//                   onClick={() =>
//                     setFavorite(favorite.concat(stops[id[index]].name))
//                   }
//                 >
//                   Select
//                 </button>
//               </li>
//             )}
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
}

export function Search(input1, input2) {
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] != input2[i]) {
      return false;
    }
  }
  return true;
}
