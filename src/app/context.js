"use client";
import { createContext, useState } from "react";

export const FavoriteStopsContext = createContext([]);

export default function ContextProvider(props) {
  const { children } = props;
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteStopsContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteStopsContext.Provider>
  );
}
