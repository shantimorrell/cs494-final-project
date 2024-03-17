"use client";
import { Spinner } from "@/app/components/spinner";
import Error from "next/error";
import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

export default function RouteInfo() {
  // This is the route number (and route id since they're equivalent)
  const route = useParams().route;

  const [data, setData] = useState(null);
  const [routeInfo, setRouteInfo] = useState(null);

  // Set loading initially to true since
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch route and stop data from static api
  useEffect(() => {
    async function fetchRoutes() {
      setLoading(true);
      try {
        const res = await fetch("https://corvallisb.us/api/static");
        const resBody = await res.json();
        setData(resBody);
        setRouteInfo(resBody.routes[route]);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(true);
        console.error(err);
      }
    }

    fetchRoutes();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!routeInfo && !loading && (
        <p>
          Whoops, this route doesn't exist. Click a route on the left to see
          information about it.
        </p>
      )}
      {!loading && data && routeInfo && (
        <>
          <div className="title-information-header">
            <div
              className="route-title"
              style={{ color: `#${routeInfo.color}` }}
            >
              <FontAwesomeIcon className="route-title-icon" icon={faBus} />
              <h1>Route {route}</h1>
            </div>
            <div className="more-info-link">
              <a href={routeInfo.url}>More Information</a>
            </div>
          </div>
          <div className="route-stops-box">
            <p className="following-stops-message">This route goes through the following stops:</p>
            <ol className="route-stops-list">
              {routeInfo.path.map((stopID, index) => (
                <li className="stop-box" key={stopID}>
                  <div
                    className="route-stop-circle"
                    style={{ backgroundColor: `#${routeInfo.color}` }}
                  >
                    {index + 1}
                  </div>
                  <p className="stop-name">{data.stops[stopID].name}</p>
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </>
  );
}
