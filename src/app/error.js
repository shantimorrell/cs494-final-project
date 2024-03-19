"use client"
import Link from "next/link"
import "./error.css"
import { useEffect } from "react"

export default function Error({
  error,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="error-page">
      <h1 className="error-title">Something went wrong!</h1>
      <p className="error-description">It's probably our fault. Feel free to try again later, or click the button below to return home.</p>
      <button className="return-home-button"><Link href="/">Return Home</Link></button>
    </div>
  )
}