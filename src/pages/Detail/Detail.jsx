// Import library
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    // Initiate state
    const location = useLocation()
    const STATE = location.state
    const BASEURL = `https://api.themoviedb.org/3/movie/${STATE.id}?api_key=7d2b0143c7a8e8cecf663518bdc8b4a2&language=en-US`
    const [detail, setDetail] = useState([])

    // Get Detail data
    const getDetail = useCallback(async () => {
        axios.get(BASEURL)
            .then(res => setDetail(res.data))
    },[BASEURL])
    useEffect(() => {
        getDetail()
    }, [getDetail])

    return (
        <>
            <Row>
                <Col>
                    <p>{detail.overview}</p>
                </Col>
                <Col>
                    <h1>{detail.title}</h1>
                    <h6>{detail.tagline}</h6>
                </Col>
            </Row>
        </>
    )
}

export default Detail
