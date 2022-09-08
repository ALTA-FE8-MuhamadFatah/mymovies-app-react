import React, { useContext, createContext, useState, useEffect } from "react";

const FavContext = createContext();

export const useFavContext = () => {
    const context = useContext(FavContext);
    const [fav, setFav] = context.fav

    const handleFav = (data) => {
        setFav([...fav, data])
        console.log(fav)
    }

    return {
        handleFav,
        fav
    }
}

export const FavProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem("favs")) || []
    const [fav, setFav] = useState(initialState)

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(fav))
    }, [fav])

    return (
        <FavContext.Provider
            value={{ fav: [fav, setFav] }}
        >
            {children}
        </FavContext.Provider>
    )
}