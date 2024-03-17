"use client";

import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./viewRoute.css";

export default function ViewRoutes() {
  return (
    <>
      <div className="route-title">
        <FontAwesomeIcon className="route-landing-page-icon" icon={faBus} />
        <h1 className="route-info-landing-page-title">
          View Route Information
        </h1>
      </div>

      <div className="route-landing-page-description">
        <p>
          This page allows you to view information about a specific Corvallis
          Transit System bus route. This includes information like the route
          color and the bus stops along the route.
        </p>
        <p>
          Click on one of the routes on the left to see information about it.
        </p>
      </div>
    </>
  );
}
