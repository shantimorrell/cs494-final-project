"use client"
import { useContext } from "react"
import { FavoriteStopsContext } from "../context"
import { Stop } from "./stop"

export default function ViewStops() {
  let { favorite } = useContext(FavoriteStopsContext)
  console.log(favorite)

  return (
    <>
      <h1>Favorite Stops</h1>
      {favorite.map(stop => (
        <Stop key={stop} stop={stop} />
      ))}
    </>
  )
}