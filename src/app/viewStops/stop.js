import Link from "next/link"

export function Stop(props) {
  const { stop } = props


  return (
    <div>
      <h2>{stop.stopName}</h2>
      <div>
        <div>
          {stop.firstRouteName && stop.firstRouteColor && stop.firstRouteArrivals ?
            <>
              <p>Next arriving: </p>
              {/* Can maybe have a block of color by this Link or something to show route color: stop.firstRouteColor */}
              <Link href={`/viewRoute/${stop.firstRouteName}`}>Route {stop.firstRouteName}</Link>
              <p>Status: {stop.firstRouteArrivals}</p>
            </>
          :
            <p>No buses arriving soon.</p>
          }
        </div>
        <div>
          {stop.secondRouteName && stop.secondRouteColor && stop.secondRouteArrivals &&
            <>
              <p>Also arriving: </p>
              {/* Can maybe have a block of color by this Link or something to show route color: stop.secondRouteColor */}
              <Link href={`/viewRoute/${stop.secondRouteName}`}>Route {stop.secondRouteName}</Link>
              <p>Status: {stop.secondRouteArrivals}</p>
            </>
          }
        </div>
      </div>
    </div>
  )
}