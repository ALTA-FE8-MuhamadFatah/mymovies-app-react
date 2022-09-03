import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../style/detail.css"
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaRegGrinStars } from "react-icons/fa"

const Detail = () => {
    const location = useLocation(),
        STATE = location.state,
        BASEURL = "https://api.themoviedb.org/3/movie/",
        BASEIMG = "https://image.tmdb.org/t/p/original",
        [detail, setDetail] = useState([])

    const getDetail = async () => {
        await axios
            .get(`${BASEURL}${STATE.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((res) => {
                setDetail(res.data)
                console.log(res.data)
            })
    }
    useEffect(() => {
        getDetail()
    }, [])


    return (
        <>
            <Row md={2}>
                <Col className="border">
                    <img className="mx-auto d-block w-100" height={600} src={`${BASEIMG}${detail.backdrop_path}`} alt="" />
                </Col>
                <Col>
                    <h1>{detail.title}</h1>
                    <p>{detail.overview}</p>
                    <p>Release date : {detail.release_date}</p>
                    <p> Genres :
                        {detail.genres.map((val, index) => {
                            return (
                                <span> {val.name}, </span>
                            )
                        })}
                    </p>
                    <p>Rating : <FaRegGrinStars style={{ color: "green", fontSize: "22" }} /> {Math.ceil(detail.vote_average)} / 10</p>
                    <p>Original Source :
                        <a href={detail.homepage}> {detail.homepage}</a>
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Detail