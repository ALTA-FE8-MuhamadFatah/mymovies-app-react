import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap"
import axios from "axios";

const BASEURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=7d2b0143c7a8e8cecf663518bdc8b4a2&language=en-US&page=1",
    BASEIMG = "https://image.tmdb.org/t/p/original"

class CardFilm extends Component {

    state = {
        film: []
    }

    componentDidMount() {
        axios.get(`${BASEURL}`)
            .then(res => {
                this.setState({
                    film: res.data.results
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container fluid>
                    <h1 className="my-3 mt-5 text-center">{this.props.titleList}</h1>
                    <Row md={4}>
                        {this.state.film.map((data, index) => {
                            return (
                                <div key={index}>
                                    <Col>
                                        <Card style={{ width: '18rem' }} className="mb-4">
                                            <Card.Img variant="top" src={BASEIMG + data.backdrop_path} />
                                            <Card.Body>
                                                <Card.Title className="text-center"> {data.title} </Card.Title>
                                                <Card.Text>Release date : {data.release_date}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })}
                    </Row>
                </Container>

            </>
        )
    }
}

export default CardFilm