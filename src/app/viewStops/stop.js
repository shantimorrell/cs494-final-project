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
              <div className="bus-route-container">
                {/* <p>Next arriving: </p> */}
                <Link href={`/viewRoute/${stop.firstRouteName}`}>Route {stop.firstRouteName}</Link>
              </div>
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
              <div className="bus-route-container">
                <Link href={`/viewRoute/${stop.secondRouteName}`}>Route {stop.secondRouteName}</Link>
              </div>
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