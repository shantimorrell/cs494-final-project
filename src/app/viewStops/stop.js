import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export function Stop(props) {
  const { stop } = props


  return (
    <div className="stop-card">
      <h2 className="stop-name">{stop.stopName}</h2>
      <div className="stop-info">
        <h3>Arriving</h3>
        <div className="stop-bus-container">
          {stop.firstRouteName && stop.firstRouteColor && stop.firstRouteArrivals ?
            <>

              <Link 
                className="bus-route" 
                href={`/viewRoute/${stop.firstRouteName}`}
                style={{ backgroundColor: `#${stop.firstRouteColor}` }}

              >
                <p>Route {stop.firstRouteName}</p>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </Link>
              <div className="bus-arrival-container">
                <p className="status-title">Status:</p>
                <p>{stop.firstRouteArrivals}</p>
              </div>
            </>
          :
            <p>No buses arriving soon.</p>
          }
        </div>
        <div className="stop-bus-container">
          {stop.secondRouteName && stop.secondRouteColor && stop.secondRouteArrivals &&
            <>
              <Link 
                className="bus-route" 
                href={`/viewRoute/${stop.secondRouteName}`}
                style={{ backgroundColor: `#${stop.secondRouteColor}` }}

              >
                <p>Route {stop.secondRouteName}</p>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </Link>
              <div className="bus-arrival-container">
                <p className="status-title">Status:</p>
                <p>{stop.secondRouteArrivals}</p>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}