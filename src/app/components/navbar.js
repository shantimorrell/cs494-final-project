import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home Page</Link></li>
        <li><Link href="/viewStops">Favorite Stops</Link></li>
        <li><Link href="/editStops">Edit Favorite Stops</Link></li>
        <li><Link href="/viewRoute">Route Info</Link></li>
        <li><Link href="/weather">Weather In Corvallis</Link></li>
      </ul>
    </nav>
  )
}