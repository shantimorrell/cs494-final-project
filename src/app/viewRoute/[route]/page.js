"use client"
import { Spinner } from "@/app/components/spinner"
import Error from "next/error"
import { notFound, useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function RouteInfo() {
  // This is the route number (and route id since they're equivalent)
  const route = useParams().route
    
  const [ data, setData ] = useState(null)
  const [ routeInfo, setRouteInfo ] = useState(null)

  // Set loading initially to true since 
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  
  // Fetch route and stop data from static api
  useEffect(() => {
    async function fetchRoutes() {
      setLoading(true)
      try {
        const res = await fetch("https://corvallisb.us/api/static")
        const resBody = await res.json()
        setData(resBody)
        setRouteInfo(resBody.routes[route])
        setLoading(false)
        setError(null)

      } 
      catch (err) {
        setError(true)
        console.error(err)
      }
    }

    fetchRoutes()

  }, [])


  return (
    <>
      <h1>Route {route}</h1>
      {loading && <Spinner />}
      {!routeInfo && !loading && <p>Whoops, this route doesn't exist. Click a route on the left to see information about it.</p>}
      {!loading && data && routeInfo && 
        <div>
          <p>Route color: </p>
          <div>(This div will have a background color of #{routeInfo.color} to show route color)</div>
          <p>More information about this route can be found at <a href={routeInfo.url}>{routeInfo.url}</a></p>
          <div>
            <p>This route goes through the following stops:</p>
            <ol>
              {routeInfo.path.map(stopID => (
                <li key={stopID}>
                  <p>{data.stops[stopID].name}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      }
    </>
  )
}