// Import library
import React, { Component } from "react";
import { Card, Container, Col, Row, Button, Pagination } from "react-bootstrap";
import axios from "axios";
import { Audio } from "react-loader-spinner";
// Import utility
import routes from "../routes";
import ScrollAnimation from "react-animate-on-scroll";

// default url
const BASEURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=`,
    BASEIMG = "https://image.tmdb.org/t/p/w500"

class CardFilm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            film: [],
            lang: "en-US",
            active: 0,
            isLoading: true
        }
    }

    // Fetching API
    componentDidMount() {
        this.reloadData()
    }
    reloadData(page) {
        const self = this.state
        const URL = `${BASEURL}${process.env.REACT_APP_API_KEY}&language=${self.lang}&page=${page}`
        axios.get(URL)
            .then(res => {
                this.setState({
                    film: res.data.results,
                    isLoading: false
                })
            })
            .catch(err => console.log(err))
    }

    // Pagination
    handlePage = (e) => {
        this.reloadData(e.number)
        this.setState({
            active: e.number
        })
        console.log("e : ", e.number)
    }


    // Get Detail
    handleDetail(data) {
        const ID = data.id;
        const JUDUL = data.title;
        this.props.navigate("/detail", {
            state: {
                id: ID
            }
        })
    }


    render() {
        // Pagination
        let active = this.state.active;
        let items = [<Pagination.Prev key={this.state.page - 99} />];

        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item key={number} onClick={() => this.handlePage({ number })} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        items.push(<Pagination.Next key={this.state.page - 88} />)
        return (
            <>
                {this.state.isLoading ?
                    <div style={{ width: "10%", margin: "auto" }}>
                        <Audio
                            height="100"
                            width="100"
                            radius="9"
                            color="green"
                            ariaLabel="three-dots-loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </div>
                    :
                    <Container fluid>
                        <h1 className="my-3 mt-5 text-center">{this.props.titleList}</h1>
                        <Col md={6} className="mx-auto">
                            <Pagination key={items} className="mx-auto d-flex justify-content-center">{items}</Pagination>
                        </Col>
                        <Row md={4} className="mx-auto">
                            {this.state.film.map((data, index) => {
                                return (
                                    <ScrollAnimation animateIn="fadeInLeft">
                                        <div key={index}>
                                            <Col>
                                                <Card style={{ width: '18rem' }} className="mb-4 shadow">
                                                    {data.backdrop_path == null ?
                                                        <Card.Img variant="top" style={{ height: "16rem" }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZTwq-SBg0TtFy68nSAq-CaHzBSi_YAssBMFc4TE7dIjNTPHpSXDuX-tED9HESy8YJt4&usqp=CAU"} /> :
                                                        <Card.Img variant="top" style={{ height: "25rem" }} src={BASEIMG + data.backdrop_path} />
                                                    }
                                                    <Card.Body>
                                                        <Card.Title style={{ color: "aqua", cursor: "pointer" }} onClick={() => this.handleDetail(data)} className="w-100 mt-2 text-center"> {data.title} </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>
                                    </ScrollAnimation>
                                )
                            })}
                        </Row>
                        <Col md={6} className="mx-auto">
                            <Pagination key={items} className="mx-auto d-flex justify-content-center">{items}</Pagination>
                        </Col>
                    </Container>
                }
            </>
        )
    }
}

export default routes(CardFilm)