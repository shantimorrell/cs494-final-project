"use client"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function RouteInfo() {
  // This is the route number (and route id since they're equivalent)
  const route = useParams().route
    
  const [ data, setData ] = useState({})
  const [ routeInfo, setRouteInfo ] = useState({})

  
  // Fetch route and stop data from static api
  useEffect(() => {
    async function fetchRoutes() {
      const res = await fetch("https://corvallisb.us/api/static")
      const resBody = await res.json()
      setData(resBody)
      setRouteInfo(resBody.routes[route])
    }

    fetchRoutes()
  }, [])


  return (
    <>
      <h1>Route {route}</h1>
      <p>This page will display information about route {route}...</p>
      <p>Route color: </p>
      <div>(This div will have a background color of #{routeInfo?.color} to show route color)</div>
      <p>More information about this route can be found at <a href={routeInfo?.url}>{routeInfo?.url}</a></p>
      <div>
        <p>This route goes through the following stops:</p>
        <ol>
          {routeInfo.path?.map(stop => (
            <li key={stop}>
              <p>{data.stops[stop].name}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}