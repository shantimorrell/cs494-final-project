import Link from "next/link";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <>
      <div className="sitetitlebox">
        <FontAwesomeIcon className="bus-route-icon" icon={faRoute} />
        <p className="sitetitle">Corvallis Bus Routes</p>
      </div>
      <nav className="navbar">
        <ul className="navbaritems">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/viewStops">Favorite Stops</Link>
          </li>
          <li>
            <Link href="/editStops">Edit Favorite Stops</Link>
          </li>
          <li>
            <Link href="/viewRoute">Route Info</Link>
          </li>
          <li>
            <Link href="/weather">Weather In Corvallis</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
