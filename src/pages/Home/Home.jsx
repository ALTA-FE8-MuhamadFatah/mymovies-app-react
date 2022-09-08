// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListFilm } from "../../components/ListFilm";
import { useNavigate } from "react-router-dom";
import { useFavContext } from "../../context";
import { Button } from "react-bootstrap";

const Home = () => {
    const BASEURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=7d2b0143c7a8e8cecf663518bdc8b4a2&language=en-US&page=1"
    const BASEIMG = "https://image.tmdb.org/t/p/original/"
    // Initiate State
    const navigate = useNavigate()
    const [list, setList] = useState([])

    // Get api
    const getData = () => {
        axios.get(BASEURL)
            .then(res => setList(res.data.results))
    }
    useEffect(() => {
        getData()
    }, [])

    // Go to Detail
    const handleDetail = ({ id }) => {
        console.log(id)
        navigate("/detail", {
            state: {
                id: id
            }
        })
    }



    const toFavorit = () => {
        navigate("/favorit")
    }

    const { fav } = useFavContext()

    return (
        <>
            <Button onClick={toFavorit}>GoTo favorit</Button>
            <ListFilm
                list={list}
                handleDetail={handleDetail}
                BASEIMG={BASEIMG}
            />
        </>
    )
}

export default Home