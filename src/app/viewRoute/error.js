"use client"
import Link from "next/link"

export default function Error() {

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>Whoops... we seem to have encountered an error.</p>
      <p>It's possible you've tried to get information about a route that doesn't exist.</p>
      <p>Click one of the links to the left to get information about a valid route, or click the button below to return to home.</p>
      <button><Link href={"/"}>Return to Home</Link></button>
    </div>
  )
}