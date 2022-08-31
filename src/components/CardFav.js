import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap"

class CardFav extends Component {

    state = {
        film: [
            {
                image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/19/1163267089.jpg",
                title: "Spongebob Squarepants",
                desk: "The SpongeBob SquarePants Movie adalah sebuah film animasi berdasarkan acara TV hit Nickelodeon SpongeBob SquarePants."
            },
            {
                image: "https://i0.wp.com/i0.kym-cdn.com/photos/images/original/001/274/699/36d.jpg",
                title: "My Little Pony",
                desk: "My Little Pony (MLP) adalah sebuah waralaba media dan mainan yang utamanya ditargetkan kepada anak perempuan, yang dikembangkan oleh perusahaan mainan Amerika. "
            },
            {
                image: "https://i.pinimg.com/736x/24/f9/3d/24f93d25dabb354fbb2029a7bc2963e0.jpg",
                title: "Upin & Ipin",
                desk: "Upin & Ipin adalah serial televisi animasi kartun anak-anak yang dirilis pada tanggal 14 September 2007 yang ditayangkan di TV9, RTM2, MNCTV dan Kids TV. "
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BNTU4YWEzMzMtZGQ0Ny00Y2Q4LTgyZTYtOWVmZjUyZDhjMWYzXkEyXkFqcGdeQXVyMTM0MDY3ODQ3._V1_.jpg",
                title: "One Piece Red",
                desk: "One Piece Film: Red merupakan film One Piece ke-15 yang dirilis pada 6 Agustus 2022. Film ini pertama kali diumumkan pada 21 November 2021."
            }
        ]
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
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img style={{ height: "25rem" }} variant="top" src={data.image} />
                                            <Card.Body>
                                                <Card.Title className="text-center"> {data.title} </Card.Title>
                                                <Card.Text>{data.desk}</Card.Text>
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

export default CardFav