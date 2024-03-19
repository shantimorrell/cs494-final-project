import Link from "next/link"
import "./error.css"

export default function NotFound() {
  return(
    <div className="error-page">
      <h1 className="error-title">Whoops</h1>
      <p className="error-description">This page doesn't seem to exist. Click one of the links at the top of the page or click the button below to return to home.</p>
      <button className="return-home-button"><Link href="/">Return Home</Link></button>
    </div>
  )
}