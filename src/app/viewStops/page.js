"use client"
import { useContext, useState, useEffect } from "react"
import { FavoriteStopsContext } from "../context"
import { Stop } from "./stop"
import { Spinner } from "../components/spinner"
import Link from "next/link"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./viewStops.css"

export default function ViewStops() {
  let { favoriteIDs } = useContext(FavoriteStopsContext)

  const [ data, setData ] = useState(null)

  // Set loading initially to true since 
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)


  
  // Fetch stop data from getFavorites API
  useEffect(() => {
    async function fetchStopInfo() {
      setLoading(true)
      
      // Create string with comma separated stop IDs for API call
      let stopStr = ""
      favoriteIDs.forEach((id, index) => {
        stopStr = stopStr.concat(id)
        if (index != favoriteIDs.length - 1) {
          stopStr = stopStr.concat(",")
        }
      })

      try {
        const res = await fetch(`https://corvallisb.us/api/favorites?stops=${stopStr}`)
        const resBody = await res.json()
        setData(await resBody)
        setLoading(false)
        setError(null)
      } 
      catch (err) {
        setError(true)
        console.error(err)
      }
    }
    if (favoriteIDs.length != 0) {
      fetchStopInfo()
    }
  }, [])



  return (
    <>
      <div className="stop-main-info-box">
        <div className="stop-title">
          <FontAwesomeIcon className="stop-landing-page-icon" icon={faLocationDot} />
          <h1 className="stop-landing-page-title">Favorite Stops</h1>
        </div>
        <div className="stop-landing-page-description">
          {loading && <Spinner />}
          {!data && 
            <div>
              <p>You don't have any favorite stops yet!</p>
              <button><Link href="/editStops">Add Favorite Stops</Link></button>
            </div>
          }
          {!loading && data &&
            <div>
              {Object.keys(data).map((stop) => 
                <Stop key={data[stop].stopID} stop={data[stop]} />
              )}
            </div>
          }
        </div>
      </div>
    </>
  )
}