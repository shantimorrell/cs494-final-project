"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import "./viewRoute.css";
import { Spinner } from "../components/spinner";

export default function RouteLayout({ children }) {
  const [routes, setRoutes] = useState({});
  const [loading, setLoading] = useState(true)

  // Fetch route data from static api
  useEffect(() => {
    async function fetchRoutes() {
      const res = await fetch("https://corvallisb.us/api/static");
      const resBody = await res.json();
      const routeData = resBody["routes"];
      setRoutes(routeData);
      setLoading(false)
    }

    fetchRoutes();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading &&
        <div className="route-info-box">
          <aside className="route-side-bar">
            <ul>
              {Object.keys(routes).map((id) => (
                
                  <Link href={`/viewRoute/${routes[id].routeNo}`}>
                  <li
                    className="route-side-bar-item"
                    key={id}
                    style={{ backgroundColor: `#${routes[id].color}` }}
                  >Route {routes[id].routeNo}</li>
                  </Link>
                
              ))}
            </ul>
          </aside>
          <div className="route-main-info-box">{children}</div>
        </div>
      }
    </>
  );
}
