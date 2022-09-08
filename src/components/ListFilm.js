// Import library
import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import { useFavContext } from "../context"

export const ListFilm = ({ list, handleDetail, BASEIMG }) => {

    const { fav, handleFav } = useFavContext()

    return (
        <>
            <Row>
                {list.map((data, index) => {
                    return (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={BASEIMG + data.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.overview}
                                        {data.id}
                                    </Card.Text>
                                    <Button onClick={() => handleDetail(data)}>Go somewhere</Button>
                                    <Button onClick={() => handleFav(data)}>Add to favorit</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}