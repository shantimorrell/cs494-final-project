"use client"
import { useParams } from "next/navigation"

export default function RouteInfo() {
  const route = useParams().route


  return (
    <>
      <h1>Route {route}</h1>
      <p>This page will display information about route {route}...</p>
    </>
  )
}