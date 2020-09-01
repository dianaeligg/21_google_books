import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import './BookCard.css'


const BookCard = ({
    index,
    _id,
    title,
    subtitle,
    authors,
    description,
    image,
    link,
    handleSaveClick,
    handleDeleteClick
}) => {

    const location = useLocation();

    return (
        <Card style={{ width: '100%' }} className='bookCard'>
            <Card.Body className='p-2'>
                <Row>
                    <Col xs={9}>
                        <Card.Title className='mb-2 title'>{title}</Card.Title>
                        <Card.Subtitle className="mb-0 text-muted subtitle">{subtitle}</Card.Subtitle>
                        <p className="mb-1 text-muted authors">Written by: {authors}</p>
                    </Col>
                    <Col xs={3} className='text-right'>
                        <Button className='py-1 px-2 mr-2 btn' variant="outline-primary"><a href={link} target='_blank' rel="noopener noreferrer">View</a></Button>
                        {(location.pathname === "/" || location.pathname === "/Search") ?
                            <Button
                                className='py-1 px-2 btn'
                                variant="outline-info"
                                id={_id}
                                index={index}
                                onClick={handleSaveClick}
                            >Save</Button> :
                            <Button
                                className='py-1 px-2 btn'
                                variant="outline-danger"
                                id={_id}
                                index={index}
                                onClick={handleDeleteClick}
                            >Delete</Button>}
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <img
                            className="d-block bookPic"
                            src={image}
                            alt="First slide"
                        />
                    </Col>
                    <Col xs={10}>
                        <Card.Text className='ml-2 text-muted description'>
                            {description}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}


export default BookCard;