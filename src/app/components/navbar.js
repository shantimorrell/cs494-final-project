import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/viewRoute">Route Info</Link></li>
        <li><Link href="/weather">Weather</Link></li>
      </ul>
    </nav>
  )
}