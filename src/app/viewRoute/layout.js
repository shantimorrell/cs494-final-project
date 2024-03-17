"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import "./viewRoute.css";

export default function RouteLayout({ children }) {
  const [routes, setRoutes] = useState({});

  // Fetch route data from static api
  useEffect(() => {
    async function fetchRoutes() {
      const res = await fetch("https://corvallisb.us/api/static");
      const resBody = await res.json();
      const routeData = resBody["routes"];
      setRoutes(routeData);
    }

    fetchRoutes();
  }, []);

  return (
    <div className="route-info-box">
      <aside className="route-side-bar">
        <ul>
          {Object.keys(routes).map((id) => (
            <li
              className="route-side-bar-item"
              key={id}
              style={{ backgroundColor: `#${routes[id].color}` }}
            >
              <Link href={`/viewRoute/${routes[id].routeNo}`}>
                Route {routes[id].routeNo}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="route-main-info-box">{children}</div>
    </div>
  );
}
