"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


export default function RouteLayout({ children }) {
  
  const [ routes, setRoutes ] = useState({})
  
  // Fetch route data from static api
  useEffect(() => {
    async function fetchRoutes() {
      const res = await fetch("https://corvallisb.us/api/static")
      const resBody = await res.json()
      const routeData = resBody["routes"]
      setRoutes(routeData)
    }

    fetchRoutes()
  }, [])
  
  return (
    <>
      <aside>
        <ul>
          {Object.keys(routes).map(id => (
            <li key={id}><Link href={`/viewRoute/${routes[id].routeNo}`}>Route {routes[id].routeNo}</Link></li>
          ))}
        </ul>
      </aside>
      <div>
        {children}
      </div>
    </>
  );
}