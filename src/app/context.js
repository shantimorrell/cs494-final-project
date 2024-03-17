"use client"
import { createContext, useState } from "react"

export const FavoriteStopsContext = createContext([])


export default function ContextProvider(props) {

  const { children } = props
  const [ favorite, setFavorite ] = useState([])
  
  return (
    <FavoriteStopsContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteStopsContext.Provider>
  )
}