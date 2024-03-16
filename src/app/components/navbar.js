import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/viewRoute">Route Info</Link>
        </li>
      </ul>
    </nav>
  )
}